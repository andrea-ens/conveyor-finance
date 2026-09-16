export const blogTopics = [
  { slug: "execution", label: "Execution" },
  { slug: "structure", label: "Market structure" },
  { slug: "risk", label: "Risk" },
  { slug: "mev", label: "MEV" },
] as const;

export type BlogTopicSlug = (typeof blogTopics)[number]["slug"];

export type BlogPost = {
  slug: string;
  title: string;
  tldr: string;
  excerpt: string;
  topic: BlogTopicSlug;
  date: string;
  readMinutes: number;
  author: { name: string; role: string };
  featured?: boolean;
  body: string[];
};

export const fieldJournals = [
  {
    name: "Flashbots Writings",
    href: "https://writings.flashbots.net/",
    kicker: "House journal",
    blurb:
      "The field’s primary journal for MEV, search, and how trades actually land on-chain.",
  },
  {
    name: "Flashbots Collective",
    href: "https://collective.flashbots.net/",
    kicker: "Working notes",
    blurb:
      "Searcher and researcher notes on arbitrage architecture, spam, and live-chain microstructure.",
  },
  {
    name: "Paradigm Research",
    href: "https://www.paradigm.xyz/",
    kicker: "Market design",
    blurb:
      "Long-form research on crypto market design — the other desk everyone serious still reads.",
  },
];

const author = { name: "Andrea", role: "Founder / CEO" };

