import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { TechChip } from "@/components/tech-chip";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/dates";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card"
    >
      <div className="dot-grid flex aspect-[16/9] items-center justify-center border-b border-line p-6 text-center font-pixel text-2xl leading-snug">
        {post.cover}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium leading-snug">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{post.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <TechChip key={tag} name={tag} icon={false} />
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="transition-colors group-hover:text-foreground">Read more →</span>
        </div>
      </div>
    </Link>
  );
}
