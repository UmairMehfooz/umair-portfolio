export type Project = {
  slug: string;
  name: string;
  tagline: string;
  kind: "Client" | "Personal" | "Hackathon" | "Internship";
  status: "live" | "private" | "source";
  description: string;
  tech: string[];
  image: string | null; // screenshot in /public/projects
  logo?: string; // small square logo shown next to the name
  live: string | null;
  repo: string | null; // null for private repos
  featured: boolean; // featured projects appear on the home page
};

export const projects: Project[] = [
  {
    slug: "bidforge-ai",
    name: "BidForge AI",
    tagline: "RAG proposal engine",
    kind: "Hackathon",
    status: "source",
    description:
      "Reads an RFP, extracts every requirement and uses hybrid RAG retrieval (MiniLM embeddings, FAISS, re-ranking) over a company capability library to score compliance and draft the full proposal with Groq LLMs, plus a win-probability model trained on past bids.",
    tech: ["Python", "RAG", "LangChain", "FAISS", "FastAPI", "Groq", "React"],
    image: "/projects/bidforge.png",
    logo: "/projects/bidforge-logo.png",
    live: null,
    repo: "https://github.com/UmairMehfooz/BidForge-AI",
    featured: true,
  },
  {
    slug: "keepme",
    name: "KeepMe",
    tagline: "AI accountability coach",
    kind: "Personal",
    status: "private",
    description:
      "Remembers what you promised yourself, asks how the day went, checks your answer against what you committed to, and tells you the truth about the pattern. Installable app with push reminders.",
    tech: ["Next.js", "FastAPI", "Supabase", "OpenRouter", "Docker"],
    image: "/projects/keepme.png",
    logo: "/projects/keepme-logo.png",
    live: null,
    repo: null,
    featured: true,
  },
  {
    slug: "naavya",
    name: "Naavya",
    tagline: "Fashion e-commerce store",
    kind: "Client",
    status: "live",
    description:
      "Production store for a Pakistani fashion label: collections, cart, checkout with cash on delivery and Safepay, customer accounts, order emails and a full admin dashboard.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Resend"],
    image: "/projects/naavya.png",
    logo: "/projects/naavya-logo.png",
    live: "https://naavya.online",
    repo: null,
    featured: true,
  },
  {
    slug: "ideal-jewellers",
    name: "Ideal Jewellers",
    tagline: "Luxury jewellery storefront",
    kind: "Client",
    status: "live",
    description:
      "Storefront for a family jeweller: collections with filters, bridal sets, search, wishlist and checkout, with the catalogue and admin area running on Supabase.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    image: "/projects/idealjewellers.png",
    live: "https://www.idealjewellers.pk",
    repo: null,
    featured: false,
  },
  {
    slug: "aqua-aman-desktop",
    name: "Aqua Aman",
    tagline: "Delivery management desktop app",
    kind: "Client",
    status: "private",
    description:
      "Runs a water-delivery business offline on Windows: customers, deliveries, payments, bottle stock, profit-and-loss and receivables reports, and WhatsApp receipts, with daily backups and a PIN lock.",
    tech: ["Electron", "React", "SQLite", "JavaScript"],
    // customer names and figures are blurred — this is a real client's data
    image: "/projects/aqua-aman.png",
    logo: "/projects/aqua-aman-logo.png",
    live: null,
    repo: null,
    featured: true,
  },
  {
    slug: "flyrank-ml",
    name: "Search Ranking Research",
    tagline: "FlyRank ML internship work",
    kind: "Internship",
    status: "source",
    description:
      "Notebooks exploring what drives Google search ranking and discoverability, on anonymised FlyRank data up to ~79M rows, queried with DuckDB.",
    tech: ["Python", "pandas", "DuckDB", "Jupyter"],
    image: null,
    live: null,
    repo: "https://github.com/UmairMehfooz/Ml-Internship",
    featured: false,
  },
  {
    slug: "playwright-automation",
    name: "Portal Automation",
    tagline: "Browser automation framework",
    kind: "Personal",
    status: "source",
    description:
      "A Python and Playwright framework using the Page Object Model, saved login sessions, generic form filling and screenshot-on-failure debugging.",
    tech: ["Python", "Playwright"],
    image: null,
    live: null,
    repo: "https://github.com/UmairMehfooz/Course-Feedback-Automation",
    featured: false,
  },
];

export const projectName = (slug: string) =>
  projects.find((p) => p.slug === slug)?.name ?? slug;
