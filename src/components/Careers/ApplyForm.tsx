"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ApplyForm = ({ roleTitle }: { roleTitle: string }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const url = String(data.get("url") || "").trim();
    const note = String(data.get("note") || "").trim();

    const subject = encodeURIComponent(`Application: ${roleTitle} — ${name}`);
    const body = encodeURIComponent(
      [
        `Role: ${roleTitle}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Portfolio or GitHub: ${url || "—"}`,
        "",
        "Why Conveyor, and what would you own in the first 90 days:",
        note,
      ].join("\n")
    );

    window.location.href = `mailto:careers@conveyor.finance?subject=${subject}&body=${body}`;
    setStatus("opened");
  };

  return (
    <>
      <Button
        type="button"
        size="lg"
        onClick={() => setOpen(true)}
        className="bg-primary text-background h-12 px-8 rounded-lg font-medium"
      >
        Apply
      </Button>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setStatus("idle");
        }}
      >
        <DialogContent
          overlayClassName="bg-black/80 backdrop-blur-md"
          className="sm:max-w-[42rem] w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl border border-white/15 ring-0 bg-transparent"
          style={{ backgroundColor: "#111816" }}
        >
          <div className="p-9 sm:p-12 space-y-8" style={{ backgroundColor: "#111816" }}>
          <DialogHeader>
            <p className="text-primary text-sm uppercase tracking-wide">
              Apply
            </p>
            <DialogTitle className="text-white text-2xl sm:text-3xl font-medium">
              {roleTitle}
            </DialogTitle>
            <DialogDescription className="text-white/55 text-base leading-relaxed">
              Applications are sent to careers@conveyor.finance from your email
              client. We do not run a silent inbox on this page. We aim to reply
              within seven business days.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-5">
            <Input
              required
              name="name"
              autoComplete="name"
              placeholder="Full name"
              className="bg-transparent border-white/15 text-white h-14 text-base px-4"
            />
            <Input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="bg-transparent border-white/15 text-white h-14 text-base px-4"
            />
            <Input
              name="url"
              type="url"
              placeholder="Portfolio or GitHub URL"
              className="bg-transparent border-white/15 text-white h-14 text-base px-4"
            />
            <textarea
              required
              name="note"
              rows={8}
              placeholder="Why Conveyor, and what would you own in the first 90 days?"
              className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 min-h-[12rem]"
            />
            <Button
              type="submit"
              className="w-full bg-primary text-background h-14 text-base"
            >
              Open application email
            </Button>
            {status === "opened" ? (
              <p className="text-primary text-sm text-center">
                If your mail app did not open, write to careers@conveyor.finance
                with the role in the subject line.
              </p>
            ) : (
              <p className="text-white/40 text-sm text-center leading-relaxed">
                Equal opportunity employer. We review applications for hiring
                only. Request accommodations at careers@conveyor.finance.
              </p>
            )}
          </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplyForm;
