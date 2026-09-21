import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Agentur | Generative Engine Optimization | Fylu Marketing",
  description:
    "Generative Engine Optimization: Sichtbarkeit in ChatGPT Search, Perplexity, Google AI Overviews und Copilot. Fylu Marketing arbeitet GEO als eigenständige Disziplin, ergänzend zu SEO.",
  alternates: {
    canonical: "/geo",
  },
  openGraph: {
    title: "GEO Agentur | Generative Engine Optimization | Fylu Marketing",
    description:
      "Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Copilot. GEO als eigenständige Disziplin.",
    url: "https://www.fylumarketing.de/geo",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "GEO Agentur | Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Agentur | Fylu Marketing",
    description: "Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
