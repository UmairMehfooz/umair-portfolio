// Everything the site says about you lives in this file and projects.ts.
// Edit text here — components never need to change for content updates.

export const site = {
  name: "Umair Mehfooz",
  shortName: "UMAIR",
  initials: "UM",
  title: "ML Intern & Full-Stack Developer",
  description:
    "Umair Mehfooz — AI student at CUST and Machine Learning intern at FlyRank AI. I build full-stack products with Next.js, Supabase and Python, from online stores to AI agents.",
  // Replace with your custom domain once you have one.
  url: "https://umair-portfolio.vercel.app",
  location: "Islamabad, PK",
  city: "Islamabad",
  timeZone: "Asia/Karachi",
  availability: "Open to internships & freelance work",
  currently: "ML Intern @ FlyRank AI",
  // Put your photo in /public (e.g. /public/umair.jpg) and set this to "/umair.jpg".
  photo: null as string | null,
  // Public copy of the resume without the phone number.
  resume: "/resume.pdf" as string | null,
  // A Cal.com (or similar) link turns the contact button into "Book a free call".
  booking: null as string | null,
  email: "mehfoozumair1@gmail.com",
  githubUsername: "UmairMehfooz",
  links: {
    github: "https://github.com/UmairMehfooz",
    linkedin: "https://www.linkedin.com/in/umair-mehfooz-62a512335",
    // Your X profile link, e.g. "https://x.com/yourhandle". Shows in Connect and Ctrl+K when set.
    x: "https://x.com/UmairMehfooz8" as string | null,
  },
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
};

// Wrap words in **double asterisks** to underline them.
export const about = [
  "I'm an **AI student** at CUST and a **Machine Learning intern at FlyRank AI**, where I work on how Google ranks and surfaces pages.",
  "I build full products end to end with **Next.js, TypeScript and Supabase**, from database security rules to the checkout page.",
  "On the AI side I use **Python, FastAPI and LangChain** to build agents that do real work, like drafting proposals or coaching habits.",
  "I've shipped software for real businesses: **two online stores** and **an offline desktop app** that runs a water-delivery company.",
];

export type Job = {
  company: string;
  role: string;
  type: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  bullets: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "FlyRank AI",
    role: "Machine Learning Intern",
    type: "Internship",
    start: "2026-06",
    end: null,
    bullets: [
      "Working on applied search intelligence: modelling how Google ranks and surfaces pages, using FlyRank's anonymised search data.",
      "Querying the full ~79M-row dataset with DuckDB straight from Colab, without downloading it.",
      "Taking each question through a full ML workflow: task framing, data contracts, leakage checks, baselines and validation audits.",
    ],
    tech: ["Python", "pandas", "DuckDB", "Jupyter", "Google Colab"],
  },
];

export const education = [
  {
    school: "Capital University of Science & Technology",
    degree: "BS Artificial Intelligence",
    start: "2024",
    end: "2028",
    notes: ["Dean's Honor Roll (4 times)"],
  },
];

export const certifications = [
  { name: "Oracle Certified Foundations Associate", issuer: "Oracle" },
  { name: "Python for Data Analysis: Pandas & NumPy", issuer: "Coursera" },
  { name: "German A1", issuer: "NUML" },
];

export type Service = {
  title: string;
  icon: "store" | "truck" | "bot" | "brain";
  description: string;
  tags: string[];
  proof: string[]; // project slugs from projects.ts
};

export const services: Service[] = [
  {
    title: "E-commerce stores",
    icon: "store",
    description:
      "Online stores with collections, cart, checkout (cash on delivery or online payment), customer accounts and an admin dashboard to run it all.",
    tags: ["Next.js", "Supabase", "Payments", "Admin"],
    proof: ["naavya", "ideal-jewellers"],
  },
  {
    title: "Business management apps",
    icon: "truck",
    description:
      "Software that runs day-to-day operations: customers, deliveries, stock, invoices, reports and WhatsApp receipts, online or fully offline.",
    tags: ["Desktop", "Web", "Reports", "WhatsApp"],
    proof: ["aqua-aman-desktop"],
  },
  {
    title: "AI agents & automation",
    icon: "bot",
    description:
      "LLM-powered tools that draft, extract and decide, plus browser automations that take repetitive work off your plate.",
    tags: ["LangChain", "FastAPI", "LLMs", "Playwright"],
    proof: ["bidforge-ai", "keepme"],
  },
  {
    title: "ML & data analysis",
    icon: "brain",
    description:
      "Exploring large datasets, building models you can actually read, and turning the results into decisions.",
    tags: ["Python", "pandas", "DuckDB", "Notebooks"],
    proof: ["flyrank-ml"],
  },
];

export const stack = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "PWA"] },
  {
    label: "Backend & Data",
    items: ["FastAPI", "Supabase", "PostgreSQL", "MongoDB", "SQLite", "Payload CMS"],
  },
  {
    label: "AI & ML",
    items: ["RAG", "LangChain", "FAISS", "OpenRouter", "Groq", "pandas", "NumPy", "DuckDB", "Jupyter"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git", "Docker", "Vercel", "Electron", "Playwright", "Oracle Cloud"],
  },
];
