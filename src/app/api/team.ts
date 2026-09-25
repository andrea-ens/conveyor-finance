export type TeamMember = {
  name: string;
  role: string;
  location: string;
  bio: string;
  image?: string;
  responsibilities: string[];
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  // {
  //   name: "Andrea",
  //   role: "Founder / CEO",
  //   location: "Remote",
  //   bio: "Sets vision, raises capital, owns product and technical direction, and closes partnerships and hiring. Also acting CTO until a dedicated lead blockchain hire is justified.",
  //   image: "/images/team/andrea.jpg",
  //   linkedin: "https://www.linkedin.com/in/andrea-ens",
  //   responsibilities: [
  //     "Vision",
  //     "Fundraising",
  //     "Product",
  //     "Technical direction",
  //     "Partnerships",
  //     "Hiring",
  //   ],
  // },
  {
    name: "David Coutu",
    role: "CTO",
    location: "Canada",
    bio: "As a CTO at Conveyor Finance, specialized in cryptocurrency trading platforms, blockchain infrastructure, and digital-asset technology. ",
    image: "/images/team/david-cto.png",
    linkedin: "https://www.linkedin.com/in/trading-cto",
    responsibilities: [
      "Technical direction",
      "Engineering",
      "Infrastructure",
      "Security",
      "Blockchain",
      "Delivery",
    ],
  },

  {
    name: "Jason Chak",
    role: "Senior Blockchain TPM",
    location: "Hong Kong",
    bio: "Senior technical product manager for Bitcoin, trading, and operator-facing product. Background includes TPM work at Swan Bitcoin and project management at BitMEX.",
    image: "/images/team/jason-tpm.png",
    linkedin: "https://www.linkedin.com/in/jason-chak-bitcoin/",
    responsibilities: [
      "Product",
      "Trading",
      "Bitcoin",
      "Roadmap",
      "Delivery",
      "Stakeholders",
    ],
  },
  {
    name: "Viktoriia Oliferchuk",
    role: "Talent Acquisition Specialist",
    location: "Ireland",
    bio: "Passionate about connecting exceptional engineers with innovative organizations shaping the future of decentralized technology and onchain trading infrastructure.",
    image: "/images/team/victoria.jpg", 
    linkedin: "https://www.linkedin.com/in/viktoriia-oliferchuk-bitcoin/",
    responsibilities: ["Cryptocurrenty Trading", "Talent Management", "Technical Recruiting", "Blockchain"],
  },
  {
    name: "Izaias Barbosa",
    role: "Senior Blockchain Engineer",
    location: "Remote",
    bio: " Independently developed and deployed multiple smart contracts for a private EVM chain, including token contracts, staking, farming and DeFi modules.",
    image: "/images/team/lzaias.jpg", 
    linkedin: "https://www.linkedin.com/in/izaias-barbosa/",
    responsibilities: ["Smart Contract", "Solidity", "Trading", "Web3", "Solana"],
  },
];
