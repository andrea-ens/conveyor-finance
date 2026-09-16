import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import FeaturedPost from "@/components/Blog/FeaturedPost";
import FieldJournals from "@/components/Blog/FieldJournals";
import PostCard from "@/components/Blog/PostCard";
import TopicNav from "@/components/Blog/TopicNav";
import { getFeaturedPost, getPostsByTopic } from "@/app/api/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "On-chain trading desk notes: execution, market structure, risk, and MEV. Plus the field journals we read — Flashbots and Paradigm. Not signals or live quotes.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const rest = getPostsByTopic().filter((post) => post.slug !== featured.slug);

  return (
    <main>
      <HeroSub
        title="On-chain trading"
        subtitle="A desk blog for execution, structure, risk, and MEV — not Selected work. Case studies stay on Work. This page is the market."
      />
      <section className="py-12 md:py-16 pb-24">
        <div className="container px-4">
          <div className="mb-14">
            <p className="text-primary font-medium">The field</p>
            <h2 className="text-white text-3xl font-medium mt-1 mb-3">
              Journals we read first
            </h2>
            <p className="text-white/55 max-w-3xl leading-relaxed mb-8">
              Flashbots is the house journal of on-chain execution. Paradigm is
              the long-form desk for market design. We do not reprint them. We
              point at them, then write our own notes in the same register.
            </p>
            <FieldJournals />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-primary font-medium">Conveyor notes</p>
              <h2 className="text-white text-3xl font-medium mt-1">
                From this desk
              </h2>
            </div>
            <TopicNav />
          </div>

          <FeaturedPost post={featured} />

          <div className="mt-16">
            <h2 className="text-white text-2xl font-medium mb-8">Essays</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
