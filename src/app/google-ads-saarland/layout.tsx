import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/google-ads-saarland`;

export const metadata: Metadata = {
  title:
    "Google Ads Agentur Saarland · Setup & Betreuung aus Saarlouis | Fylu Marketing",
  description:
    "Google Ads Agentur aus Saarlouis: Kampagnen-Setup, Conversion-Tracking, laufende Betreuung und Landingpage-Optimierung. Für qualifizierte Anfragen statt bloße Klicks. Saarland und deutschlandweit.",
  keywords: [
    "Google Ads Agentur",
    "Google Ads Agentur Saarland",
    "Google Ads Betreuung",
    "Google Ads Saarland",
    "Google Ads Setup",
    "Google Ads Saarlouis",
    "Google Ads Saarbrücken",
    "Ads Betreuung Saarland",
    "SEA Agentur Saarland",
    "Landingpage erstellen lassen",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Google Ads Agentur Saarland · Setup & Betreuung aus Saarlouis | Fylu Marketing",
    description:
      "Kampagnen-Setup, Conversion-Tracking, laufende Betreuung und Landingpage-Optimierung. Google Ads aus Saarlouis für qualifizierte Anfragen.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Google Ads Agentur Saarland · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Agentur Saarland · Fylu Marketing",
    description:
      "Setup, Conversion-Tracking und laufende Betreuung aus Saarlouis.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Google Ads Agentur Saarland",
  alternateName: [
    "Google Ads Betreuung",
    "Google Ads Setup",
    "SEA Agentur Saarland",
  ],
  serviceType: "Google Ads",
  description:
    "Kampagnen-Setup, laufende Betreuung, Conversion-Tracking und Landingpage-Optimierung. Fokus auf qualifizierte Anfragen statt bloße Klicks.",
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
      name: "Google Ads Agentur Saarland",
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
