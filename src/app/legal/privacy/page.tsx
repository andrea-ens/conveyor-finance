import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <main>
      <HeroSub title="Privacy" />
      <section className="py-16">
        <div className="container px-4 max-w-3xl space-y-4 text-white/70 leading-relaxed">
          <p>
            Conveyor collects only what is required to operate the public site
            and access-request forms: contact details you submit, and standard
            technical logs.
          </p>
          <p>
            We do not sell personal data. Access requests are used to evaluate
            and provision professional accounts.
          </p>
          <p>
            Questions: privacy@conveyor.finance
          </p>
        </div>
      </section>
    </main>
  );
}
