import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Saarland ▷ Sofort mehr Anfragen | Fylu",
  description:
    "Google Ads Saarland ★ Professionelle Kampagnen für Saarbrücken, Saarlouis, Neunkirchen & Co. Sofort sichtbar ab Tag 1. Kostenlose Analyse — Konditionen auf Anfrage.",
  alternates: {
    canonical: "/google-ads-saarland",
  },
  openGraph: {
    title: "Google Ads Saarland | Mehr Anfragen ab Tag 1 | Fylu",
    description:
      "Google Ads im Saarland: Sofort sichtbar bei Google. Professionelle Kampagnen für lokale Unternehmen.",
    url: "https://www.fylumarketing.de/google-ads-saarland",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Google Ads Saarland – sofort sichtbar bei Google mit Fylu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Saarland | Mehr Anfragen ab Tag 1 | Fylu",
    description: "Google Ads im Saarland: Sofort sichtbar bei Google. Transparente Kosten.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
