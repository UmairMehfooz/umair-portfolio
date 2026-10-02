import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name}, ${site.title}: experience at FlyRank AI, client projects, skills and education.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  if (!site.resume) notFound();
  const pdf = site.resume;

  return (
    <main>
      <div className="px-6 py-14 text-center">
        <Reveal>
          <h1 className="font-pixel text-4xl">Resume</h1>
          <p className="mt-3 text-muted">My experience, projects and skills on one page.</p>
        </Reveal>
      </div>

      <div className="rule-t px-4 py-6 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-xl border border-line bg-card">
          <div className="absolute right-3 top-3 z-10 flex gap-2">
            <a
              href={pdf}
              download
              aria-label="Download resume"
              title="Download"
              className="flex size-9 items-center justify-center rounded-md bg-neutral-800/90 text-white transition-colors hover:bg-neutral-700"
            >
              <Download className="size-4" />
            </a>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              aria-label="Open resume in a new tab"
              title="Open in new tab"
              className="flex size-9 items-center justify-center rounded-md bg-neutral-800/90 text-white transition-colors hover:bg-neutral-700"
            >
              <ExternalLink className="size-4" />
            </a>
          </div>

          {/* Phone browsers can't show a PDF inside a page, so they get buttons instead. */}
          <iframe
            src={`${pdf}#toolbar=0&navpanes=0&view=FitH`}
            title={`${site.name} resume`}
            className="hidden h-[1000px] w-full bg-white sm:block"
          />
          <div className="flex flex-col items-center gap-3 px-6 py-16 text-center sm:hidden">
            <p className="text-sm text-muted">Open the PDF to read it on your phone.</p>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              Open resume
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
