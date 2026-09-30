import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Divider } from "@/components/section";
import { site } from "@/content/site";

export function Contact() {
  const href = site.booking ?? `mailto:${site.email}`;

  return (
    <section id="contact" className="scroll-mt-16">
      <Divider />
      <div className="px-6 py-16 text-center">
        <Reveal>
          <p className="font-pixel text-2xl">Made it to the bottom?</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            Then you probably have something in mind. Tell me what you&apos;re building and let&apos;s
            see if I can help.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-card p-1.5">
            <span className="rounded-full bg-line px-3 py-1 text-sm">You</span>
            <ArrowRight className="size-4 text-muted" />
            <a
              href={href}
              {...(site.booking && { target: "_blank", rel: "noreferrer" })}
              className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {site.booking ? "Book a free call" : "Email me"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
