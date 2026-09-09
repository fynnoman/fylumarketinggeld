import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Saarland · Fylu Marketing · Sichtbarkeit in KI-Suchsystemen",
  description:
    "Generative Engine Optimization für ChatGPT Search, Perplexity, Google AI Overviews und Copilot. Editorial-Studio aus Saarlouis.",
  alternates: {
    canonical: "/geo-saarland",
  },
  openGraph: {
    title: "GEO Saarland · Editorial Studio | Fylu",
    description:
      "Generative Engine Optimization: Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Copilot. Kuratiert aus Saarlouis.",
    url: "https://www.fylumarketing.de/geo-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "GEO Saarland – Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Saarland · Editorial Studio | Fylu",
    description: "GEO für ChatGPT, Perplexity und Google AI Overviews — aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
