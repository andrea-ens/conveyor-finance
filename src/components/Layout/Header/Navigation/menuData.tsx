import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Work", href: "/work" },
  {
    label: "Company",
    href: "/company",
    submenu: [
      { label: "About", href: "/company" },
      { label: "Approach", href: "/company#approach" },
      { label: "Team", href: "/company#team" },
      { label: "Blog", href: "/blog" },
      { label: "Flashbots", href: "https://writings.flashbots.net/" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
