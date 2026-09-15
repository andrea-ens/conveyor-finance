export type CareerRole = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
};

export const careerValues = [
  {
    title: "Operators first",
    text: "We hire people who have sat on a desk, shipped production systems, or both. Conveyor is built for operators by operators.",
  },
  {
    title: "Clarity over theatre",
    text: "Markets are noisy. We write, design, and decide in plain language. If a number cannot be explained, it does not ship.",
  },
  {
    title: "Ownership without ceremony",
    text: "Small teams, short loops, high trust. You will own a surface — website, dashboard, or trading — end to end.",
  },
];

export const careerBenefits = [
  "Competitive compensation with meaningful equity",
  "Remote-first, with optional hubs",
  "Hardware and tooling of your choice",
  "Learning budget for markets, security, and design",
  "Paid time off and parental leave",
  "Direct access to founders and product",
];

export const careerRoles: CareerRole[] = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    summary:
      "Build the conveyor.finance corporate site and operator-facing surfaces in Next.js, TypeScript, and shadcn/ui.",
    about:
      "You will own the public website and shared UI system that introduces desks to Conveyor. This is a high-visibility role: careers, product storytelling, and the first impression of the brand.",
    responsibilities: [
      "Ship and maintain the corporate website and marketing product previews",
      "Raise the quality bar for layout, accessibility, and performance",
      "Partner with design and product on careers, company, and product pages",
      "Keep the stack typed, documented, and easy for the next engineer",
    ],
    requirements: [
      "Deep experience with Next.js App Router and TypeScript",
      "A portfolio of polished, production marketing or fintech UIs",
      "Comfort working against live market and DeFi product context",
      "Taste for institutional tone without losing warmth",
    ],
  },
  {
    slug: "defi-full-stack-engineer",
    title: "DeFi Full-Stack Engineer",
    team: "Dashboard",
    location: "Remote",
    type: "Full-time",
    summary:
      "Own the multi-chain portfolio dashboard: net worth, P&L, positions, and liquidity analytics.",
    about:
      "The dashboard is Conveyor's application layer. You will turn wallet, RPC, and subgraph data into a desk-grade book that operators trust every morning.",
    responsibilities: [
      "Build portfolio, positions, and LP views with live refresh",
      "Integrate wagmi/viem and query layers without leaking complexity into the UI",
      "Instrument performance, error states, and empty states",
      "Work with trading engineers on shared types and risk displays",
    ],
    requirements: [
      "Production experience with on-chain frontends (wagmi, viem, or similar)",
      "Strong TypeScript and Next.js skills",
      "Ability to reason about stale-while-revalidate data and P&L accuracy",
      "Familiarity with Ethereum L2s (Arbitrum, Base, Optimism, Polygon)",
    ],
  },
  {
    slug: "trading-ui-engineer",
    title: "Trading UI Engineer",
    team: "Execution",
    location: "Remote",
    type: "Full-time",
    summary:
      "Design and implement the professional trading workspace: charts, watchlists, alerts, and backtests.",
    about:
      "Execution UI is where Conveyor either feels like a real desk or it does not. You will ship information-dense, keyboard-first trading surfaces with live feeds.",
    responsibilities: [
      "Build chart, order book, watchlist, and alert experiences",
      "Integrate live price feeds and keep the UI honest under load",
      "Prototype compare and backtest workflows with product",
      "Obsess over latency, tabular numbers, and visual hierarchy",
    ],
    requirements: [
      "Shipped trading, markets, or high-frequency data UIs",
      "Experience with real-time websockets and charting libraries",
      "Strong visual craft in dark, dense interfaces",
      "Comfort collaborating with backend and market-data owners",
    ],
  },
  {
    slug: "people-operations-lead",
    title: "People Operations Lead",
    team: "Company",
    location: "Remote",
    type: "Full-time",
    summary:
      "Build Conveyor's hiring engine: careers page, process, and candidate experience from first click to offer.",
    about:
      "Careers is a primary growth surface for Conveyor. You will own how operators discover us, how we interview, and how new teammates land.",
    responsibilities: [
      "Run the careers page content and hiring pipeline",
      "Design a rigorous, respectful interview process",
      "Partner with hiring managers across product, dashboard, and trading",
      "Report on funnel quality and time-to-offer",
    ],
    requirements: [
      "Experience hiring for technical and markets roles",
      "Excellent written communication",
      "Comfort in an early-stage, high-ownership environment",
      "Bias toward candidates who have operated, not only advised",
    ],
  },
];

export function getRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
