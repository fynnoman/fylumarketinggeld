import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketingagentur Saarland | Marke, Website, Sichtbarkeit, Wachstum | Fylu Marketing",
  description:
    "Marketingagentur aus Saarlouis: Marke, Website, SEO, GEO und Google Ads aus einer Hand. Für Unternehmen im Saarland und deutschlandweit, mit einem festen Ansprechpartner.",
  alternates: {
    canonical: "/marketingagentur-saarland",
  },
  openGraph: {
    title: "Marketingagentur Saarland | Fylu Marketing",
    description:
      "Marke, Website, SEO, GEO und Google Ads aus einer Hand. Fylu Marketing aus Saarlouis.",
    url: "https://www.fylumarketing.de/marketingagentur-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Marketingagentur Saarland | Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketingagentur Saarland | Fylu Marketing",
    description: "Marke, Website, SEO, GEO und Google Ads aus einer Hand.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
