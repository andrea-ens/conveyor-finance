import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Conveyor products: corporate platform, DeFi dashboard, and professional trading terminal.",
};

const products = [
  {
    href: "/",
    title: "Corporate website",
    kicker: "This repository",
    body: "The public face of Conveyor on conveyor.finance. Built from a production crypto landing system with shadcn/ui and Next.js.",
  },
  {
    href: "/dashboard",
    title: "Application dashboard",
    kicker: "DeFi operations",
    body: "Net worth, unrealized P&L, open positions, and liquidity pools across Ethereum, Arbitrum, Optimism, Polygon, and Base.",
  },
  {
    href: "/trade",
    title: "Trading workspace",
    kicker: "Execution UI",
    body: "Live charts, watchlists, price alerts, comparison views, and strategy backtests for professional desks.",
  },
];

export default function ProductPage() {
  return (
    <main>
      <HeroSub title="Product suite" />
      <section className="py-20">
        <div className="container px-4">
          <p className="text-white/70 max-w-3xl text-lg mb-12">
            Conveyor is assembled as three coordinated surfaces. This site is
            the corporate layer. Dashboard and trading experiences plug in as
            sibling applications under the same brand and domain.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-primary/50 transition-colors"
              >
                <p className="text-primary text-sm uppercase tracking-wide">
                  {item.kicker}
                </p>
                <h2 className="text-white text-2xl font-medium mt-3">
                  {item.title}
                </h2>
                <p className="text-white/60 mt-4">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
