import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/seo-saarland`;

export const metadata: Metadata = {
  title:
    "SEO Saarland · Suchmaschinenoptimierung für Unternehmen | Fylu Marketing",
  description:
    "SEO aus Saarlouis für Unternehmen im Saarland und deutschlandweit: technische Foundation, Content-Cluster, Local SEO und laufende Betreuung. Für nachhaltige Sichtbarkeit bei Google und in AI-Suchsystemen.",
  keywords: [
    "SEO Saarland",
    "SEO Saarlouis",
    "SEO Saarbrücken",
    "SEO Optimierung Saarland",
    "Suchmaschinenoptimierung Saarland",
    "SEO Betreuung Saarland",
    "SEO Beratung Saarland",
    "Local SEO Saarland",
    "SEO für Unternehmen Saarland",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "SEO Saarland · Suchmaschinenoptimierung für Unternehmen | Fylu Marketing",
    description:
      "Technische Foundation, Content-Cluster, Local SEO und laufende Betreuung. SEO aus Saarlouis für Unternehmen jeder Phase.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "SEO Saarland · Fylu Marketing aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Saarland · Fylu Marketing",
    description:
      "Foundation, Content, Local-Signale und laufende Betreuung aus Saarlouis.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "SEO Saarland",
  serviceType: "Suchmaschinenoptimierung",
  description:
    "Fylu Marketing bietet SEO aus Saarlouis für Unternehmen im Saarland und deutschlandweit: technische Foundation, Content-Cluster, Local-Signale und laufende Betreuung.",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: [
    { "@type": "State", name: "Saarland" },
    { "@type": "Country", name: "Deutschland" },
  ],
  url: URL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
    { "@type": "ListItem", position: 2, name: "SEO Saarland", item: URL },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
