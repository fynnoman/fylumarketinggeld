import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Saarland ▷ Bei Google auf Platz 1 ✓ Local SEO & Google Business | Fylu",
  description:
    "SEO Saarland ★ Suchmaschinenoptimierung für Saarbrücken, Saarlouis, Neunkirchen, Dillingen & Co. OnPage, Local SEO, Google Business. Kostenlose Erstanalyse — Konditionen auf Anfrage.",
  keywords: [
    "SEO Saarland",
    "Suchmaschinenoptimierung Saarland",
    "SEO Saarbrücken",
    "SEO Saarlouis",
    "SEO Neunkirchen",
    "SEO Homburg",
    "Local SEO Saarland",
    "Google Business Saarland",
    "SEO Agentur Saarland",
    "SEO Optimierung Saarland",
  ],
  alternates: {
    canonical: "/seo-saarland",
  },
  openGraph: {
    title: "SEO Saarland | Bei Google auf Seite 1 | Fylu Saarlouis",
    description:
      "SEO-Optimierung im Saarland: Mehr Google-Sichtbarkeit für lokale Unternehmen. OnPage, Local SEO & Google Business.",
    url: "https://www.fylumarketing.de/seo-saarland",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "SEO Saarland – Bei Google auf Platz 1 mit Fylu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Saarland | Bei Google auf Seite 1 | Fylu Saarlouis",
    description: "SEO-Optimierung im Saarland: Mehr Google-Sichtbarkeit für lokale Unternehmen.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
