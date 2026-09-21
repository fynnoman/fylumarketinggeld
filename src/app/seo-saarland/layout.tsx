import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Saarland | Suchmaschinenoptimierung für Unternehmen | Fylu Marketing",
  description:
    "Suchmaschinenoptimierung aus Saarlouis: technische Foundation, Content-Aufbau, Local-Signale und laufende Betreuung. Für Unternehmen jeder Phase.",
  alternates: {
    canonical: "/seo-saarland",
  },
  openGraph: {
    title: "SEO Saarland | Suchmaschinenoptimierung für Unternehmen | Fylu Marketing",
    description:
      "Foundation, Content, Local-Signale und laufende Betreuung. SEO-Leistung aus Saarlouis für Unternehmen jeder Phase.",
    url: "https://www.fylumarketing.de/seo-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "SEO Saarland Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Saarland | Fylu Marketing",
    description: "Foundation, Content, Local-Signale und laufende Betreuung aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