export const blogPosts: BlogPost[] = [
  {
    slug: "three-clocks-of-onchain-trading",
    title: "The three clocks of on-chain trading",
    tldr: "A perp or spot fill on-chain is not one timestamp. It is block time, oracle time, and liquidation time. Desks that treat those as the same clock misprice risk.",
    excerpt:
      "On-chain trading is a coordination problem across three clocks. Confusing them is how liquidations and ‘fair’ marks diverge.",
    topic: "execution",
    date: "2026-09-15",
    readMinutes: 8,
    author,
    featured: true,
    body: [
      "Central-limit books on a matching engine share a single clock: the exchange’s sequence. On-chain trading does not. The block (or sequencer slot) that includes your transaction is one clock. The oracle that marks the contract is another. The liquidation engine that may take the position is a third. They are allowed to disagree, and they often do.",
      "That disagreement is not a bug in the UI. It is the product. A maker on an AMM sees a reserve ratio. A taker on a perpetual CLOB sees an index and a mark. A liquidator sees a maintenance threshold against an oracle that may update on a slower cadence than the book. If you design infrastructure as if those three numbers were one ‘price,’ you will ship a pretty terminal and a broken risk engine.",
      "Professional on-chain trading therefore starts with latency as a cost, not as a slogan. Inclusion delay, oracle heartbeat, and funding interval are the same class of object: they determine whether a hedge is still a hedge when the next block lands. Fee floors, blob markets, and L2 sequencing rules change those costs without changing the user’s intended trade.",
      "This desk does not publish live quotes or signals. Selected work is where we show protocol and product studies. This blog is where we write about the market itself — execution, structure, risk, and MEV — in the same register as the journals the field already trusts.",
      "If you only remember one operational rule: never let a portfolio view imply that mark, index, and last trade are interchangeable. Label the clock. Operators who cannot name which clock they are looking at are not trading. They are decorating a number.",
    ],
  },
  {
    slug: "perp-funding-oracles-liquidation",
    title: "Funding, oracles, and the liquidation window",
    tldr: "Perpetual markets do not have expiry. They have a funding clock, an oracle, and a liquidation policy. Most ‘unexpected’ losses are those three disagreeing in public.",
    excerpt:
      "A perp is a swap against an index plus a payment stream. Liquidation is what happens when the stream and the mark cannot keep the position solvent.",
    topic: "risk",
    date: "2026-09-12",
    readMinutes: 7,
    author,
    body: [
      "A dated future converges because expiry forces cash or physical settlement against a known index. A perpetual future never expires, so the market invents a substitute: regular payments between longs and shorts (funding) so that the perpetual tracks the index closely enough to be useful. That is market structure, not a feature toggle.",
      "Oracles decide what ‘closely enough’ means for margin. If the mark used for maintenance is slow, liquidations lag and the book socializes the gap. If the mark is fast and noisy, solvent traders get closed on prints that the underlying never paid. Neither failure is exotic. Both show up whenever a venue copies another venue’s parameters without copying its oracle and insurance design.",
      "The liquidation window is the time between ‘the position is underwater on the venue’s rules’ and ‘the position is gone.’ On-chain, that window is shaped by block time, keeper incentives, and whether close-out is a taker sweep, an auction, or an auto-deleveraging haircut. A desk that only models price paths and ignores keeper economics will be surprised by the path that actually happens.",
      "None of this is a recommendation to trade a named venue. It is the checklist we use when we talk about on-chain trading infrastructure: funding formula, oracle sources and heartbeat, maintenance vs initial margin, liquidation waterfalls, and who eats the residual. If those are not written down, the product is a story about leverage, not a market.",
    ],
  },
  {
    slug: "mev-is-a-trading-cost",
    title: "MEV is a trading cost",
    tldr: "Search, backrunning, and probabilistic probing are not adjacent to trading. They are part of the fill. Treat extractable value as a spread you pay or earn.",
    excerpt:
      "On public state, someone else can see the same opportunity. That fact belongs in the cost model next to fees and slippage.",
    topic: "mev",
    date: "2026-09-08",
    readMinutes: 7,
    author,
    body: [
      "In a dark pool, information leakage is a policy. On a transparent virtual machine, it is physics. A swap that moves an AMM, a liquidation that must hit a book, a rebalance that must touch several pools — each is an announcement. Searchers compete to be the first transaction after that announcement, or to be inside the same bundle as it.",
      "The serious literature in this field — especially Flashbots Writings and the Collective’s working notes — treats that competition as architecture: targeted search versus probabilistic probing, spam as a fee, timing games that dissipate opportunity into gas. We do not republish their papers. We take the conclusion as operational: MEV is a line item.",
      "For a trading system that is honest about on-chain execution, that line item shows up as worse-than-quoted fills, failed transactions, priority fees, and builder or sequencer payments. Hiding those inside ‘slippage’ makes the UI look calm and the P&L unexplained.",
      "Infrastructure work, as we mean it, is making those costs visible and, where the protocol allows, routing around the dumbest versions of them — private orderflow, batch auctions, intents, AMMs that do not advertise a sandwich. That is not the same as promising users they will not pay MEV. On a public chain, that promise is usually a lie.",
    ],
  },
  {
    slug: "clob-amm-intent",
    title: "CLOB, AMM, and intent: three machines for one trade",
    tldr: "On-chain trading is not ‘the AMM’ or ‘the order book.’ It is three settlement machines that price the same risk with different leakage and different failure modes.",
    excerpt:
      "A CLOB sequences orders. An AMM prices a curve. An intent lets a solver find a path. Operators need all three vocabularies.",
    topic: "structure",
    date: "2026-09-03",
    readMinutes: 8,
    author,
    body: [
      "A central limit order book is a sequence. Priority, queue position, and cancel/replace rules determine who trades. On-chain CLOBs inherit an extra constraint: the sequencer or the block producer is part of the matching engine, whether the UI admits it or not.",
      "An AMM is a function. Reserves and a curve produce a price. The ‘book’ is the derivative of that function. Inventory is the pool. Adverse selection is LVR and the flow that only arrives when the curve is wrong. That is a different machine from a CLOB, even when both are called ‘DEX.’",
      "Intents are a third machine. The user signs a constraint — asset in, asset out, limit, deadline — and a solver (or a network of them) competes to satisfy it. The trade still settles on-chain. The matching happens off the user’s wallet. That can reduce some MEV and introduce solver concentration, exclusive orderflow, and a new failure mode: the intent that never finds a solver.",
      "A professional on-chain trading stack picks a machine per job. Hedging a perp against spot may want a CLOB. Passive inventory may want an AMM. A large swap may want an intent auction. Pretending one venue type is ‘the future of trading’ is marketing. The field already runs all three. The work is naming which one you are in before you size the ticket.",
    ],
  },
  {
    slug: "idle-margin-is-market-structure",
    title: "Idle margin is a market-structure problem",
    tldr: "While a leveraged position is open, posted collateral often does one job: wait. That is not a UI complaint. It is how most on-chain venues still bind capital.",
    excerpt:
      "Execution venues optimized speed and leverage. They did not optimize what margin does between open and close. That gap is structure, not a product screenshot.",
    topic: "structure",
    date: "2026-08-27",
    readMinutes: 6,
    author,
    body: [
      "In listed futures, posted margin is already a claim on a clearinghouse with its own credit and investment rules. In crypto perps, margin is usually just the account equity that keeps the position under the maintenance line. It earns funding if you are on the right side of the payment, and otherwise it sits.",
      "That idle stock is why ‘capital efficiency’ keeps returning as a design brief. It is not an invitation to mint a token from this website. It is the observation that a live position is a bundle: market exposure plus a locked inventory of collateral. Venues that cannot unbundle those two things force traders to overfund or to close, even when the directional bet is still the bet they want.",
      "The hard parts are the same as everywhere else in this blog: oracles, liquidation, and who is short the residual when you let collateral do a second job. If the second job can gap the first, you have not created efficiency. You have created a new liquidation path with a friendlier name.",
      "We keep protocol studies on Selected work. Here we only need the market fact: on-chain trading still treats open-position collateral as dead inventory more often than TradFi clearing does. Anyone building trading infrastructure will hit that wall. Pretending it is already solved is how you get another wrapper with the same risk.",
    ],
  },
  {
    slug: "what-a-desk-inspects-onchain",
    title: "What a desk inspects before it calls a fill on-chain",
    tldr: "Venue, oracle, funding, liquidation waterfall, inclusion path, and MEV surface. If those six are not on the ticket, the ticket is incomplete.",
    excerpt:
      "A professional checklist for on-chain execution — independent of any product study on this site.",
    topic: "execution",
    date: "2026-08-20",
    readMinutes: 6,
    author,
    body: [
      "Venue: who matches, who sequences, what happens on halt or sequencer downtime. Oracle: source, heartbeat, manipulation surface. Funding: formula, interval, who pays through the print. Liquidation: threshold, closer, insurance, ADL. Inclusion: public mempool, private relay, L2 inbox. MEV: who can see the flow and what they can do before your transaction is final.",
      "That list is boring on purpose. Crypto marketing skips it because it does not screenshot well. It is also the difference between a trading system and a chart with a wallet connect.",
      "We will not attach live books or invented AUM to this checklist. Conveyor’s corporate site is not a brokerage. The checklist is how we think about the field we work in. If you want to see software we have actually built, that is Selected work — screenshots and descriptions, not a fill.",
      "Read Flashbots for how search actually behaves. Read Paradigm when the question is market design rather than a single bot. Then come back to the six items above. The journals are the field. The checklist is the job.",
    ],
  },
];

export function getBlogTopic(slug: string) {
  return blogTopics.find((topic) => topic.slug === slug);
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByTopic(topic?: BlogTopicSlug) {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  if (!topic) return posts;
  return posts.filter((post) => post.topic === topic);
}

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? getPostsByTopic()[0];
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return getPostsByTopic(current.topic)
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatPostDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function topicLabel(slug: BlogTopicSlug) {
  return getBlogTopic(slug)?.label ?? slug;
}
