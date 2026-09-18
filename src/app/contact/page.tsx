"use client";

import HeroSub from "@/components/SharedComponent/HeroSub";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const desks = [
  {
    title: "General",
    email: "hello@conveyor.finance",
    text: "Partnerships, press, and all other inquiries.",
  },
  {
    title: "Careers",
    email: "careers@conveyor.finance",
    text: "Applications and recruiting. See open roles first.",
  },
];

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      org: String(data.get("org") || "").trim(),
      note: String(data.get("note") || "").trim(),
      website: String(data.get("website") || "").trim(),
    };

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not send the message.");
      }

      setStatus("sent");
      form.reset();
      toast.success("Message sent to hello@conveyor.finance");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not send the message.";
      setStatus("error");
      setError(message);
      toast.error(message);
    }
  };

  return (
    <main>
      <HeroSub
        title="Contact"
        subtitle="Messages are delivered to hello@conveyor.finance. Roles go to careers@."
      />
      <section className="py-16 md:py-20">
        <div className="container px-4 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            {desks.map((desk) => (
              <div
                key={desk.email}
                className="border-b border-white/10 pb-8 last:border-0"
              >
                <h2 className="text-white text-xl font-medium">{desk.title}</h2>
                <p className="text-white/55 mt-2 leading-relaxed">{desk.text}</p>
                <a
                  href={`mailto:${desk.email}`}
                  className="text-primary mt-3 inline-block"
                >
                  {desk.email}
                </a>
              </div>
            ))}
            <p className="text-white/45 text-sm leading-relaxed">
              For roles, use{" "}
              <Link href="/careers" className="text-primary hover:underline">
                Careers
              </Link>
              . Corporate information:{" "}
              <Link href="/company" className="text-primary hover:underline">
                Company
              </Link>
              .
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 space-y-5"
          >
            <h2 className="text-white text-2xl font-medium">Message</h2>
            {status === "sent" ? (
              <p className="text-primary leading-relaxed">
                Message received at hello@conveyor.finance. We will reply from
                that address.
              </p>
            ) : (
              <>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-10000px] h-px w-px overflow-hidden"
                />
                <Input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  className="bg-transparent border-white/15 text-white h-12"
                />
                <Input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="bg-transparent border-white/15 text-white h-12"
                />
                <Input
                  name="org"
                  placeholder="Organization (optional)"
                  className="bg-transparent border-white/15 text-white h-12"
                />
                <textarea
                  required
                  name="note"
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full rounded-md border border-white/15 bg-transparent px-3 py-3 text-white placeholder:text-white/40"
                />
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-background h-12 disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Send to hello@conveyor.finance"}
                </Button>
                {status === "error" ? (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                ) : (
                  <p className="text-white/40 text-xs text-center">
                    Delivered to hello@conveyor.finance. We aim to reply within
                    a few business days.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
