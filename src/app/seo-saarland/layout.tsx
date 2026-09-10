import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Saarland · Fylu Marketing",
  description:
    "SEO aus Saarlouis: Foundation, Google Business und laufende Betreuung. Fylu Marketing hilft Unternehmen jeder Phase, ihre Online-Präsenz aufzubauen und zu skalieren.",
  alternates: {
    canonical: "/seo-saarland",
  },
  openGraph: {
    title: "SEO Saarland · Fylu Marketing",
    description:
      "SEO aus Saarlouis. Fylu Marketing hilft Unternehmen jeder Phase, ihre Online-Präsenz aufzubauen und zu skalieren.",
    url: "https://www.fylumarketing.de/seo-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "SEO Saarland Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Saarland · Fylu Marketing",
    description: "SEO aus Saarlouis. Foundation, Google Business und laufende Betreuung.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
