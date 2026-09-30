const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2026-06" → "Jun 2026"
export function formatMonth(ym: string) {
  const [year, month] = ym.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

// Inclusive month count, e.g. Jun → Sep = 4 mos (matches LinkedIn).
export function duration(start: string, end: string | null) {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  if (months < 12) return `${months} mo${months === 1 ? "" : "s"}`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return `${years} yr${years === 1 ? "" : "s"}${rest ? ` ${rest} mo${rest === 1 ? "" : "s"}` : ""}`;
}

// "2026-09-29" → "Sep 29, 2026"
export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export const monthName = (index: number) => MONTHS[index];
