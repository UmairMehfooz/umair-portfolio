"use client";

import type { ComponentType, ReactNode } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Briefcase,
  FileText,
  FolderGit2,
  Home,
  Mail,
  MessageCircle,
  MoonStar,
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { toggleTheme } from "@/lib/theme";

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

export function CommandMenu({ open, onOpenChange }: Props) {
  const router = useRouter();

  const run = (action: () => void) => {
    onOpenChange(false);
    action();
  };
  const go = (href: string) => run(() => router.push(href));
  const visit = (href: string) => run(() => window.open(href, "_blank", "noopener,noreferrer"));

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command menu"
      overlayClassName="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]"
      contentClassName="fixed left-1/2 top-[18%] z-50 w-[min(560px,calc(100vw-32px))] -translate-x-1/2"
      className="overflow-hidden rounded-xl border border-line bg-card text-foreground shadow-2xl"
    >
      <Command.Input
        placeholder="Type a command or search…"
        className="w-full border-b border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
      />
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-muted">No results.</Command.Empty>

        <Command.Group heading="Navigation">
          <Item icon={Home} onSelect={() => go("/")}>Home</Item>
          <Item icon={Briefcase} onSelect={() => go("/#services")}>Services</Item>
          <Item icon={FolderGit2} onSelect={() => go("/projects")}>All projects</Item>
          <Item icon={BookOpen} onSelect={() => go("/blog")}>Blog</Item>
          <Item icon={MessageCircle} onSelect={() => go("/#contact")}>Contact</Item>
        </Command.Group>

        <Command.Group heading="Projects">
          {projects.map((project) => (
            <Item
              key={project.slug}
              icon={FolderGit2}
              onSelect={() => (project.live ? visit(project.live) : go(`/projects#${project.slug}`))}
            >
              {project.name}
            </Item>
          ))}
        </Command.Group>

        <Command.Group heading="Links">
          <Item icon={SiGithub} onSelect={() => visit(site.links.github)}>GitHub</Item>
          <Item icon={FaLinkedin} onSelect={() => visit(site.links.linkedin)}>LinkedIn</Item>
          <Item icon={Mail} onSelect={() => run(() => (window.location.href = `mailto:${site.email}`))}>
            Email
          </Item>
          {site.links.x && (
            <Item icon={SiX} onSelect={() => visit(site.links.x!)}>X (Twitter)</Item>
          )}
          {site.resume && (
            <Item icon={FileText} onSelect={() => go("/resume")}>Resume</Item>
          )}
        </Command.Group>

        <Command.Group heading="General">
          <Item icon={MoonStar} onSelect={() => run(toggleTheme)}>Toggle theme</Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

function Item({
  icon: Icon,
  onSelect,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  onSelect: () => void;
  children: ReactNode;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm data-[selected=true]:bg-line"
    >
      <Icon className="size-4 text-muted" />
      {children}
    </Command.Item>
  );
}
