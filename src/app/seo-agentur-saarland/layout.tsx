import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/seo-agentur-saarland`;

export const metadata: Metadata = {
  title:
    "SEO Agentur Saarland · Suchmaschinenoptimierung aus Saarlouis | Fylu Marketing",
  description:
    "SEO Agentur aus Saarlouis für Unternehmen im Saarland und deutschlandweit. Technische Foundation, Content-Aufbau, Local SEO und laufende Betreuung. Transparente Konditionen, kein Vertrieb aus der Hotline.",
  keywords: [
    "SEO Agentur",
    "SEO Agentur Saarland",
    "SEO Agentur Saarlouis",
    "SEO Agentur Saarbrücken",
    "SEO Firma Saarland",
    "SEO Beratung Saarland",
    "Suchmaschinenoptimierung Saarland",
    "Local SEO Agentur",
    "Online Marketing Agentur Saarland",
    "SEO Betreuung",
    "SEO Optimierung Saarland",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "SEO Agentur Saarland · Suchmaschinenoptimierung aus Saarlouis | Fylu Marketing",
    description:
      "SEO Agentur aus Saarlouis: Foundation, Content, Local SEO und laufende Betreuung für Unternehmen im Saarland und deutschlandweit.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "SEO Agentur Saarland · Fylu Marketing aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agentur Saarland · Fylu Marketing",
    description:
      "Suchmaschinenoptimierung aus Saarlouis. Foundation, Content, Local SEO und laufende Betreuung.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "SEO Agentur Saarland",
  alternateName: [
    "SEO Agentur",
    "SEO Beratung Saarland",
    "Suchmaschinenoptimierung Saarland",
  ],
  serviceType: "Suchmaschinenoptimierung",
  description:
    "Fylu Marketing ist eine SEO Agentur aus Saarlouis. Technische Foundation, Content-Cluster, Local-Signale und laufende Betreuung. Auch für AI-Suchsysteme (GEO) vorbereitet.",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "SEO Agentur Saarland",
      item: URL,
    },
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
