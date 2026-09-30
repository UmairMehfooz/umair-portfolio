import type { ComponentType } from "react";
import { ArrowUpRight, FileText, Send } from "lucide-react";
import { SiGithub, SiGmail, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { Highlight } from "@/components/highlight";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { about, site } from "@/content/site";

export function About() {
  return (
    <Section id="about" title="About">
      <ul className="space-y-3">
        {about.map((line, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-2.5 size-1 shrink-0 rounded-full bg-muted" />
              <span>
                <Highlight text={line} />
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

type ConnectLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  tile: string; // icon box colours
};

export function Connect() {
  const links: ConnectLink[] = [
    ...(site.resume ? [{ label: "Resume", href: "/resume", icon: FileText, tile: "bg-card text-muted" }] : []),
    { label: "Contact", href: "#contact", icon: Send, tile: "bg-card text-muted" },
    { label: "GitHub", href: site.links.github, icon: SiGithub, tile: "bg-card text-foreground" },
    { label: "LinkedIn", href: site.links.linkedin, icon: FaLinkedinIn, tile: "border-transparent bg-[#0a66c2] text-white" },
    ...(site.links.x ? [{ label: "X (Twitter)", href: site.links.x, icon: SiX, tile: "bg-black text-white" }] : []),
    { label: "Email", href: `mailto:${site.email}`, icon: SiGmail, tile: "bg-card text-[#ea4335]" },
  ];

  // Rows of three; a short last row is padded with striped cells so the grid stays even.
  const rows: (ConnectLink | null)[][] = [];
  for (let i = 0; i < links.length; i += 3) {
    const row: (ConnectLink | null)[] = links.slice(i, i + 3);
    while (row.length < 3) row.push(null);
    rows.push(row);
  }

  return (
    <Section title="Connect" flush>
      {rows.map((row, r) => (
        <Reveal key={r} delay={r * 0.05} className="rule-b grid max-sm:after:hidden sm:grid-cols-3">
          {row.map((link, i) =>
            link ? (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                className="group flex items-center gap-4 border-line px-5 py-4 transition-colors hover:bg-card max-sm:border-b sm:border-r sm:last:border-r-0"
              >
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-line ${link.tile}`}>
                  <link.icon className="size-5" />
                </span>
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowUpRight className="ml-auto size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ) : (
              <div key={`empty-${i}`} aria-hidden className="hatch-fill hidden border-line sm:block sm:border-r sm:last:border-r-0" />
            ),
          )}
        </Reveal>
      ))}
    </Section>
  );
}
