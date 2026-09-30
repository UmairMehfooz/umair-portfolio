function applyToggle() {
  const dark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    // storage blocked (private mode) — the toggle still works for this visit
  }
}

// Switches theme with the new one growing as a circle from `origin` (default: screen centre).
// Browsers without View Transitions, or visitors who prefer reduced motion, get an instant switch.
export function toggleTheme(origin?: { x: number; y: number }) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion) {
    applyToggle();
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  // radius that reaches the farthest corner of the screen
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const transition = document.startViewTransition(applyToggle);
  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    })
    // The browser skips the transition in a hidden tab; the theme has still switched.
    .catch(() => {});
}
