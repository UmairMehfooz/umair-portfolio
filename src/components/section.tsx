import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

// Striped band that separates sections, running the full width of the screen.
export function Divider() {
  return <div aria-hidden className="hatch" />;
}

export function Section({
  id,
  title,
  action,
  flush = false,
  children,
}: {
  id?: string;
  title?: string;
  action?: ReactNode;
  flush?: boolean; // content handles its own padding and lines (e.g. Connect grid)
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <Divider />
      {title && (
        <div className="rule-b px-6 py-5">
          <Reveal className="flex items-end justify-between gap-4">
            <h2 className="font-pixel text-2xl">{title}</h2>
            {action}
          </Reveal>
        </div>
      )}
      <div className={flush ? undefined : "px-6 py-10"}>{children}</div>
    </section>
  );
}
