import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/geo`;

export const metadata: Metadata = {
  title:
    "GEO Agentur · Generative Engine Optimization für ChatGPT, Perplexity und AI Overviews | Fylu Marketing",
  description:
    "GEO Agentur: Generative Engine Optimization für ChatGPT Search, Perplexity, Google AI Overviews und Copilot. Fylu Marketing arbeitet GEO und LLMO als eigenständige Disziplin, ergänzend zu SEO.",
  keywords: [
    "GEO Agentur",
    "Generative Engine Optimization",
    "GEO Optimierung",
    "LLMO Agentur",
    "LLM Optimization",
    "AI SEO",
    "AI Overviews Optimierung",
    "ChatGPT Suche Optimierung",
    "Perplexity Sichtbarkeit",
    "bei ChatGPT gefunden werden",
    "AI Search Optimization",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "GEO Agentur · Generative Engine Optimization für ChatGPT, Perplexity und AI Overviews | Fylu Marketing",
    description:
      "Sichtbarkeit in ChatGPT Search, Perplexity, Google AI Overviews und Copilot. GEO und LLMO als eigenständige Disziplin.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "GEO Agentur · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Agentur · Fylu Marketing",
    description:
      "Generative Engine Optimization für ChatGPT, Perplexity und Google AI Overviews.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "GEO Agentur · Generative Engine Optimization",
  alternateName: [
    "Generative Engine Optimization",
    "LLMO Agentur",
    "AI Search Optimization",
  ],
  serviceType: "Generative Engine Optimization",
  description:
    "Sichtbarkeit in AI-Suchsystemen wie ChatGPT Search, Perplexity, Google AI Overviews und Copilot. GEO und LLMO als eigenständige Disziplin, ergänzend zu SEO.",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: [{ "@type": "Country", name: "Deutschland" }],
  url: URL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
    { "@type": "ListItem", position: 2, name: "GEO Agentur", item: URL },
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
