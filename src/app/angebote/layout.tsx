import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Angebote & Preise ▷ Festpreise ab 990€ ✓ Saarland | Fylu",
  description:
    "Webdesign-Pakete ab 990€ Festpreis: Basis (990€), Business (1.490€), Premium (2.490€). SEO, Google Business & Hosting inklusive. Kostenloser Entwurf in 24h. Für Unternehmen im Saarland.",
  keywords: [
    "Webdesign Angebote",
    "Website erstellen lassen Saarland",
    "Webdesign Preise",
    "Webdesign Festpreis",
    "Homepage Kosten",
    "Webdesign Pakete",
    "SEO Website Saarland",
    "Webdesign Preisliste",
  ],
  alternates: {
    canonical: "/angebote",
  },
  openGraph: {
    title: "Webdesign Angebote & Preise ab 990€ | Fylu Saarland",
    description: "Webdesign-Pakete ab 990€ Festpreis – transparent, fair und schnell. Aus dem Saarland.",
    url: "https://www.fylumarketing.de/angebote",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
  },
};

export default function AngeboteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
