import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Saarland ▷ Sofort mehr Anfragen ✓ ab 250€/Monat | Fylu",
  description:
    "Google Ads Saarland ★ Professionelle Kampagnen für Saarbrücken, Saarlouis, Neunkirchen & Co. Sofort sichtbar ab Tag 1. Setup ab 490€, Management ab 250€/Monat. Kostenlose Analyse.",
  keywords: [
    "Google Ads Saarland",
    "Google Werbung Saarland",
    "Google Ads Saarbrücken",
    "Google Ads Saarlouis",
    "Google Ads Agentur Saarland",
    "SEA Saarland",
    "Suchmaschinenwerbung Saarland",
    "Google Anzeigen Saarland",
  ],
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
