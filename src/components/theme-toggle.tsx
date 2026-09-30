"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/theme";

// Both icons render and CSS swaps them (rotate + scale), so there is no hydration mismatch.
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label="Toggle theme"
      className="relative flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
    >
      <Moon className="absolute size-4 rotate-0 scale-100 transition-all duration-300 ease-out not-dark:-rotate-90 not-dark:scale-0" />
      <Sun className="absolute size-4 rotate-90 scale-0 transition-all duration-300 ease-out not-dark:rotate-0 not-dark:scale-100" />
    </button>
  );
}
