import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/landingpage-erstellen-lassen`;

export const metadata: Metadata = {
  title:
    "Landingpage erstellen lassen · Conversion-Landingpages | Fylu Marketing",
  description:
    "Landingpage erstellen lassen aus Saarlouis: fokussierte Conversion-Seiten für Google Ads, Meta Ads und Kampagnen. Klare Struktur, saubere Messung, planbarer Aufbau.",
  keywords: [
    "Landingpage erstellen lassen",
    "Landingpage erstellen",
    "Landingpage Agentur",
    "Landingpage bauen lassen",
    "Landing Page erstellen lassen",
    "Conversion Landingpage",
    "Landingpage für Google Ads",
    "Landingpage für Meta Ads",
    "Landingpage optimieren lassen",
    "Landingpage Saarland",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Landingpage erstellen lassen · Conversion-Landingpages | Fylu Marketing",
    description:
      "Fokussierte Conversion-Landingpages für Google Ads, Meta Ads und Kampagnen. Aus Saarlouis.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Landingpage erstellen lassen · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landingpage erstellen lassen · Fylu Marketing",
    description:
      "Conversion-Landingpages für Google Ads, Meta Ads und Kampagnen.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
