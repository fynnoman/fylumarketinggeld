import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/geo-saarland`;

export const metadata: Metadata = {
  title:
    "GEO Saarland · Sichtbarkeit in ChatGPT, Perplexity und AI Overviews | Fylu Marketing",
  description:
    "GEO aus Saarlouis für Unternehmen im Saarland: Generative Engine Optimization für ChatGPT Search, Perplexity, Google AI Overviews und Copilot.",
  keywords: [
    "GEO Saarland",
    "GEO Agentur Saarland",
    "Generative Engine Optimization Saarland",
    "AI SEO Saarland",
    "LLMO Saarland",
    "ChatGPT Sichtbarkeit Saarland",
    "AI Overviews Saarland",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "GEO Saarland · Sichtbarkeit in ChatGPT, Perplexity und AI Overviews | Fylu Marketing",
    description:
      "Generative Engine Optimization aus Saarlouis: Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Copilot.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "GEO Saarland · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Saarland · Fylu Marketing",
    description:
      "GEO für ChatGPT, Perplexity und Google AI Overviews aus Saarlouis.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "GEO Saarland",
  serviceType: "Generative Engine Optimization",
  description:
    "Fylu Marketing bietet GEO aus Saarlouis für Unternehmen im Saarland: Sichtbarkeit in ChatGPT Search, Perplexity, Google AI Overviews und Copilot.",
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
    { "@type": "ListItem", position: 2, name: "GEO Saarland", item: URL },
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
