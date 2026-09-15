import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://conveyor.finance";
  const routes = [
    "",
    "/product",
    "/dashboard",
    "/trade",
    "/company",
    "/careers",
    "/careers/senior-frontend-engineer",
    "/careers/defi-full-stack-engineer",
    "/careers/trading-ui-engineer",
    "/careers/people-operations-lead",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/disclosures",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
