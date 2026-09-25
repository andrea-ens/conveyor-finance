"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { engagementTypes } from "@/app/api/careers";

type Status = "idle" | "submitting" | "sent" | "error";

const ApplyForm = ({ roleTitle }: { roleTitle: string }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      roleTitle,
      engagement: String(data.get("engagement") || "").trim(),
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      url: String(data.get("url") || "").trim(),
      note: String(data.get("note") || "").trim(),
      website: String(data.get("website") || "").trim(),
    };

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not send the application.");
      }

      setStatus("sent");
      form.reset();
      toast.success("Application sent to careers@conveyor.finance");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not send the application.";
      setStatus("error");
      setError(message);
      toast.error(message);
    }
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
          if (!next) {
            setStatus("idle");
            setError("");
          }
        }}
      >
        <DialogContent
          overlayClassName="bg-black/80 backdrop-blur-md"
          className="w-[min(42rem,calc(100%-2rem))] !max-w-[42rem] h-[min(54rem,calc(100vh-4rem))] max-h-[calc(100vh-4rem)] overflow-hidden p-0 gap-0 rounded-2xl border border-white/15 ring-0 bg-transparent"
          style={{ backgroundColor: "#111816" }}
        >
          <div
            className="h-full overflow-y-auto p-9 sm:p-12 space-y-8"
            style={{ backgroundColor: "#111816" }}
          >
            <DialogHeader>
              <p className="text-primary text-sm uppercase tracking-wide">
                Apply
              </p>
              <DialogTitle className="text-white text-2xl sm:text-3xl font-medium">
                {roleTitle}
              </DialogTitle>
              <DialogDescription className="text-white/55 text-base leading-relaxed">
                This form is delivered to careers@conveyor.finance. We aim to
                reply within seven business days.
              </DialogDescription>
            </DialogHeader>

            {status === "sent" ? (
              <p className="text-primary text-base leading-relaxed">
                Application received. Check that you used an email you can reply
                from — we will write back from careers@conveyor.finance.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-10000px] h-px w-px overflow-hidden"
                />
                <fieldset>
                  <legend className="text-white/70 text-sm mb-3">
                    How do you want to work?{" "}
                    <span className="text-white/40">(required)</span>
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {engagementTypes.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 rounded-md border border-white/15 px-4 h-14 text-white text-base cursor-pointer has-[:checked]:border-primary has-[:checked]:text-primary"
                      >
                        <input
                          type="radio"
                          name="engagement"
                          value={option}
                          required
                          className="accent-primary size-4"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>
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
                  placeholder="Linkedin, Portfolio or GitHub URL"
                  className="bg-transparent border-white/15 text-white h-14 text-base px-4"
                />
                <textarea
                  required
                  name="note"
                  rows={8}
                  placeholder="Why Conveyor Finance, and what would you own in the first 90 days?"
                  className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 min-h-[12rem]"
                />
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-background h-14 text-base disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Send to careers@conveyor.finance"}
                </Button>
                {status === "error" ? (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                ) : (
                  <p className="text-white/40 text-sm text-center leading-relaxed">
                    Equal opportunity employer. We review applications for
                    hiring only. Request accommodations at
                    careers@conveyor.finance.
                  </p>
                )}
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplyForm;
