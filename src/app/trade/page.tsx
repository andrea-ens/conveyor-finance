import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";
import TradingPreview from "@/components/Product/TradingPreview";

export const metadata: Metadata = {
  title: "Trading workspace",
  description:
    "Product study: trading UI. Illustrative figures. Not a live venue.",
};

export default function TradePage() {
  return (
    <main>
      <HeroSub title="Trading workspace" />
      <section className="pt-12 pb-4">
        <div className="container px-4 space-y-8">
          <p className="text-primary text-sm uppercase tracking-wide">
            Product study
          </p>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed">
            A desk-density trading UI study related to trading-mvp. Layout and
            numbers are for marketing. This is not a live terminal.{" "}
            <Link href="/work" className="text-primary hover:underline">
              Back to selected work
            </Link>
            .
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Price alerts",
                text: "Threshold UX for a future product — not connected to a venue.",
              },
              {
                title: "Compare & backtest",
                text: "Research layout study. Results on this page are illustrative.",
              },
              {
                title: "Desk shortcuts",
                text: "Navigation patterns for operators, shown as a prototype.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-white text-xl font-medium">{card.title}</h3>
                <p className="text-white/60 mt-2">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TradingPreview />
    </main>
  );
}
