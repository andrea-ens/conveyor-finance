import { NextResponse } from "next/server";
import { validateEmail } from "@/utils/validateEmail";
import { isEngagementType } from "@/lib/engagement";
import { parseResumeFile } from "@/lib/resume";
import {
  isMailConfigured,
  sendCareerApplication,
} from "@/lib/mail";

export const runtime = "nodejs";
export const maxDuration = 30;

const LIMITS = {
  name: 120,
  email: 254,
  url: 500,
  note: 8000,
  roleTitle: 200,
};

function clip(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clip(form.get("website"), 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clip(form.get("name"), LIMITS.name);
  const email = clip(form.get("email"), LIMITS.email);
  let url = clip(form.get("url"), LIMITS.url);
  if (url && !/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  const note = clip(form.get("note"), LIMITS.note);
  const roleTitle = clip(form.get("roleTitle"), LIMITS.roleTitle);
  const engagement = clip(form.get("engagement"), 40);

  if (!name || !email || !note || !roleTitle) {
    return NextResponse.json(
      { error: "Name, email, role, and note are required." },
      { status: 400 }
    );
  }

  if (!isEngagementType(engagement)) {
    return NextResponse.json(
      { error: "Select full-time, part-time, or contract." },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  if (url && !/^https?:\/\//i.test(url)) {
    return NextResponse.json(
      { error: "Portfolio or GitHub must be an http(s) URL." },
      { status: 400 }
    );
  }

  const resumeField = form.get("resume");
  if (
    !resumeField ||
    typeof resumeField === "string" ||
    typeof resumeField.arrayBuffer !== "function"
  ) {
    return NextResponse.json({ error: "Upload a resume." }, { status: 400 });
  }

  const resumeName =
    "name" in resumeField && typeof resumeField.name === "string"
      ? resumeField.name
      : "resume.pdf";
  const resumeBytes = new Uint8Array(await resumeField.arrayBuffer());
  const parsed = parseResumeFile(
    { name: resumeName, size: resumeField.size },
    resumeBytes
  );
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  if (!isMailConfigured()) {
    return NextResponse.json(
      {
        error:
          "Mail is not configured on the server. Add SMTP settings for careers@conveyor.finance.",
      },
      { status: 503 }
    );
  }

  try {
    await sendCareerApplication({
      roleTitle,
      engagement,
      name,
      email,
      url,
      note,
      resume: {
        filename: parsed.filename,
        contentType: parsed.contentType,
        content: Buffer.from(resumeBytes),
      },
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Career application mail failed:", error);
    const detail =
      error && typeof error === "object" && "response" in error
        ? String((error as { response?: string }).response || "").slice(0, 180)
        : "";
    return NextResponse.json(
      {
        error: detail
          ? `Could not deliver the application (${detail}). Check SMTP settings on Vercel, then try again.`
          : "Could not deliver the application. Check SMTP settings on Vercel, then try again.",
      },
      { status: 502 }
    );
  }
}
