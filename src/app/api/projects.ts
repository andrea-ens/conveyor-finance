export type ProjectShot = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  overview: string;
  body: string[];
  highlights: string[];
  stack: string;
  cover: string;
  screenshots: ProjectShot[];
  featured?: boolean;
  showProtocolFlow?: boolean;
};

export const projects: Project[] = [
    {
    slug: "RyexSkope",
    title: "RYex — The Capital Layer for Perp Markets",
    kicker: "P2P crypto trading",
    summary:
      "RYex is designed as a capital-efficiency layer on top of perpetual decentralized exchanges.",
    overview:
      "Its core proposition is to allow users to extract liquid capital from a live perpetual position without closing the position or reducing its market exposure. The MVP targets Arbitrum and GMX v2, with a planned evolution toward multi-venue execution including Ostium and Hyperliquid. The reference implementation described in the source material currently focuses on a BTC 2x flow, while the broader protocol design includes rBTC, rETH, rSOL, rHYPE and rXAUT.",
    body: [
      "Perpetual DEXs have optimized execution , speed, leverage, asset coverage but not what happens to capital *while a position is open*.",  
      "Today, 100% of the margin inside a live perp position does exactly one thing: wait for PnL. It earns nothing else and cannot be touched until the trade closes.",
      "RYex is a capital-efficiency layer that sits on top of perpetual DEXs. It holds each user's position inside a protocol-controlled **Position Vault**, and lets the user **mint `rTokens`**,  liquid, price-tracking ERC-20s,  against the live position, without closing it or reducing exposure. The minted rToken is a plain ERC-20: sell it for USDC, LP it, farm it, or (later) use it as collateral. When the trade is closed, outstanding rToken debt is settled from proceeds.",
      "RYex does not change how you trade. It adds one option: while your position is open, it can work for you.",
    ],
    highlights: [
      "Two-party create / join / submit / lock / withdraw / abort",
      "ERC-20, ERC-721, and ERC-1155 in the same zwap",
      "Contract-held escrow until both sides withdraw or abort",
      "On-chain events for every state change",
    ],
    stack: "Solidity 0.8, Truffle, EVM, React JS, Next JS and Web3.js",
    cover: "/images/work/ryex-dashboard.png",
    screenshots: [
      {
        src: "/images/work/ryex/t02_mint.png",
        alt: "Ryex mint",
        caption: "",
      },
      {
        src: "/images/work/ryex/t03_swap.png",
        alt: "Ryex Swap",
        caption: "",
      },
      {
        src: "/images/work/ryex/t02_mint.png",
        alt: "MetaHorse DAO section",
        caption: "DAO chapter from the on-chain community surface.",
      },
      {
        src: "/images/work/ryex/t04_pools.png",
        alt: "Ryex Pool process",
        caption: "",
      },
      {
        src: "/images/work/ryex/t05_delta.png",
        alt: "Ryex Delta",
        caption: "",
      },
      {
      src: "/images/work/ryex/t06_liquidation.png",
      alt: "Ryex Liquidation",
      caption: "",
      },
      {
      src: "/images/work/ryex/t07_dashboard.png",
      alt: "Ryex Dashboard",
      caption: "",
     },
      {
      src: "/images/work/ryex/t10_dashboard_liquidated.png",
      alt: "Ryex Dashboard Liquidated",
      caption: "",
     },
    ],
    featured: true,
    showProtocolFlow: true,
  }, 

  {
    slug: "zwapper-evm",
    title: "Zwapper",
    kicker: "P2P token exchange",
    summary:
      "A non-custodial swap protocol for ERC-20, ERC-721, and ERC-1155. Two parties create, join, submit, lock, and withdraw — or abort and recover funds.",
    overview:
      "Zwapper is a peer-to-peer exchange contract we developed on EVM. There is no live deployment linked from this site. The work is the protocol itself: an escrowed swap between two addresses without a centralized matcher.",
    body: [
      "A caller creates a zwap. A second address joins. Each side submits the tokens they intend to exchange — fungible, NFT, or ERC-1155 — then locks. Locking transfers those assets to the contract. Withdraw moves the counterparty’s goods to each user. Abort returns locked assets to their original owners if the swap has not completed.",
      "State is explicit: NONE, CREATED, SUBMITTED, LOCKED, WITHDRAWING, COMPLETED, CLOSED. Events fire on join, submit, lock, withdraw, and abort so a client can reconstruct the swap without trusting an off-chain operator.",
      "The interface supports batch transfer-from-sender for operational moves, but the core product is the two-party lock-and-withdraw path. This marketing site does not point at a mainnet or testnet address.",
    ],
    highlights: [
      "Two-party create / join / submit / lock / withdraw / abort",
      "ERC-20, ERC-721, and ERC-1155 in the same zwap",
      "Contract-held escrow until both sides withdraw or abort",
      "On-chain events for every state change",
    ],
    stack: "Solidity 0.8, Truffle, EVM",
    cover: "/images/work/img-work-with-us.png",
    screenshots: [],
    featured: true,
    showProtocolFlow: true,
  },
  {
    slug: "metahorse",
    title: "MetaHorse",
    kicker: "On-chain game & DAO",
    summary:
      "A React + wagmi MVP for a blockchain horse-racing world: landing, wallet connect, funding/stake flows, and DAO surfaces — shown here as screenshots, not a live app.",
    overview:
      "MetaHorse is a product MVP we built as a wallet-connected application: landing storytelling, MetaMask / WalletConnect, a funding (stake) flow, and DAO-oriented pages. It is not published as a deployed product from conveyor.finance.",
    body: [
      "The client is a Create React App named stake-app in source. It uses wagmi, viem, Web3Modal, ethers, WalletConnect, and Firebase. Routes cover a marketing landing and a funding surface behind a Web3 provider.",
      "The landing is built as a sequence of on-chain product chapters — game, MetaHorse, DAO, legendary collection, community hub, art, partners — with a connected-wallet toast layer. Funding components handle the stake path once a wallet is present.",
      "Screenshots below are from the MVP we developed. There is no production URL on this page.",
    ],
    highlights: [
      "Wallet connect via wagmi, viem, and WalletConnect",
      "Landing, game, DAO, and funding/stake surfaces",
      "Firebase-backed client with React Router",
      "Presented as screenshots only",
    ],
    stack: "React, wagmi, viem, WalletConnect, ethers, Firebase",
    cover: "/images/work/metahorse-screenshot.jpg",
    screenshots: [
      {
        src: "/images/work/metahorse-screenshot.jpg",
        alt: "MetaHorse MVP screenshot",
        caption: "Connected client — MetaHorse MVP interface.",
      },
      {
        src: "/images/work/metahorse-hero.png",
        alt: "MetaHorse hero art",
        caption: "Product hero for the MetaHorse world.",
      },
      {
        src: "/images/work/metahorse-dao.png",
        alt: "MetaHorse DAO section",
        caption: "DAO chapter from the on-chain community surface.",
      },
      {
        src: "/images/work/metahorse-hub.jpg",
        alt: "MetaHorse community hub",
        caption: "Community hub layout from the MVP.",
      },
      {
        src: "/images/work/metahorse-slide.jpg",
        alt: "MetaHorse cinematic slide",
        caption: "Cinematic slide used in the landing sequence.",
      },
    ],
    featured: true,
  },
  {
    slug: "CryptoSkope",
    title: "AI-Powered Crypto Analytics Platform",
    kicker: "Markets UI",
    summary:
      "A professional trading layout: chart, order book, watchlist, and desk density. Screenshots of the study.",
    overview:
      "A full-stack cryptocurrency analytics dashboard with real-time market data, multi-horizon ML price predictions, technical indicators, risk analysis, and blockchain wallet integration.",
    body: [
      "CryptoSkope was built as an assessment project to demonstrate end-to-end software engineering across a Python ML backend and a React/Next.js frontend. The original task required completing 5 FastAPI endpoints:.",
      "Beyond the original scope, the project includes a full AI predictions page, technical indicators engine, prediction tracking system, and deep frontend integration.",
    ],
    highlights: [
      "Real-time market data",
      "Multi-horizon ML price predictions",
      "Technical indicators, risk analysis", 
    ],
    stack: "React, Next.js, Smart Contract",
    cover: "/images/work/cryptoskope-cover.png",
    screenshots: [
      {
        src: "/images/work/cryptoskope-dashboard.png",
        alt: "Crypto Trading Analytics",
        caption:
          "Trading workspace study — chart, order book, and watchlist.",
      },
    ],
    featured: true,
  },
  {
    slug: "Thetascreener",
    title: "Blockchain Trading Platform",
    kicker: "Portfolio UI",
    summary:
      "A multi-chain portfolio console: net worth, P&L, positions, and LP pools. Screenshot of the study — figures are illustrative.",
    overview:
      "Thetascreener is an innovative DeFi platform built on the Theta blockchain, an Ethereum Virtual Machine (EVM) compatible network. Our project is designed to enhance the Theta ecosystem by offering real-time decentralized exchange (DEX) data and tools for traders and investors. With the rising demand for decentralized finance solutions, Thetascreener aims to bring transparency, insight, and automation to the Theta blockchain community, empowering users to make informed decisions with ease.",
    body: [
      "Thetascreener's primary function mirrors that of Dexscreener, providing users with up-to-date token prices, trading volumes, and market data across DEXs operating on the Theta blockchain. Built on an EVM-based chain, Thetascreener integrates seamlessly with the Theta network, offering a familiar yet advanced toolset for traders.Beyond basic DEX tracking, Thetascreener goes further by incorporating key DeFi features such as staking and automated trading bots. Users can not only monitor the market but also take advantage of powerful tools to grow their investments through staking and optimize trading strategies using trading bots.",
    ],
    highlights: [
      "DEX tracking",
      "P&L and position table treatment",
      "Staking and automated trading bots.",
    ],
    stack: "Next.js, Trading operations UI",
    cover: "/images/work/trading-cover.png",
    screenshots: [
      {
        src: "/images/work/ctrading-dashboard.jpg",
        alt: "Crypto trading screenshot",
        caption:
          "Portfolio console study — net worth, P&L, and positions. Illustrative figures.",
      },
    ],
    featured: true,
  },
  {
    slug: "dao-proposal-monitor",
    title: "ENS DAO proposal monitor",
    kicker: "Governance",
    summary:
      "A Cloudflare Worker that watches ENS DAO proposals on a cron, notifies Telegram, and opens docs PRs — described here without a public app URL.",
    overview:
      "This worker is blockchain-adjacent infrastructure we developed around ENS governance. It is not a consumer website. There is no deployed frontend linked from Conveyor.",
    body: [
      "Every five minutes the worker checks for new ENS DAO proposals, both social and executable, against an Ethereum mainnet RPC. New items are de-duplicated in Workers KV.",
      "When a proposal is new, it posts to a Telegram channel and opens a pull request against the ENS docs repository so the public record can stay in sync with on-chain governance.",
    ],
    highlights: [
      "Cron on Cloudflare Workers",
      "ENS DAO social and executable proposals",
      "Telegram notification and docs PR",
      "KV to avoid duplicate alerts",
    ],
    stack: "Cloudflare Workers, Ethereum RPC, Telegram, GitHub",
    cover: "/images/work/metahorse-dao.png",
    screenshots: [
      {
        src: "/images/work/metahorse-dao.png",
        alt: "Governance visual from related on-chain work",
        caption:
          "Governance visual language from our on-chain work. The monitor itself is a worker, not a hosted app.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
