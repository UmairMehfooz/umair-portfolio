import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { TechChip } from "@/components/tech-chip";
import { stack } from "@/content/site";

export function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div className="divide-y divide-line border-y border-line">
        {stack.map((group, i) => (
          <Reveal key={group.label} className="grid gap-3 py-4 sm:grid-cols-[170px_1fr] sm:items-center">
            <p className="flex items-baseline gap-3 text-sm">
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{group.label}</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <TechChip key={item} name={item} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
