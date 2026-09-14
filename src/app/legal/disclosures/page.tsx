import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Disclosures",
};

export default function DisclosuresPage() {
  return (
    <main>
      <HeroSub title="Disclosures" />
      <section className="py-16">
        <div className="container px-4 max-w-3xl space-y-4 text-white/70 leading-relaxed">
          <p>
            Market figures, portfolio balances, and order-book data shown on
            this site are illustrative. They are not live brokerage quotes and
            must not be used as the basis for trading decisions.
          </p>
          <p>
            Conveyor software may connect to third-party protocols, RPCs, and
            venues. Those services have their own risks, fees, and terms.
          </p>
        </div>
      </section>
    </main>
  );
}
