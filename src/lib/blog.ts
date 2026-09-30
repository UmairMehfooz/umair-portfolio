import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

// Each post is src/content/blog/<slug>.mdx and exports `metadata` in this shape.
export type PostMeta = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  cover: string; // short text shown on the card cover
};

export type Post = PostMeta & { slug: string };

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export async function loadPost(slug: string) {
  return (await import(`@/content/blog/${slug}.mdx`)) as {
    default: ComponentType;
    metadata: PostMeta;
  };
}

export async function getPosts(): Promise<Post[]> {
  const slugs = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  const posts = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await loadPost(slug)).metadata })),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
