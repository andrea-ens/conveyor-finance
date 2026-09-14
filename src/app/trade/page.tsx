import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import TradingPreview from "@/components/Product/TradingPreview";
import LiveTicker from "@/components/Product/LiveTicker";

export const metadata: Metadata = {
  title: "Trading",
  description:
    "Conveyor trading terminal: live charts, order book, watchlists, alerts, and backtests.",
};

export default function TradePage() {
  return (
    <main>
      <HeroSub title="Trading terminal" />
      <section className="pt-12 pb-4">
        <div className="container px-4 space-y-8">
          <p className="text-white/70 max-w-3xl text-lg">
            Execution UI designed for operators: keyboard-first navigation,
            live tickers, depth, alerts, and research overlays. This preview
            shows the intended layout for conveyor.finance trading.
          </p>
          <LiveTicker />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Price alerts",
                text: "Above/below thresholds with persistent watch state.",
              },
              {
                title: "Compare & backtest",
                text: "Normalized overlays and SMA crossover equity curves.",
              },
              {
                title: "Desk shortcuts",
                text: "Jump between markets, watchlist, and portfolio instantly.",
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
