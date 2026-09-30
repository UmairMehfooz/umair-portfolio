import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { site } from "@/content/site";
import { getContributions, type Contributions } from "@/lib/github";
import { monthName } from "@/lib/dates";

const CELL = 12; // 9px square + 3px gap

export async function GithubActivity() {
  const data = await getContributions(site.githubUsername);

  return (
    <Section id="github" title="GitHub Activity">
      <Reveal className="rounded-xl border border-line bg-card p-4">
        {data ? (
          <ContributionGraph data={data} />
        ) : (
          <p className="text-sm text-muted">Activity couldn&apos;t be loaded right now.</p>
        )}
        <div className="mt-4 flex items-center justify-between gap-4 text-xs text-muted">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            View on GitHub <ArrowUpRight className="size-3" />
          </a>
          <span className="flex items-center gap-1">
            Less
            {[0, 1, 2, 3, 4].map((level) => (
              <span key={level} className="size-[9px] rounded-[2px]" style={{ background: `var(--g${level})` }} />
            ))}
            More
          </span>
        </div>
      </Reveal>
    </Section>
  );
}

function ContributionGraph({ data }: { data: Contributions }) {
  // The first week can start mid-week; pad it so every column lines up Sunday → Saturday.
  const firstDay = data.weeks[0]?.[0];
  const pad = firstDay ? new Date(`${firstDay.date}T00:00:00Z`).getUTCDay() : 0;

  return (
    <>
      <p className="text-sm font-medium">
        {data.total.toLocaleString("en-US")} contributions in the last year
      </p>
      <div className="mt-4 overflow-x-auto pb-1">
        <div className="w-max">
          <div className="relative mb-1.5 h-4 font-mono text-[10px] text-muted" style={{ width: data.weeks.length * CELL }}>
            {monthLabels(data).map((m) => (
              <span key={m.index} className="absolute" style={{ left: m.index * CELL }}>
                {m.label}
              </span>
            ))}
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
            {Array.from({ length: pad }, (_, i) => (
              <span key={`pad-${i}`} className="size-[9px]" />
            ))}
            {data.weeks.flat().map((day) => (
              <span
                key={day.date}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                className="size-[9px] rounded-[2px]"
                style={{ background: `var(--g${day.level})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// One label per month, placed over the first week that starts in it.
function monthLabels(data: Contributions) {
  const labels: { index: number; label: string }[] = [];
  let last = -1;
  data.weeks.forEach((week, index) => {
    const month = Number(week[0].date.slice(5, 7)) - 1;
    if (month === last) return;
    last = month;
    // skip a label that would collide with the previous one
    if (labels.length && index - labels[labels.length - 1].index < 3) return;
    labels.push({ index, label: monthName(month) });
  });
  return labels;
}
