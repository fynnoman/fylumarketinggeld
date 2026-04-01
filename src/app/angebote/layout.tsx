import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Angebote | Website erstellen lassen | Fylu Saarland",
  description:
    "Webdesign-Pakete für Unternehmen im Saarland. Von der einfachen Homepage bis zur SEO-optimierten Business-Website. Jetzt kostenlosen Entwurf anfordern.",
  keywords:
    "Webdesign Angebote, Website erstellen lassen Saarland, Webdesign Preise, Homepage Kosten, Webdesign Pakete, SEO Website Saarland",
  alternates: {
    canonical: "/angebote",
  },
};

export default function AngeboteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
