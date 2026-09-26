export const RESUME_MAX_BYTES = 4 * 1024 * 1024;

const ALLOWED = [
  {
    ext: ".pdf",
    mime: "application/pdf",
    magic: [0x25, 0x50, 0x44, 0x46],
  },
  {
    ext: ".docx",
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    magic: [0x50, 0x4b],
  },
  {
    ext: ".doc",
    mime: "application/msword",
    magic: [0xd0, 0xcf, 0x11, 0xe0],
  },
] as const;

export function safeResumeFilename(name: string) {
  const cleaned = name.replace(/[^\w.\- ]+/g, "_").trim().slice(0, 120);
  return cleaned || "resume.pdf";
}

function hasMagic(bytes: Uint8Array, prefix: readonly number[]) {
  if (bytes.length < prefix.length) {
    return false;
  }
  return prefix.every((value, index) => bytes[index] === value);
}

export function parseResumeFile(
  file: { name: string; size: number },
  bytes: Uint8Array
) {
  if (file.size === 0 || bytes.length === 0) {
    return { error: "Upload a resume." as const };
  }
  if (file.size > RESUME_MAX_BYTES) {
    return { error: "Resume must be 4 MB or smaller." as const };
  }

  const lower = file.name.toLowerCase();
  const match = ALLOWED.find((item) => lower.endsWith(item.ext));

  if (!match || !hasMagic(bytes, match.magic)) {
    return {
      error: "Resume must be a PDF, DOC, or DOCX file." as const,
    };
  }

  return {
    filename: safeResumeFilename(file.name),
    contentType: match.mime,
  };
}
