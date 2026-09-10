import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Saarland · Websites, die aus Besuchern Kunden machen | Fylu Marketing",
  description:
    "Webdesign aus Saarlouis für Unternehmen jeder Phase. Vom ersten Auftritt bis zur Skalierung. Sachlich, effizient, conversion-orientiert.",
  alternates: {
    canonical: "/webdesign-saarland",
  },
  openGraph: {
    title: "Webdesign Saarland | Fylu Marketing",
    description:
      "Wir bauen Websites, die aus Besuchern Kunden machen. Für Unternehmen jeder Phase im Saarland und deutschlandweit.",
    url: "https://www.fylumarketing.de/webdesign-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Fylu Marketing · Webdesign aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Saarland | Fylu Marketing",
    description:
      "Websites, die aus Besuchern Kunden machen. Für Unternehmen jeder Phase.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
