"use client";

import HeroSub from "@/components/SharedComponent/HeroSub";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received. We will reply to your desk shortly.");
    }, 600);
  };

  return (
    <main>
      <HeroSub title="Request access" />
      <section className="py-20">
        <div className="container px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-white text-3xl font-medium">
              Talk with Conveyor
            </h2>
            <p className="text-white/60 mt-4 text-lg">
              Tell us about your venues, AUM, and operating model. We provision
              dashboard and trading environments per organization.
            </p>
            <div className="mt-8 space-y-3 text-white/80">
              <p>Email: hello@conveyor.finance</p>
              <p>Web: conveyor.finance</p>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-5"
          >
            <Input
              required
              placeholder="Full name"
              className="bg-transparent border-white/15 text-white h-12"
            />
            <Input
              required
              type="email"
              placeholder="Work email"
              className="bg-transparent border-white/15 text-white h-12"
            />
            <Input
              placeholder="Organization"
              className="bg-transparent border-white/15 text-white h-12"
            />
            <textarea
              required
              rows={5}
              placeholder="How does your desk operate today?"
              className="w-full rounded-md border border-white/15 bg-transparent px-3 py-3 text-white placeholder:text-white/40"
            />
            <Button
              type="submit"
              className="w-full bg-primary text-background h-12"
            >
              {loading ? "Sending…" : "Submit request"}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
