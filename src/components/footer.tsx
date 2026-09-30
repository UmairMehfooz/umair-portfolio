import { Quote } from "lucide-react";
import { Divider } from "@/components/section";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer>
      <Divider />
      <div className="px-6 py-12 text-center">
        <Quote className="mx-auto size-6 text-muted" />
        <p className="mt-4 text-lg italic">&ldquo;{site.quote.text}&rdquo;</p>
        {site.quote.author && (
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
            {site.quote.author}
          </p>
        )}
      </div>
      <div className="rule-t px-6 py-8 text-center text-xs text-muted">
        <p>
          Designed & built by <span className="text-foreground">{site.name}</span>
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} · Layout inspired by{" "}
          <a
            href="https://sahilcodex.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Sahil Singh
          </a>
        </p>
      </div>
      <div className="rule-t dot-grid h-20" />
    </footer>
  );
}
