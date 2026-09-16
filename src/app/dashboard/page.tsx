import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";
import DashboardPreview from "@/components/Product/DashboardPreview";

export const metadata: Metadata = {
  title: "DeFi operations console",
  description:
    "Product study: multi-chain portfolio console. Illustrative figures. Not a live brokerage.",
};

export default function DashboardPage() {
  return (
    <main>
      <HeroSub title="DeFi operations console" />
      <section className="pt-12">
        <div className="container px-4">
          <p className="text-primary text-sm uppercase tracking-wide mb-3">
            Product study
          </p>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed">
            A marketing preview of a multi-chain portfolio surface. Figures are
            illustrative. This is not a live dashboard and must not be used as
            a quote or accounting source.{" "}
            <Link href="/work" className="text-primary hover:underline">
              Back to selected work
            </Link>
            .
          </p>
        </div>
      </section>
      <DashboardPreview />
    </main>
  );
}
