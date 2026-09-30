"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/75 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-[736px] items-center justify-between border-x border-line px-6">
        <Link href="/" className="font-pixel text-xl tracking-wider">
          {site.shortName}
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-foreground sm:block"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open command menu"
            className="ml-1 flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Search className="size-3.5" />
            <kbd className="font-mono text-[11px]">Ctrl K</kbd>
          </button>
          <ThemeToggle />
        </div>
      </nav>
      <CommandMenu open={open} onOpenChange={setOpen} />
    </header>
  );
}
