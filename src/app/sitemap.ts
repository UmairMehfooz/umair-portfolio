import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
