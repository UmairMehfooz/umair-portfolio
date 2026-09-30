import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from building real products: AI, full-stack and client work.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="px-6 py-12">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
        ← Home
      </Link>
      <h1 className="mt-6 font-pixel text-3xl">Blog</h1>
      <p className="mt-2 text-sm text-muted">Notes from building real products.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 2) * 0.06}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
