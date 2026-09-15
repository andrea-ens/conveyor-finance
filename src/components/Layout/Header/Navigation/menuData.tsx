import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Platform", href: "/#work" },
  {
    label: "Products",
    href: "/product",
    submenu: [
      { label: "Overview", href: "/product" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Trading", href: "/trade" },
    ],
  },
  { label: "Why Conveyor", href: "/#upgrade" },
  {
    label: "Company",
    href: "/company",
    submenu: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/#faq" },
];
