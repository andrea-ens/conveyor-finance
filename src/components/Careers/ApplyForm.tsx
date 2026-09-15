"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ApplyForm = ({ roleTitle }: { roleTitle: string }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application received. Careers will follow up.");
    }, 600);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-5 sticky top-28"
    >
      <div>
        <p className="text-primary text-sm uppercase tracking-wide">Apply</p>
        <h2 className="text-white text-2xl font-medium mt-1">{roleTitle}</h2>
        <p className="text-white/55 mt-2 text-sm">
          We review every application. Use a work you are proud of as the
          portfolio link.
        </p>
      </div>
      <Input
        required
        placeholder="Full name"
        className="bg-transparent border-white/15 text-white h-12"
      />
      <Input
        required
        type="email"
        placeholder="Email"
        className="bg-transparent border-white/15 text-white h-12"
      />
      <Input
        placeholder="LinkedIn or portfolio URL"
        className="bg-transparent border-white/15 text-white h-12"
      />
      <textarea
        required
        rows={5}
        placeholder="Why Conveyor, and what would you own in the first 90 days?"
        className="w-full rounded-md border border-white/15 bg-transparent px-3 py-3 text-white placeholder:text-white/40"
      />
      <Button
        type="submit"
        className="w-full bg-primary text-background h-12"
      >
        {loading ? "Sending…" : "Submit application"}
      </Button>
      <p className="text-white/40 text-xs text-center">
        Or email careers@conveyor.finance with the role in the subject line.
      </p>
    </form>
  );
};

export default ApplyForm;
