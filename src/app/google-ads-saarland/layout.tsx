import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Saarland · Fylu Marketing · Setup und Betreuung",
  description:
    "Google Ads als Erweiterung Ihrer Fylu-Website. Setup und laufende Betreuung — kuratiert aus einem Boutique-Studio in Saarlouis.",
  alternates: {
    canonical: "/google-ads-saarland",
  },
  openGraph: {
    title: "Google Ads Saarland · Editorial Studio | Fylu",
    description:
      "Google Ads Setup und laufende Betreuung. Erweiterung Ihrer Fylu-Website.",
    url: "https://www.fylumarketing.de/google-ads-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Google Ads Saarland – Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Saarland · Editorial Studio | Fylu",
    description: "Setup und laufende Betreuung — aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
