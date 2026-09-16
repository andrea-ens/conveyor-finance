"use client";

import HeroSub from "@/components/SharedComponent/HeroSub";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import Link from "next/link";

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

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const org = String(data.get("org") || "").trim();
    const note = String(data.get("note") || "").trim();
    const subject = encodeURIComponent(
      `Contact: ${name}${org ? ` — ${org}` : ""}`
    );
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Organization: ${org || "—"}`, "", note].join(
        "\n"
      )
    );
    window.location.href = `mailto:hello@conveyor.finance?subject=${subject}&body=${body}`;
    setStatus("opened");
  };

  return (
    <main>
      <HeroSub
        title="Contact"
        subtitle="Write to the company. We read hello@ and careers@ — there is no silent form inbox on this page."
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
              className="w-full bg-primary text-background h-12"
            >
              Open email to hello@
            </Button>
            {status === "opened" ? (
              <p className="text-primary text-xs text-center">
                If your mail app did not open, write to hello@conveyor.finance
                directly.
              </p>
            ) : (
              <p className="text-white/40 text-xs text-center">
                Opens your email client. We aim to reply within a few business
                days.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
