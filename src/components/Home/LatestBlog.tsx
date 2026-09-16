import Link from "next/link";
import PostCard from "@/components/Blog/PostCard";
import { getPostsByTopic } from "@/app/api/blog";

const LatestBlog = () => {
  const posts = getPostsByTopic().slice(0, 3);

  return (
    <section className="py-16 md:py-20 border-t border-white/10">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-primary font-medium">Blog</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              On-chain trading notes
            </h2>
          </div>
          <Link href="/blog" className="text-primary font-medium hover:underline">
            Desk blog →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
