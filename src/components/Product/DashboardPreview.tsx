import Link from "next/link";
import { dashboardPositions, lpPools } from "@/app/api/data";

const DashboardPreview = () => {
  return (
    <section className="py-20" id="dashboard-preview">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-white font-medium">
              Application <span className="text-primary">dashboard</span>
            </p>
            <h2 className="text-white sm:text-5xl text-3xl font-medium mt-2">
              Portfolio, P&amp;L, and liquidity in one view
            </h2>
            <p className="text-white/60 text-lg mt-4 max-w-2xl">
              Inspired by production DeFi desks: net worth across chains,
              unrealized P&amp;L, open positions, and LP health — dark by
              default, information-dense without becoming hostile.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="text-primary font-medium hover:underline"
          >
            Open product preview →
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Net worth", value: "$399,439", hint: "5 chains" },
              { label: "24h P&L", value: "+$7,640", hint: "+1.94%" },
              { label: "Open positions", value: "4", hint: "Tokens + LP" },
              { label: "Avg APR", value: "22.3%", hint: "Active pools" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-background/60 p-5"
              >
                <p className="text-white/50 text-sm">{stat.label}</p>
                <p className="text-white text-2xl font-semibold mt-2 tabular-nums">
                  {stat.value}
                </p>
                <p className="text-primary text-sm mt-1">{stat.hint}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            {["ETH", "WBTC", "ARB"].map((symbol) => (
              <div
                key={symbol}
                className="rounded-2xl border border-white/10 p-4 bg-background/40"
              >
                <div className="flex justify-between text-white mb-4">
                  <span className="font-medium">{symbol}</span>
                  <span className="text-primary text-sm">Live</span>
                </div>
                <svg viewBox="0 0 240 80" className="w-full h-20">
                  <path
                    d="M0 60 C30 55, 50 20, 80 28 C110 36, 130 10, 160 18 C190 26, 210 40, 240 22"
                    fill="none"
                    stroke="#99E39E"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-white/50">
                <tr>
                  <th className="py-3 font-medium">Asset</th>
                  <th className="py-3 font-medium">Chain</th>
                  <th className="py-3 font-medium">Size</th>
                  <th className="py-3 font-medium">Value</th>
                  <th className="py-3 font-medium">Unrealized P&amp;L</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {dashboardPositions.map((row) => (
                  <tr key={row.asset} className="border-t border-white/10">
                    <td className="py-3 font-semibold">{row.asset}</td>
                    <td className="py-3 text-white/70">{row.chain}</td>
                    <td className="py-3 tabular-nums">{row.size}</td>
                    <td className="py-3 tabular-nums">{row.value}</td>
                    <td
                      className={`py-3 tabular-nums ${
                        row.positive ? "text-primary" : "text-red-400"
                      }`}
                    >
                      {row.pnl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {lpPools.map((pool) => (
              <div
                key={pool.pool}
                className="rounded-xl border border-white/10 p-4"
              >
                <p className="text-white font-medium">{pool.pool}</p>
                <p className="text-white/50 text-sm">{pool.protocol}</p>
                <div className="flex justify-between mt-3 text-sm">
                  <span className="text-primary">{pool.apr} APR</span>
                  <span className="text-white/70">{pool.tvl}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
