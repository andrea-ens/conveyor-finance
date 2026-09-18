import nodemailer from "nodemailer";

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

export function isMailConfigured() {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim()
  );
}

export function getHelloInbox() {
  return process.env.HELLO_EMAIL?.trim() || "hello@conveyor.finance";
}

export function getCareersInbox() {
  return process.env.CAREERS_EMAIL?.trim() || "careers@conveyor.finance";
}

export function createMailTransport() {
  const host = requiredEnv("SMTP_HOST");
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export type CareerApplication = {
  roleTitle: string;
  name: string;
  email: string;
  url: string;
  note: string;
};

export async function sendCareerApplication(application: CareerApplication) {
  const inbox = getCareersInbox();
  const from = process.env.SMTP_FROM?.trim() || process.env.SMTP_USER!.trim();
  const transport = createMailTransport();

  const text = [
    `Role: ${application.roleTitle}`,
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    `Portfolio or GitHub: ${application.url || "—"}`,
    "",
    "Why Conveyor Finance, and what would you own in the first 90 days:",
    application.note,
  ].join("\n");

  await transport.sendMail({
    from: `"Conveyor Finance" <${from}>`,
    to: inbox,
    replyTo: `${application.name} <${application.email}>`,
    subject: `Application: ${application.roleTitle} — ${application.name}`,
    text,
  });
}

export type ContactMessage = {
  name: string;
  email: string;
  org: string;
  note: string;
};

export async function sendContactMessage(message: ContactMessage) {
  const inbox = getHelloInbox();
  const from = process.env.SMTP_FROM?.trim() || process.env.SMTP_USER!.trim();
  const transport = createMailTransport();

  const text = [
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Organization: ${message.org || "—"}`,
    "",
    message.note,
  ].join("\n");

  await transport.sendMail({
    from: `"Conveyor Finance" <${from}>`,
    to: inbox,
    replyTo: `${message.name} <${message.email}>`,
    subject: `Contact: ${message.name}${message.org ? ` — ${message.org}` : ""}`,
    text,
  });
}
