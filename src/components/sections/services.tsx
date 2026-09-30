import Link from "next/link";
import { Bot, Brain, Store, Truck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { services } from "@/content/site";
import { projectName } from "@/content/projects";

const ICONS = { store: Store, truck: Truck, bot: Bot, brain: Brain };

export function Services() {
  return (
    <Section id="services" title="Services">
      <Reveal>
        <p className="-mt-2 mb-6 text-sm text-muted">
          What I can build for you, each one backed by something I&apos;ve already shipped.
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.title} delay={(i % 2) * 0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card">
                <div className="dot-grid flex h-32 items-center justify-center border-b border-line">
                  <Icon className="size-9 text-muted" strokeWidth={1.25} />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                  <p className="mt-3 font-mono text-[11px] text-muted">{service.tags.join(" · ")}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3 text-sm">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Proof</span>
                    <span className="flex flex-wrap justify-end gap-x-3">
                      {service.proof.map((slug) => (
                        <Link
                          key={slug}
                          href={`/projects#${slug}`}
                          className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          {projectName(slug)} →
                        </Link>
                      ))}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
