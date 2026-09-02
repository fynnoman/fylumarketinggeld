import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website erstellen lassen ▷ Transparente Konditionen ✓ in 2-3 Wochen fertig | Fylu",
  description:
    "Website erstellen lassen ★ Professionell, mobiloptimiert & SEO-ready aus dem Saarland. Transparente Konditionen, fertig in 2-3 Wochen, kostenloser Entwurf in 24h. Jetzt anfragen.",
  alternates: {
    canonical: "/website-erstellen-lassen",
  },
  openGraph: {
    title: "Website erstellen lassen | Professionell | Fylu",
    description:
      "Website erstellen lassen: professionell, mobiloptimiert & SEO-ready., fertig in 2-3 Wochen.",
    url: "https://www.fylumarketing.de/website-erstellen-lassen",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Website erstellen lassen – Transparente Konditionen mit Fylu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website erstellen lassen | Professionell | Fylu",
    description: "Website erstellen lassen: professionell, mobiloptimiert & SEO-ready.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
