export type TeamMember = {
  name: string;
  role: string;
  location: string;
  bio: string;
  image: string;
  responsibilities: string[];
  github?: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Andrea",
    role: "Founder / CEO",
    location: "Remote",
    bio: "Sets vision, raises capital, owns product and technical direction, and closes partnerships and hiring. Also acting CTO until a dedicated lead blockchain hire is justified.",
    image: "/images/team/andrea.jpg",
    github: "https://github.com/andrea-ens",
    responsibilities: [
      "Vision",
      "Fundraising",
      "Product",
      "Technical direction",
      "Partnerships",
      "Hiring",
    ],
  },
];
