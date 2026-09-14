import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import DashboardPreview from "@/components/Product/DashboardPreview";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Conveyor DeFi dashboard: multi-chain net worth, P&L, positions, and liquidity pools.",
};

export default function DashboardPage() {
  return (
    <main>
      <HeroSub title="Conveyor Dashboard" />
      <section className="pt-12">
        <div className="container px-4">
          <p className="text-white/70 max-w-3xl text-lg">
            A polished DeFi operations surface for treasuries and funds. Connect
            wallets, review live prices, and manage LP exposure without
            switching between five tools. Figures on this page are illustrative
            product previews.
          </p>
        </div>
      </section>
      <DashboardPreview />
    </main>
  );
}
