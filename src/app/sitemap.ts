import type { MetadataRoute } from "next";
import { careerRoles } from "@/app/api/careers";
import { blogPosts, blogTopics } from "@/app/api/blog";
import { projects } from "@/app/api/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://conveyor.finance";
  const routes = [
    "",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/company",
    "/blog",
    ...blogTopics.map((topic) => `/blog/topic/${topic.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    "/careers",
    ...careerRoles.map((role) => `/careers/${role.slug}`),
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/disclosures",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
