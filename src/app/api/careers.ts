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
  niceToHave: string[];
};

export const careerValues = [
  {
    title: "Craft over ceremony",
    text: "We hire people who ship. Protocols, services, and the public site should look and feel like they belong to the same company.",
  },
  {
    title: "Plain language",
    text: "Crypto is noisy. We write for operators and candidates the same way: specific, honest, and free of theatre.",
  },
  {
    title: "Small team, real ownership",
    text: "You will own a surface end to end. The founder is CEO and acting CTO — you will work with that person, not a layer of managers.",
  },
];

export const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    text: "Submit the role form or email careers@conveyor.finance. Include a portfolio or GitHub and two sentences on what you would own in the first 90 days.",
  },
  {
    step: "02",
    title: "Intro conversation",
    text: "A 30-minute call with the founder. We talk through your work, the role, and whether Conveyor is the right environment.",
  },
  {
    step: "03",
    title: "Work sample",
    text: "A scoped exercise or walkthrough of existing work. We do not ask for unpaid production. Time-boxed, relevant to the role.",
  },
  {
    step: "04",
    title: "Offer",
    text: "We share compensation, equity, start date, and written expectations. You should have time to decide without pressure.",
  },
];

export const careerBenefits = [
  "Competitive salary and meaningful equity, discussed before an offer is issued",
  "Remote-first, with overlap in European and US time zones",
  "Hardware and software of your choice",
  "Learning budget for markets, security, design, and writing",
  "Paid time off and parental leave",
  "Direct access to the founder — no ticket queue for product or technical decisions",
];

export const careerRoles: CareerRole[] = [
  {
    slug: "senior-blockchain-engineer",
    title: "Senior Blockchain Engineer",
    team: "Protocol",
    location: "Remote",
    type: "Full-time",
    summary:
      "Solidity, EVM, and protocol work: design, implement, and review the on-chain systems Conveyor ships.",
    about:
      "You will own protocol quality with the founder (acting CTO). This is a senior individual-contributor seat — not a CTO hire. You write and review Solidity, reason about EVM constraints, and keep on-chain behavior honest in public.",
    responsibilities: [
      "Design and implement Solidity contracts and protocol upgrades",
      "Review threat models, invariants, and upgrade paths before anything is treated as production",
      "Work with backend and frontend on ABIs, events, and indexing",
      "Document what is on-chain versus off-chain, and what is not yet deployed",
    ],
    requirements: [
      "Production Solidity and EVM experience",
      "Comfort with testing, audits, and adversarial review",
      "Ability to explain protocol trade-offs in writing",
      "Bias toward correctness over shipping unverified complexity",
    ],
    niceToHave: [
      "Prior DEX, escrow, or P2P exchange protocol work",
      "Experience with Foundry, Hardhat, or equivalent",
    ],
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    team: "Platform",
    location: "Remote",
    type: "Full-time",
    summary:
      "Trading APIs, databases, and services that sit behind the product — reliable, observable, and boring in the right ways.",
    about:
      "Conveyor’s product studies become real when the service layer is real. You will design APIs, data stores, and jobs for market and on-chain data, without pretending we have a live brokerage until we do.",
    responsibilities: [
      "Build and operate trading and portfolio APIs and supporting services",
      "Model databases and caches for market, wallet, and protocol data",
      "Define contracts with frontend and protocol engineers",
      "Instrument latency, errors, and data freshness",
    ],
    requirements: [
      "Production backend experience (TypeScript, Go, or similar)",
      "Strong database and API design judgment",
      "Comfort with queues, jobs, and failure modes",
      "Clear written communication",
    ],
    niceToHave: [
      "Market-data or order-routing systems",
      "Indexing chains or subgraphs into application databases",
    ],
  },
  {
    slug: "frontend-web3-engineer",
    title: "Frontend / Web3 Engineer",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    summary:
      "React, Next.js, and wallet integration — the marketing site and operator-facing Web3 surfaces.",
    about:
      "You own the client: conveyor.finance, product studies, and wallet-connected flows. Wallet connect, transaction states, and layout quality are the job. You work directly with the founder on product.",
    responsibilities: [
      "Ship Next.js and React surfaces with a high craft bar",
      "Integrate wallets (wagmi, viem, or similar) with honest loading and error states",
      "Keep careers, work, and company pages as sharp as the product UI",
      "Partner with protocol and backend on types and user-visible failure",
    ],
    requirements: [
      "Production React and Next.js (App Router) experience",
      "Hands-on Web3 frontend: wallets, transactions, chain switching",
      "Strong TypeScript and visual judgment",
      "Comfort in a small team without a large design org",
    ],
    niceToHave: [
      "Trading or DeFi dashboard UIs",
      "Accessibility and performance work on marketing sites",
    ],
  },
  {
    slug: "devops-security-engineer",
    title: "DevOps / Security Engineer",
    team: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    summary:
      "Cloud, CI/CD, infrastructure, and monitoring — plus the security bar for keys, deploys, and production access.",
    about:
      "We will not run production trading infrastructure on hope. You own how we build, deploy, observe, and lock down environments. This seat exists so protocol and product engineers can move without leaving the company exposed.",
    responsibilities: [
      "Design cloud infrastructure, CI/CD, and environments",
      "Monitoring, alerting, and incident response for services we actually run",
      "Secrets, key handling, least-privilege access, and deploy controls",
      "Partner with protocol and backend on threat models that include ops, not only contracts",
    ],
    requirements: [
      "Production cloud and CI/CD experience",
      "Practical security: IAM, secrets, network boundaries, audit trails",
      "Comfort with infrastructure as code",
      "Calm, written incident communication",
    ],
    niceToHave: [
      "SOC2 or similar readiness work",
      "On-chain deploy pipelines and hardware-wallet operational practice",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    summary:
      "Turn vision into a sequenced product: what we build, what we do not claim, and how operators experience Conveyor.",
    about:
      "The founder owns vision and technical direction. You own the product loop: discovery, sequencing, specs, and whether a surface is ready to be public. You keep marketing, protocol, and engineering on one story.",
    responsibilities: [
      "Write clear problem statements, specs, and release criteria",
      "Sequence protocol, backend, and frontend work without theatre",
      "Keep public claims aligned with what is actually built",
      "Talk to operators and candidates; bring signal back to the founder",
    ],
    requirements: [
      "Shipped product in crypto, fintech, or similarly constrained domains",
      "Excellent writing and facilitation",
      "Comfort saying no, including to the founder",
      "Ability to work with engineers without becoming a ticket clerk",
    ],
    niceToHave: [
      "Trading, DeFi, or wallet product experience",
      "Early-stage company experience (first PM or small team)",
    ],
  },
];

export function getRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
