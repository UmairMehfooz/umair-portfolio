import { education, experience, site, stack } from "@/content/site";

// schema.org data that tells Google this site is Umair Mehfooz's official profile.
// The sameAs links connect it to LinkedIn, GitHub and X for name searches.
export function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    alternateName: ["Umair", site.githubUsername],
    url: site.url,
    image: `${site.url}/opengraph-image`,
    description: site.description,
    jobTitle: site.title,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
    worksFor: experience
      .filter((job) => !job.end)
      .map((job) => ({ "@type": "Organization", name: job.company })),
    alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.school })),
    knowsAbout: stack.flatMap((group) => group.items),
    sameAs: [site.links.linkedin, site.links.github, site.links.x].filter(Boolean),
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} Portfolio`,
        author: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        url: site.url,
        name: `${site.name} | Portfolio`,
        mainEntity: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // escape "<" so content can never close the script tag (Next.js JSON-LD guidance)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
