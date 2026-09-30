import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, loadPost } from "@/lib/blog";
import { formatDate } from "@/lib/dates";

export async function generateStaticParams() {
  return (await getPosts()).map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await loadPost(slug);
  return { title: metadata.title, description: metadata.description };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { default: Content, metadata } = await loadPost(slug);

  return (
    <main className="px-6 py-12">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">
        ← All posts
      </Link>
      <h1 className="mt-6 text-3xl font-medium leading-tight tracking-tight">{metadata.title}</h1>
      <p className="mt-3 font-mono text-xs text-muted">
        {formatDate(metadata.date)} · {metadata.tags.join(" · ")}
      </p>
      <article className="post mt-10">
        <Content />
      </article>
    </main>
  );
}
