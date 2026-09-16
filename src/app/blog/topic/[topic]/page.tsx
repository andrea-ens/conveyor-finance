import { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSub from "@/components/SharedComponent/HeroSub";
import PostCard from "@/components/Blog/PostCard";
import TopicNav from "@/components/Blog/TopicNav";
import {
  blogTopics,
  getBlogTopic,
  getPostsByTopic,
  type BlogTopicSlug,
} from "@/app/api/blog";

type PageProps = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return blogTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const item = getBlogTopic(topic);
  if (!item) return { title: "Blog" };
  return {
    title: `${item.label} — Blog`,
    description: `On-chain trading notes in ${item.label.toLowerCase()}. Not case studies.`
  };
}

export default async function BlogTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const item = getBlogTopic(topic);
  if (!item) notFound();

  const posts = getPostsByTopic(item.slug as BlogTopicSlug);

  return (
    <main>
      <HeroSub
        title={item.label}
        subtitle={`${posts.length} ${posts.length === 1 ? "essay" : "essays"} on on-chain trading · newest first`}
      />
      <section className="py-12 md:py-16 pb-24">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <p className="text-white/50">Sort by newest</p>
            <TopicNav active={item.slug} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
