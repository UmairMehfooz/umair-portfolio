import { execSync } from "node:child_process";

export type ContributionDay = { date: string; count: number; level: number };
export type Contributions = { total: number; weeks: ContributionDay[][] };

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

const LEVELS: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

// Private contributions are included as plain counts (no repo names) once
// "Private contributions" is switched on in your GitHub profile settings.
export async function getContributions(login: string): Promise<Contributions | null> {
  const token = process.env.GITHUB_TOKEN || devToken();
  if (!token) return null;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
      next: { revalidate: 900 }, // re-fetch from GitHub at most every 15 minutes
    });
    if (!res.ok) return null;
    const json = await res.json();
    const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) return null;

    return {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map(
        (week: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
            level: LEVELS[day.contributionLevel] ?? 0,
          })),
      ),
    };
  } catch {
    return null;
  }
}

// Local development only: reuse the GitHub CLI login so no token has to be saved in a file.
function devToken() {
  if (process.env.NODE_ENV !== "development") return undefined;
  try {
    return execSync("gh auth token", { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return undefined;
  }
}
