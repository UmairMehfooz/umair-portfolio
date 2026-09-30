import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { About, Connect } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education, Experience } from "@/components/sections/experience";
import { GithubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { getPosts } from "@/lib/blog";

// Rebuild every 15 minutes so the GitHub graph and "Present" durations stay current.
export const revalidate = 900;

export default async function Home() {
  const posts = (await getPosts()).slice(0, 2);

  return (
    <main>
      <Hero />
      <About />
      <Connect />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Stack />
      <GithubActivity />
      {posts.length > 0 && (
        <Section
          id="blog"
          title="Blog"
          action={
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              All posts <ArrowRight className="size-3.5" />
            </Link>
          }
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}
      <Contact />
    </main>
  );
}
