import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Disclosures",
};

export default function DisclosuresPage() {
  return (
    <main>
      <HeroSub
        title="Disclosures"
        subtitle="How to read product studies and figures published on this website."
      />
      <section className="py-16">
        <div className="container px-4 max-w-3xl space-y-4 text-white/70 leading-relaxed">
          <p>
            conveyor.finance is a marketing website. Market figures, portfolio
            balances, and order-book data shown in product studies are
            illustrative. They are not live brokerage quotes and must not be
            used as the basis for trading decisions.
          </p>
          <p>
            Public GitHub repositories linked from Selected work are separate
            codebases with their own licenses and terms. The blog is desk
            commentary on on-chain trading. It is not a signal, a quote, or a
            substitute for Selected work. Links to Flashbots, Paradigm, and
            other journals go to those publishers.
          </p>
        </div>
      </section>
    </main>
  );
}
