export type CareerRole = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  schedule: string;
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
    text: "Submit the role form. Applications are delivered to careers@conveyor.finance. Include a portfolio or GitHub and what you would own in the first 90 days.",
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
    text: "We share rate, hours (part-time or full-time), contract terms, and written expectations. You should have time to decide without pressure.",
  },
];

export const roleEngagement =
  "This is a 100% remote contract role. You set your own schedule, whether you are looking for part-time or full-time.";

export const careerBenefits = [
  "100% remote — you set your own schedule",
  "Contract engagement, part-time or full-time",
  "Competitive contract rate, discussed before an offer is issued",
  "Hardware and software of your choice",
  "Direct access to the founder — no ticket queue for product or technical decisions",
];

export const careerRoles: CareerRole[] = [
  {
    slug: "senior-blockchain-engineer",
    title: "Senior Blockchain Engineer",
    team: "Protocol",
    location: "100% remote",
    type: "Full-time",
    schedule: "Part-time or full-time",
    summary:
      "Solidity, EVM, and protocol work: design, implement, and review the on-chain systems Conveyor ships.",
    about:
      "You will own protocol quality with the CTO. This is a senior individual-contributor seat. You write and review Solidity, reason about EVM constraints, and keep on-chain behavior honest in public.",
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
    location: "100% remote",
    type: "Full-time",
    schedule: "Part-time or full-time",
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
    location: "100% remote",
    type: "Full-time",
    schedule: "Part-time or full-time",
    summary:
      "React, Next.js, and wallet integration — the marketing site and operator-facing Web3 surfaces.",
    about:
      "You own the client: conveyor.finance, product studies, and wallet-connected flows. Wallet connect, transaction states, and layout quality are the job. You work directly with the CTO or Technical Product Manager on product.",
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
    location: "100% remote",
    type: "Full-time",
    schedule: "Part-time or full-time",
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
    slug: "Blockchain-devrel-engineer",
    title: "Blockchain Developer Relations Engineer",
    team: "Product",
    location: "100% remote",
    type: "Full-time",
    schedule: "Part-time or full-time",
    summary:
      "By leveraging blockchain and AI technology, we offers a decentralized and transparent marketplace for predictions, allowing individuals to monetize their insights and forecasts.",
    about:
      "As a Blockchain Solutions Engineer, you will be the bridge between blockchains and the broader developer community. Your mission is to foster strong relationships with developers, providing them with the tools, resources, and support to thrive within the blockchain ecosystem. This position requires a keen interest in blockchain technology, a collaborative spirit, and a commitment to providing exceptional technical support and guidance.",
    responsibilities: [
      "Stay updated on blockchain industry trends, emerging technologies, and the competitive landscape to identify opportunities for growth and improvement",
      "Engage with the developer community to gather valuable insights, identify areas for product enhancement, and solve the problems.",
      "Serve as a proactive champion for developers, actively addressing their concerns, and facilitating a supportive and engaging community environment.",
      "Collaborate with various teams such as product, marketing, and engineering teams to ensure developer relations initiatives are aligned with business strategies and objectives.",
      "Create and maintain comprehensive technical documentation, tutorials, sample code, and other resources to empower developers.", 
      "Provide timely and effective technical support to developers, assisting with troubleshooting, technical inquiries, and integration challenges.", 
    ],
    requirements: [
      "Positive attitude with a strong desire to learn and grow within a Community Management and Engineering team.",
      "Familiarity with community management platforms such as Telegram and Discord.",
      "Basic understanding of programming languages and software development tools, for example: Solidity, TypeScript, Golang or Rust.",
      "Bachelor’s degree in Computer Science, Software Engineering, or a related field, or equivalent practical experience.",
      "Minimum 1 year of experience in a similar role, with exposure to software engineering, customer support, or developer relations.",
      "Strong problem-solving abilities and attention to detail.", 
    ],
    niceToHave: [
      "Excellent communication and interpersonal skills",
      "Experience in token mint is more plus",
    ],
  },
];

export function getRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
