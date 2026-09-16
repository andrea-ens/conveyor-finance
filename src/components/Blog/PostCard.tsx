import Link from "next/link";
import {
  formatPostDate,
  topicLabel,
  type BlogPost,
} from "@/app/api/blog";

const PostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:border-primary/50 transition-colors h-full"
    >
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="text-primary uppercase tracking-wide">
          {topicLabel(post.topic)}
        </span>
        <span className="text-white/40">
          {formatPostDate(post.date)} · {post.readMinutes} min
        </span>
      </div>
      <h3 className="text-white text-xl font-medium mt-4 leading-snug group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-white/55 mt-3 leading-relaxed flex-1">{post.excerpt}</p>
      <span className="text-primary font-medium mt-5">Read →</span>
    </Link>
  );
};

export default PostCard;
