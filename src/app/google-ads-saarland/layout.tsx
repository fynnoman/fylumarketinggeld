import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Saarland | Mehr Anfragen ab Tag 1 | Fylu",
  description:
    "Google Ads im Saarland: Sofort sichtbar bei Google. Professionelle Kampagnen für lokale Unternehmen. Transparente Kosten, messbare Ergebnisse.",
  keywords:
    "Google Ads Saarland, Google Werbung Saarland, Google Ads Saarbrücken, Google Ads Agentur, SEA Saarland",
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
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
