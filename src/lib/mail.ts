import dns from "node:dns";
import nodemailer from "nodemailer";
import type { SendMailOptions, Transporter } from "nodemailer";

dns.setDefaultResultOrder("ipv4first");

function unwrapSecret(value: string | undefined) {
  let pass = value?.trim() ?? "";
  if (
    (pass.startsWith('"') && pass.endsWith('"')) ||
    (pass.startsWith("'") && pass.endsWith("'"))
  ) {
    pass = pass.slice(1, -1);
  }
  return pass;
}

function smtpConfig() {
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = unwrapSecret(process.env.SMTP_PASS);
  const from =
    process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim() || "";
  const port = Number(process.env.SMTP_PORT?.trim() || 465);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return { host, user, pass, from, port, secure };
}

export function isMailConfigured() {
  const { host, user, pass } = smtpConfig();
  return Boolean(host && user && pass);
}

export function getHelloInbox() {
  return process.env.HELLO_EMAIL?.trim() || "hello@conveyor.finance";
}

export function getCareersInbox() {
  return process.env.CAREERS_EMAIL?.trim() || "careers@conveyor.finance";
}

export function publicSmtpError(error: unknown) {
  if (!error || typeof error !== "object") {
    return "";
  }
  const err = error as {
    code?: string;
    response?: string;
    message?: string;
  };
  const text = [err.code, err.response || err.message]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  return text.slice(0, 180);
}

function createTransport(port: number, secure: boolean): Transporter {
  const { host, user, pass } = smtpConfig();
  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    connectionTimeout: 12_000,
    greetingTimeout: 12_000,
    socketTimeout: 18_000,
    tls: {
      servername: host,
      minVersion: "TLSv1.2",
    },
    lookup(hostname, _options, callback) {
      dns.lookup(hostname, { family: 4 }, callback);
    },
  });
}

async function sendMailWithFallback(options: SendMailOptions) {
  const { port, secure } = smtpConfig();
  const attempts: { port: number; secure: boolean }[] = [
    { port, secure: port === 465 ? true : secure },
  ];
  if (port === 465) {
    attempts.push({ port: 587, secure: false });
  } else if (port === 587) {
    attempts.push({ port: 465, secure: true });
  }

  let lastError: unknown;
  for (const attempt of attempts) {
    const transport = createTransport(attempt.port, attempt.secure);
    try {
      await transport.sendMail(options);
      return;
    } catch (error) {
      lastError = error;
      console.error(
        `SMTP send failed on port ${attempt.port}:`,
        publicSmtpError(error) || error
      );
    } finally {
      transport.close();
    }
  }
  throw lastError;
}

export type CareerApplication = {
  roleTitle: string;
  engagement: string;
  name: string;
  email: string;
  url: string;
  note: string;
  resume?: {
    filename: string;
    contentType: string;
    content: Buffer;
  };
};

export async function sendCareerApplication(application: CareerApplication) {
  if (!application.resume?.content.length) {
    throw new Error("Resume is required");
  }

  const { from } = smtpConfig();
  const inbox = getCareersInbox();
  const resume = application.resume;

  const text = [
    `Role: ${application.roleTitle}`,
    `Engagement: ${application.engagement}`,
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    `Portfolio or GitHub: ${application.url || "—"}`,
    `Resume: ${resume.filename} (attached)`,
    "",
    "Why Conveyor Finance, and what would you own in the first 90 days:",
    application.note,
  ].join("\n");

  await sendMailWithFallback({
    from: `"Conveyor Finance" <${from}>`,
    to: inbox,
    replyTo: `${application.name} <${application.email}>`,
    subject: `Application: ${application.roleTitle} (${application.engagement}) — ${application.name}`,
    text,
    attachments: [
      {
        filename: resume.filename,
        content: resume.content.toString("base64"),
        encoding: "base64",
        contentType: resume.contentType,
        contentDisposition: "attachment",
      },
    ],
  });
}

export type ContactMessage = {
  name: string;
  email: string;
  org: string;
  note: string;
};

export async function sendContactMessage(message: ContactMessage) {
  const { from } = smtpConfig();
  const inbox = getHelloInbox();

  const text = [
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Organization: ${message.org || "—"}`,
    "",
    message.note,
  ].join("\n");

  await sendMailWithFallback({
    from: `"Conveyor Finance" <${from}>`,
    to: inbox,
    replyTo: `${message.name} <${message.email}>`,
    subject: `Contact: ${message.name}${message.org ? ` — ${message.org}` : ""}`,
    text,
  });
}
