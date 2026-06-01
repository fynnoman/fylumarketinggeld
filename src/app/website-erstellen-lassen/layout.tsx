import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website erstellen lassen ▷ Festpreis ab 990€ ✓ in 2-3 Wochen fertig | Fylu",
  description:
    "Website erstellen lassen ★ Professionell, mobiloptimiert & SEO-ready aus dem Saarland. Festpreis ab 990€, fertig in 2-3 Wochen, kostenloser Entwurf in 24h. Jetzt anfragen.",
  keywords: [
    "Website erstellen lassen",
    "Homepage erstellen lassen",
    "professionelle Website",
    "Website Kosten",
    "Website erstellen lassen Preis",
    "Website erstellen lassen Saarland",
    "Webdesigner Saarland",
    "Website Festpreis",
    "Homepage erstellen Saarland",
  ],
  alternates: {
    canonical: "/website-erstellen-lassen",
  },
  openGraph: {
    title: "Website erstellen lassen | Professionell ab 990€ | Fylu",
    description:
      "Website erstellen lassen: professionell, mobiloptimiert & SEO-ready. Ab 990€, fertig in 2-3 Wochen.",
    url: "https://www.fylumarketing.de/website-erstellen-lassen",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Website erstellen lassen – Festpreis ab 990€ mit Fylu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website erstellen lassen | Professionell ab 990€ | Fylu",
    description: "Website erstellen lassen: professionell, mobiloptimiert & SEO-ready ab 990€.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
