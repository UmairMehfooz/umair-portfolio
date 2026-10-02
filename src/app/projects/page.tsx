import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Umair Mehfooz: BidForge AI (RAG), KeepMe, client e-commerce stores and a desktop business app, built with Next.js, Supabase and Python.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="px-6 py-12">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
        ← Home
      </Link>
      <h1 className="mt-6 font-pixel text-3xl">Projects</h1>
      <p className="mt-2 text-sm text-muted">
        Client work, personal projects and experiments. Private repos can&apos;t be opened, but
        I&apos;m happy to demo any of them.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
