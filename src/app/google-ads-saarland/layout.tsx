import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Saarland · Fylu Marketing · Setup und Betreuung",
  description:
    "Google Ads aus Saarlouis: Setup und laufende Betreuung. Fylu Marketing hilft Unternehmen jeder Phase, ihre Online-Präsenz aufzubauen und zu skalieren.",
  alternates: {
    canonical: "/google-ads-saarland",
  },
  openGraph: {
    title: "Google Ads Saarland · Fylu Marketing",
    description:
      "Google Ads Setup und laufende Betreuung aus Saarlouis.",
    url: "https://www.fylumarketing.de/google-ads-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Google Ads Saarland Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Saarland · Fylu Marketing",
    description: "Setup und laufende Betreuung aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
