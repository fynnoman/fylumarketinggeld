import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekt anfragen | Kostenloses Erstgespräch | Fylu Marketing",
  description:
    "Starten Sie Ihr Projekt mit Fylu Marketing. Marke, Website, SEO, GEO und Google Ads für Unternehmen im Saarland und deutschlandweit. Persönliches Erstgespräch, unverbindlich.",
  alternates: {
    canonical: "/buchen",
  },
};

export default function BuchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
