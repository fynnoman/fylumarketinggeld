import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Saarland · Editorial Studio · Signature / Atelier / Maison | Fylu",
  description:
    "Editorial Webdesign aus Saarlouis. Zwölf Klienten pro Jahr. Signature, Atelier und Maison — für Häuser im Saarland und international, die einen Auftritt mit Substanz wollen.",
  alternates: {
    canonical: "/webdesign-saarland",
  },
  openGraph: {
    title: "Webdesign Saarland · Editorial Studio | Fylu",
    description:
      "Ein Boutique-Studio aus Saarlouis. Editorial gestaltete Websites — Signature, Atelier, Maison. Zwölf Klienten pro Jahr.",
    url: "https://www.fylumarketing.de/webdesign-saarland",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Fylu Studio – Editorial Webdesign aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Saarland · Editorial Studio | Fylu",
    description:
      "Editorial gestaltete Websites aus Saarlouis. Zwölf Klienten pro Jahr.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
