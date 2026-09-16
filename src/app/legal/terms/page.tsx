import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of use",
};

export default function TermsPage() {
  return (
    <main>
      <HeroSub
        title="Terms of use"
        subtitle="These terms govern access to conveyor.finance. Last updated 15 September 2026."
      />
      <section className="py-16">
        <div className="container px-4 max-w-3xl space-y-5 text-white/70 leading-relaxed">
          <p>
            By using conveyor.finance you agree to these terms. The site is
            operated by Conveyor Finance as a corporate and informational
            website. It is not an offer to buy or sell any security, token, or
            other instrument.
          </p>
          <p>
            Product studies, screenshots, and market figures on this domain are
            illustrative unless we state otherwise in writing. They are not
            live brokerage quotes, net asset values, or an invitation to trade
            through this website.
          </p>
          <p>
            You are responsible for evaluating digital-asset risk, tax, and
            the laws of your jurisdiction. Conveyor does not provide
            investment, legal, or tax advice.
          </p>
          <p>
            Privacy practices are described in our{" "}
            <Link href="/legal/privacy" className="text-primary hover:underline">
              Privacy
            </Link>{" "}
            notice. Additional product-study language is in{" "}
            <Link
              href="/legal/disclosures"
              className="text-primary hover:underline"
            >
              Disclosures
            </Link>
            .
          </p>
          <p>
            Questions: hello@conveyor.finance.
          </p>
        </div>
      </section>
    </main>
  );
}
