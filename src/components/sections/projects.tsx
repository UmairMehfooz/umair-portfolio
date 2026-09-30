import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/content/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="group flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Show all Projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </Section>
  );
}
