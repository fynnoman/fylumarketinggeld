import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Saarland · Fylu Studio · Setup ab 690 € | Betreuung ab 390 €/Monat",
  description:
    "Google Ads als Erweiterung Ihrer Fylu-Website. Setup ab 690 €, Betreuung ab 390 € pro Monat — kuratiert aus einem Boutique-Studio in Saarlouis.",
  alternates: {
    canonical: "/google-ads-saarland",
  },
  openGraph: {
    title: "Google Ads Saarland · Editorial Studio | Fylu",
    description:
      "Google Ads Setup ab 690 €, Betreuung ab 390 € / Monat. Erweiterung Ihrer Fylu-Website.",
    url: "https://www.fylumarketing.de/google-ads-saarland",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Google Ads Saarland – Fylu Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Saarland · Editorial Studio | Fylu",
    description: "Setup ab 690 €, Betreuung ab 390 € / Monat.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
