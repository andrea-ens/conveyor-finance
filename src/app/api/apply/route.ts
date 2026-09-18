import { NextResponse } from "next/server";
import { validateEmail } from "@/utils/validateEmail";
import {
  isMailConfigured,
  sendCareerApplication,
} from "@/lib/mail";

export const runtime = "nodejs";

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
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clip(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clip(body.name, LIMITS.name);
  const email = clip(body.email, LIMITS.email);
  let url = clip(body.url, LIMITS.url);
  if (url && !/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  const note = clip(body.note, LIMITS.note);
  const roleTitle = clip(body.roleTitle, LIMITS.roleTitle);

  if (!name || !email || !note || !roleTitle) {
    return NextResponse.json(
      { error: "Name, email, role, and note are required." },
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
    await sendCareerApplication({ roleTitle, name, email, url, note });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Career application mail failed:", error);
    return NextResponse.json(
      { error: "Could not deliver the application. Try again, or write to careers@conveyor.finance." },
      { status: 502 }
    );
  }
}
