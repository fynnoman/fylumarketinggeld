import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO-Agentur Saarland | Auswahl, Zusammenarbeit, Erwartungen | Fylu Marketing",
  description:
    "Woran Sie eine seriöse SEO-Agentur im Saarland erkennen, wie eine ehrliche Zusammenarbeit aussieht und wie Fylu Marketing als Ansprechpartner arbeitet. Transparente Konditionen, kein Vertrieb aus der Hotline.",
  alternates: {
    canonical: "/seo-agentur-saarland",
  },
  openGraph: {
    title: "SEO-Agentur Saarland | Auswahl, Zusammenarbeit, Erwartungen | Fylu Marketing",
    description:
      "Kriterien für eine seriöse SEO-Agentur im Saarland, ehrliche Zusammenarbeit und transparente Konditionen. Aus Saarlouis.",
    url: "https://www.fylumarketing.de/seo-agentur-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "SEO-Agentur Saarland | Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-Agentur Saarland | Fylu Marketing",
    description: "Kriterien für eine seriöse SEO-Agentur und ehrliche Zusammenarbeit. Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
