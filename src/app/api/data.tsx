export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "/legal/terms" },
  { label: "Privacy", herf: "/legal/privacy" },
  { label: "Disclosures", herf: "/legal/disclosures" },
  { label: "Contact", herf: "/contact" },
];

export const pricedata: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Bitcoin",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin.svg",
    background: "bg-chart-5/20",
    price: "$67,412.80",
    mark: "+1.24%",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Ethereum",
    short: "ETH/USD",
    icon: "/images/icons/icon-ethereum.svg",
    background: "bg-secondary/15",
    price: "$3,286.14",
    mark: "+0.82%",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Solana",
    short: "SOL/USD",
    icon: "/images/icons/icon-solana.svg",
    background: "bg-secondary/15",
    price: "$148.22",
    mark: "+2.41%",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Litecoin",
    short: "LTC/USD",
    icon: "/images/icons/icon-litecoin.svg",
    background: "bg-secondary/15",
    price: "$84.19",
    mark: "-0.36%",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Polkadot",
    short: "DOT/USD",
    icon: "/images/icons/icon-bitcoin-circle.svg",
    background: "bg-chart-5/20",
    price: "$7.42",
    mark: "+0.58%",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/icons/icon-dogecoin.svg",
    background: "bg-secondary/15",
    price: "$0.1284",
    mark: "+3.12%",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/portfolio-icon-1.svg",
    title: "Unified DeFi portfolio and P&L",
  },
  {
    image: "/images/portfolio/portfolio-icon-2.svg",
    title: "Institutional-grade vault controls",
  },
  {
    image: "/images/portfolio/portfolio-icon-3.svg",
    title: "Live trading, alerts, and backtests",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Multi-chain wallet views" },
  { title: "Real-time price feeds" },
  { title: "LP and position analytics" },
  { title: "Watchlists and price alerts" },
  { title: "Strategy backtesting" },
  { title: "Role-based access" },
  { title: "Audit-ready activity logs" },
  { title: "Dedicated support desk" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/peak-icon-1.svg",
    title: "24/7 Desk",
    text: "Markets never sleep. Neither does Conveyor support.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/peak-icon-2.svg",
    title: "Operators",
    text: "A private network of funds, desks, and builders.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/peak-icon-3.svg",
    title: "Academy",
    text: "Risk, execution, and DeFi literacy for your team.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Connect",
    text: "Link wallets and venues in minutes",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Observe",
    text: "Net worth, P&L, and LP health in one pane",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Execute",
    text: "Trade with live charts, alerts, and risk limits",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Scale",
    text: "Policies, reporting, and a dedicated desk",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67412.8 },
  { name: "Ethereum ETH/USD", price: 3286.14 },
  { name: "Solana SOL/USD", price: 148.22 },
  { name: "Litecoin LTC/USD", price: 84.19 },
];

export const tickerItems = [
  { symbol: "BTC", price: "67,412.80", change: 1.24 },
  { symbol: "ETH", price: "3,286.14", change: 0.82 },
  { symbol: "SOL", price: "148.22", change: 2.41 },
  { symbol: "ARB", price: "0.84", change: -0.62 },
  { symbol: "OP", price: "1.72", change: 0.31 },
  { symbol: "MATIC", price: "0.41", change: -1.08 },
];

export const dashboardPositions = [
  { asset: "ETH", chain: "Ethereum", size: "48.20", value: "$158,391", pnl: "+$6,412", positive: true },
  { asset: "WBTC", chain: "Ethereum", size: "1.84", value: "$124,040", pnl: "+$2,118", positive: true },
  { asset: "USDC", chain: "Base", size: "82,400", value: "$82,400", pnl: "$0", positive: true },
  { asset: "ARB", chain: "Arbitrum", size: "41,200", value: "$34,608", pnl: "-$890", positive: false },
];

export const lpPools = [
  { pool: "ETH / USDC", protocol: "Uniswap v3", apr: "18.4%", tvl: "$2.1M" },
  { pool: "WBTC / ETH", protocol: "Aerodrome", apr: "24.1%", tvl: "$860K" },
  { pool: "ARB / USDC", protocol: "Camelot", apr: "31.8%", tvl: "$410K" },
];
