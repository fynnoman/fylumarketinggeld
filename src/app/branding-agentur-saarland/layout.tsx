import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/branding-agentur-saarland`;

export const metadata: Metadata = {
  title:
    "Branding Agentur Saarland · Corporate Design, Logo erstellen lassen | Fylu Marketing",
  description:
    "Branding Agentur aus Saarlouis: Positionierung, Naming, Logo erstellen lassen, Corporate Design und Markenanwendung aus einer Hand. Für Unternehmen im Saarland und deutschlandweit.",
  keywords: [
    "Branding Agentur",
    "Branding Agentur Saarland",
    "Corporate Design Agentur",
    "Corporate Design Saarland",
    "Logo erstellen lassen",
    "Logo Design Saarland",
    "Markenaufbau",
    "Marke erstellen lassen",
    "Naming Agentur",
    "Positionierung Agentur",
    "CI CD Saarland",
    "Corporate Identity Agentur",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Branding Agentur Saarland · Corporate Design, Logo erstellen lassen | Fylu Marketing",
    description:
      "Positionierung, Naming, Logo erstellen lassen, Corporate Design und Markenanwendung aus einer Hand. Aus Saarlouis.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Branding Agentur Saarland · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Agentur Saarland · Fylu Marketing",
    description:
      "Positionierung, Naming, Logo erstellen lassen und Corporate Design aus Saarlouis.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Branding Agentur Saarland",
  alternateName: [
    "Corporate Design Agentur",
    "Logo erstellen lassen",
    "Markenaufbau Agentur",
  ],
  serviceType: "Branding & Corporate Design",
  description:
    "Positionierung, Naming, Logo, Corporate Design und Markenanwendung. Aus Saarlouis für Unternehmen im Saarland und deutschlandweit.",
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
      name: "Branding Agentur Saarland",
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
