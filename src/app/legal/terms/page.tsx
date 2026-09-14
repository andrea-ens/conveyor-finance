import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Terms of use",
};

export default function TermsPage() {
  return (
    <main>
      <HeroSub title="Terms of use" />
      <section className="py-16">
        <div className="container px-4 max-w-3xl space-y-4 text-white/70 leading-relaxed">
          <p>
            These terms govern access to conveyor.finance and related Conveyor
            product previews. The website is informational. Product
            demonstrations are not an offer of brokerage, custody, or
            investment advice.
          </p>
          <p>
            Digital-asset markets are volatile. You are responsible for
            evaluating risk, jurisdictional eligibility, and any counterparties
            you choose to use with Conveyor software.
          </p>
          <p>Last updated: 14 September 2026.</p>
        </div>
      </section>
    </main>
  );
}
