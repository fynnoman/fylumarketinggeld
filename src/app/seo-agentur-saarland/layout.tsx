import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO-Agentur Saarland | Fylu Studio",
  description:
    "SEO-Agentur aus dem Saarland: Foundation, Content-Aufbau, Local SEO und laufende Betreuung. Für etablierte Unternehmen mit klarem Business-Case.",
  alternates: {
    canonical: "/seo-agentur-saarland",
  },
  openGraph: {
    title: "SEO-Agentur Saarland — Fylu Studio",
    description:
      "SEO-Foundation, Content-Aufbau, Local SEO und laufende Betreuung aus Saarlouis. Transparente Konditionen, ehrliche Erwartungshaltung.",
    url: "https://www.fylumarketing.de/seo-agentur-saarland",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "SEO-Agentur Saarland — Fylu Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-Agentur Saarland | Fylu Studio",
    description: "SEO aus Saarlouis: Foundation, Content-Aufbau, Local SEO, laufende Betreuung.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
