import Image from "next/image";
import { MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { LocalTime } from "@/components/local-time";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <>
      <div className="dot-grid flex h-36 items-center justify-center">
        <Reveal>
          <p className="flex items-center gap-2 rounded-full border border-line bg-background/80 px-3 py-1 text-sm text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            {site.availability}
          </p>
        </Reveal>
      </div>

      <Reveal className="rule-t flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center">
        {site.photo ? (
          <Image
            src={site.photo}
            alt={site.name}
            width={112}
            height={112}
            priority
            className="size-28 shrink-0 rounded-2xl border border-line object-cover"
          />
        ) : (
          <div className="dot-grid flex size-28 shrink-0 items-center justify-center rounded-2xl border border-line bg-card font-pixel text-4xl">
            {site.initials}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-muted">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <SiGithub className="size-3.5" />@{site.githubUsername}
            </a>
            <LocalTime timeZone={site.timeZone} city={site.city} />
          </div>
          <h1 className="mt-2 text-3xl font-medium tracking-tight">{site.name}</h1>
          <p className="mt-1 text-muted">{site.title}</p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
            <MapPin className="size-3" />
            {site.location} · {site.currently}
          </p>
        </div>
      </Reveal>
    </>
  );
}
