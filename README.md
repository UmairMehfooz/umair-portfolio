# Umair Mehfooz — Portfolio

Personal site: projects, client work, blog and resume. Built with Next.js 16, Tailwind CSS 4 and Motion, deployed on Vercel.

## Editing content

Almost everything on the site comes from two files:

- `src/content/site.ts` — profile, about, experience, education, certifications, services, stack, links
- `src/content/projects.ts` — project cards (images live in `public/projects`)

Blog posts are MDX files in `src/content/blog`. The resume served at `/resume` is `public/resume.pdf`.

## Running locally

```bash
npm install
npm run dev
```

The GitHub activity graph uses `GITHUB_TOKEN` (see `.env.example`). Locally it falls back to your GitHub CLI login.
