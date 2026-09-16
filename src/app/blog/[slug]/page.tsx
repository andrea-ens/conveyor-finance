import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSub from "@/components/SharedComponent/HeroSub";
import PostCard from "@/components/Blog/PostCard";
import {
  blogPosts,
  formatPostDate,
  getPostBySlug,
  getRelatedPosts,
  topicLabel,
} from "@/app/api/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <main>
      <HeroSub title={post.title} />
      <article className="pb-16">
        <div className="container px-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/45 -mt-6 mb-8">
            <Link
              href={`/blog/topic/${post.topic}`}
              className="text-primary uppercase tracking-wide hover:underline"
            >
              {topicLabel(post.topic)}
            </Link>
            <span>·</span>
            <span>{formatPostDate(post.date)}</span>
            <span>·</span>
            <span>{post.readMinutes} min read</span>
            <span>·</span>
            <span>
              {post.author.name}, {post.author.role}
            </span>
          </div>

          <p className="text-white text-xl md:text-2xl leading-relaxed border-l-2 border-primary pl-5">
            {post.tldr}
          </p>

          <div className="mt-12 space-y-6 text-white/70 text-lg leading-relaxed">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <p className="text-white/40 text-sm mt-12 leading-relaxed">
            Desk notes on on-chain trading. Not investment, legal, or tax
            advice; not an offer of securities; not a live quote or a signal.
            Protocol and product studies live under Selected work.
          </p>

          <Link
            href="/blog"
            className="inline-block mt-8 text-primary hover:underline"
          >
            ← All essays
          </Link>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="pb-24 border-t border-white/10 pt-16">
          <div className="container px-4">
            <h2 className="text-white text-2xl font-medium mb-8">
              More in {topicLabel(post.topic)}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
