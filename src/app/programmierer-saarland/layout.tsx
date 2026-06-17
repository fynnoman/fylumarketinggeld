import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmierer Saarland ▷ Webentwickler & Software-Entwickler | Fylu",
  description:
    "Programmierer aus dem Saarland: Webentwickler, Software-Entwickler, Freelance-Programmierer für individuelle Projekte. Modern, persönlich, mit transparenten Konditionen statt Stundensatz.",
  alternates: {
    canonical: "/programmierer-saarland",
  },
  openGraph: {
    title: "Programmierer Saarland | Webentwickler & Software-Entwickler | Fylu",
    description:
      "Erfahrener Programmierer aus Saarlouis: Webentwicklung, Software-Entwicklung, Full-Stack. Projekte zu transparenten Konditionen für Unternehmen im Saarland.",
    url: "https://www.fylumarketing.de/programmierer-saarland",
    siteName: "Fylu Webdesign & Software",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Programmierer Saarland – Fylu aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmierer Saarland | Fylu aus Saarlouis",
    description: "Webentwickler & Software-Entwickler aus dem Saarland. Transparente Konditionen statt Stundensatz.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
