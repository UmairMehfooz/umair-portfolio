import { FallbackIcon, techIcons } from "@/lib/tech-icons";

export function TechChip({ name, icon = true }: { name: string; icon?: boolean }) {
  const Icon = techIcons[name] ?? FallbackIcon;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-background px-2 py-1 font-mono text-[11px] text-muted">
      {icon && <Icon className="size-3" />}
      {name}
    </span>
  );
}
