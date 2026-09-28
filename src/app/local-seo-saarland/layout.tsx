import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/local-seo-saarland`;

export const metadata: Metadata = {
  title:
    "Local SEO Saarland · Google-Unternehmensprofil, NAP, Reviews | Fylu Marketing",
  description:
    "Local SEO aus Saarlouis: Google-Unternehmensprofil optimieren lassen, NAP-Konsistenz, Reviews, lokale Backlinks und Karten-Sichtbarkeit für Unternehmen im Saarland.",
  keywords: [
    "Local SEO Saarland",
    "Local SEO Agentur",
    "Google Unternehmensprofil optimieren lassen",
    "Google My Business optimieren Saarland",
    "GBP Optimierung Saarland",
    "NAP Konsistenz",
    "lokale Sichtbarkeit Google Maps",
    "Local SEO Saarlouis",
    "Local SEO Saarbrücken",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Local SEO Saarland · Google-Unternehmensprofil, NAP, Reviews | Fylu Marketing",
    description:
      "Google-Unternehmensprofil, NAP-Konsistenz, Reviews, lokale Backlinks und Karten-Sichtbarkeit aus Saarlouis.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Local SEO Saarland · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Saarland · Fylu Marketing",
    description:
      "Google-Unternehmensprofil optimieren lassen, NAP-Konsistenz, Reviews und lokale Signale.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Local SEO Saarland",
  alternateName: [
    "Local SEO Agentur Saarland",
    "Google Unternehmensprofil optimieren lassen",
    "GBP Optimierung Saarland",
  ],
  serviceType: "Local SEO",
  description:
    "Google-Unternehmensprofil, NAP-Konsistenz, Reviews, lokale Backlinks und Karten-Sichtbarkeit für Unternehmen im Saarland.",
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
    { "@type": "ListItem", position: 2, name: "Local SEO Saarland", item: URL },
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
