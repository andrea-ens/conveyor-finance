import Link from "next/link";

const bids = [67210, 67180, 67140, 67090, 67040];
const asks = [67480, 67520, 67590, 67640, 67710];

const TradingPreview = () => {
  return (
    <section className="pb-24" id="trade-preview">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-white font-medium">
              Trading <span className="text-primary">terminal</span>
            </p>
            <h2 className="text-white sm:text-5xl text-3xl font-medium mt-2">
              Charts, watchlists, alerts, and backtests
            </h2>
            <p className="text-white/60 text-lg mt-4 max-w-2xl">
              Product study of a professional trading layout. Tickers and depth
              on this page are illustrative.
            </p>
          </div>
          <Link href="/work" className="text-primary font-medium hover:underline">
            All selected work →
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-background/50 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white text-xl font-semibold">BTC / USD</p>
                <p className="text-primary tabular-nums">67,412.80 · +1.24%</p>
              </div>
              <div className="flex gap-2 text-xs">
                {["1H", "4H", "1D", "1W"].map((tf) => (
                  <span
                    key={tf}
                    className={`px-2 py-1 rounded-md ${
                      tf === "1D"
                        ? "bg-primary text-background"
                        : "bg-white/5 text-white/70"
                    }`}
                  >
                    {tf}
                  </span>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 640 220" className="w-full h-52">
              {[40, 80, 120, 160].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="640"
                  y2={y}
                  stroke="rgba(255,255,255,0.06)"
                />
              ))}
              <path
                d="M0 150 L40 142 L80 160 L120 90 L160 110 L200 70 L240 95 L280 60 L320 78 L360 48 L400 72 L440 40 L480 66 L520 52 L560 88 L640 30"
                fill="none"
                stroke="#99E39E"
                strokeWidth="2.5"
              />
              <path
                d="M0 150 L40 142 L80 160 L120 90 L160 110 L200 70 L240 95 L280 60 L320 78 L360 48 L400 72 L440 40 L480 66 L520 52 L560 88 L640 30 V220 H0 Z"
                fill="url(#area)"
                opacity="0.25"
              />
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#99E39E" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-white font-medium mb-3">Order book</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  {bids.map((price, i) => (
                    <div
                      key={price}
                      className="flex justify-between text-primary py-1"
                    >
                      <span className="tabular-nums">{price.toLocaleString()}</span>
                      <span className="text-white/50">{(1.2 - i * 0.15).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {asks.map((price, i) => (
                    <div
                      key={price}
                      className="flex justify-between text-red-400 py-1"
                    >
                      <span className="tabular-nums">{price.toLocaleString()}</span>
                      <span className="text-white/50">{(0.8 + i * 0.2).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-white font-medium mb-3">Watchlist</p>
              {["ETH", "SOL", "ARB"].map((s, i) => (
                <div
                  key={s}
                  className="flex justify-between py-2 border-t border-white/5 first:border-0 text-sm"
                >
                  <span className="text-white">{s}</span>
                  <span className="text-primary">
                    {["+0.82%", "+2.41%", "-0.62%"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPreview;
