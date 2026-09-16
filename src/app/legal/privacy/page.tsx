import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <main>
      <HeroSub
        title="Privacy"
        subtitle="How Conveyor Finance handles information submitted through this website."
      />
      <section className="py-16">
        <div className="container px-4 max-w-3xl space-y-5 text-white/70 leading-relaxed">
          <p>
            This site collects contact details you choose to send (for example
            via email to hello@ or careers@), and standard server or analytics
            logs needed to operate the website.
          </p>
          <p>
            Career applications are used only to evaluate hiring. We do not
            sell personal data. We aim to retain application material only as
            long as needed for recruiting, then delete or archive it according
            to applicable law.
          </p>
          <p>
            Questions: privacy@conveyor.finance
          </p>
        </div>
      </section>
    </main>
  );
}
