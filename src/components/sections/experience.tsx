import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { TechChip } from "@/components/tech-chip";
import { certifications, education, experience } from "@/content/site";
import { duration, formatMonth } from "@/lib/dates";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <Reveal key={job.company + job.start}>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-md border border-line bg-card font-pixel">
                {job.company[0]}
              </span>
              <h3 className="font-medium">{job.company}</h3>
            </div>
            <div className="ml-4 mt-4 border-l border-line pl-7">
              <p className="font-medium">{job.role}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {job.type} · {formatMonth(job.start)} – {job.end ? formatMonth(job.end) : "Present"} ·{" "}
                {duration(job.start, job.end)}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <TechChip key={t} name={t} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((item) => (
        <Reveal key={item.school} className="flex gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-card">
            <GraduationCap className="size-4 text-muted" />
          </span>
          <div>
            <h3 className="font-medium">{item.school}</h3>
            <p className="text-sm text-muted">{item.degree}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {item.start} – {item.end}
              {item.notes.map((note) => ` · ${note}`)}
            </p>
          </div>
        </Reveal>
      ))}

      <Reveal>
        <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">Certifications</h3>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex items-center justify-between gap-4 py-3 text-sm">
              <span>{cert.name}</span>
              {cert.issuer && <span className="shrink-0 text-xs text-muted">{cert.issuer}</span>}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
