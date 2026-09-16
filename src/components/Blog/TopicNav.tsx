import Link from "next/link";
import { blogTopics } from "@/app/api/blog";

type TopicNavProps = {
  active?: string;
};

const TopicNav = ({ active }: TopicNavProps) => {
  const items = [{ slug: "all", label: "All", href: "/blog" as const }, ...blogTopics.map((topic) => ({
    slug: topic.slug,
    label: topic.label,
    href: `/blog/topic/${topic.slug}` as const,
  }))];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const isActive =
          (item.slug === "all" && !active) || item.slug === active;
        return (
          <Link
            key={item.slug}
            href={item.href}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-primary bg-primary/15 text-primary"
                : "border-white/15 text-white/70 hover:border-primary/50 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default TopicNav;
