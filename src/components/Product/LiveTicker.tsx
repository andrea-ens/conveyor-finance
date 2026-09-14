"use client";

import { tickerItems } from "@/app/api/data";

const LiveTicker = () => {
  const row = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        <p className="text-xs uppercase tracking-wider text-white/60">
          Live market feed
        </p>
      </div>
      <div className="flex animate-ticker whitespace-nowrap py-3 w-max">
        {row.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-3 px-6 text-sm text-white"
          >
            <span className="font-semibold">{item.symbol}</span>
            <span className="tabular-nums text-white/80">${item.price}</span>
            <span
              className={`tabular-nums ${
                item.change >= 0 ? "text-primary" : "text-red-400"
              }`}
            >
              {item.change >= 0 ? "+" : ""}
              {item.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTicker;
