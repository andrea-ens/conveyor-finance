import { NextResponse } from "next/server";
import { validateEmail } from "@/utils/validateEmail";
import { isMailConfigured, publicSmtpError, sendContactMessage } from "@/lib/mail";

export const runtime = "nodejs";
export const maxDuration = 30;

const LIMITS = {
  name: 120,
  email: 254,
  org: 200,
  note: 8000,
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
  const org = clip(body.org, LIMITS.org);
  const note = clip(body.note, LIMITS.note);

  if (!name || !email || !note) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  if (!isMailConfigured()) {
    return NextResponse.json(
      {
        error:
          "Mail is not configured on the server. Add SMTP settings for conveyor.finance.",
      },
      { status: 503 }
    );
  }

  try {
    await sendContactMessage({ name, email, org, note });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact mail failed:", error);
    const detail = publicSmtpError(error);
    return NextResponse.json(
      {
        error: detail
          ? `Could not deliver the message (${detail}).`
          : "Could not deliver the message. Check SMTP settings on Vercel, then try again.",
      },
      { status: 502 }
    );
  }
}
