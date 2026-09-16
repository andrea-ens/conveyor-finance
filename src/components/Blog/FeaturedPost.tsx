import Link from "next/link";
import {
  formatPostDate,
  topicLabel,
  type BlogPost,
} from "@/app/api/blog";

const FeaturedPost = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 hover:border-primary/50 transition-colors"
    >
      <p className="text-primary text-sm uppercase tracking-[0.16em]">
        {topicLabel(post.topic)}
      </p>
      <h2 className="text-white text-3xl md:text-5xl font-medium mt-4 leading-tight group-hover:text-primary transition-colors max-w-4xl">
        {post.title}
      </h2>
      <p className="text-white/45 text-sm mt-5">
        {formatPostDate(post.date)} · {post.readMinutes} min read ·{" "}
        {post.author.name}
      </p>
      <p className="text-white/70 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl">
        <span className="text-white/40 text-sm uppercase tracking-wide block mb-2">
          TL;DR
        </span>
        {post.tldr}
      </p>
      <span className="inline-block text-primary font-medium mt-8">
        Read essay →
      </span>
    </Link>
  );
};

export default FeaturedPost;
