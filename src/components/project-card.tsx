import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/content/projects";
import { TechChip } from "@/components/tech-chip";

const STATUS = {
  live: { label: "Live", dot: "bg-live" },
  private: { label: "Private", dot: "bg-muted" },
  source: { label: "Open source", dot: "bg-sky-500" },
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const status = STATUS[project.status];

  return (
    <article
      id={project.slug}
      className="group flex h-full scroll-mt-20 flex-col overflow-hidden rounded-xl border border-line bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} home page`}
            fill
            sizes="(min-width: 640px) 340px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="dot-grid flex h-full items-center justify-center px-6 text-center font-pixel text-3xl text-muted">
            {project.name}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="flex items-center gap-2 font-medium">
              {project.logo && (
                <Image src={project.logo} alt="" width={20} height={20} className="size-5 rounded-[5px]" />
              )}
              {project.name}
            </h3>
            <p className="text-xs text-muted">
              {project.kind} · {project.tagline}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted">
            <span className={`size-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </div>

        <div className="mt-auto flex divide-x divide-line border-t border-line pt-3 text-sm [&>*]:flex-1 [&>*]:justify-center">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={linkClass}>
              Live site <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className={linkClass}>
              GitHub <SiGithub className="size-3.5" />
            </a>
          )}
          {!project.live && !project.repo && (
            <Link href="/#contact" className={linkClass}>
              <Lock className="size-3.5" /> Private code · ask for a demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

const linkClass =
  "flex items-center gap-1.5 py-1 text-muted transition-colors hover:text-foreground";
