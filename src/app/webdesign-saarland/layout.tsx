import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Saarland ▷ Websites ab 990€ ✓ kostenloser Entwurf in 24h | Fylu",
  description:
    "Webdesign Saarland ★ Professionelle Websites für Saarbrücken, Saarlouis, Neunkirchen, Homburg & Co. ab 990€ Festpreis. Persönlich, SEO-optimiert, kostenloser Entwurf in 24 Stunden. Jetzt anfragen.",
  keywords: [
    "Webdesign Saarland",
    "Webdesigner Saarland",
    "Webdesign Agentur Saarland",
    "Webdesign Saarbrücken",
    "Webdesign Saarlouis",
    "Webdesign Neunkirchen",
    "Webdesign Homburg",
    "Webdesigner Saarbrücken",
    "Webdesigner Saarlouis",
    "Website Saarland",
    "Homepage Saarland",
  ],
  alternates: {
    canonical: "/webdesign-saarland",
  },
  openGraph: {
    title: "Webdesign Saarland | Professionelle Websites ab 990€ | Fylu",
    description:
      "Webdesign aus dem Saarland: Moderne Websites für lokale Unternehmen. Persönlich, fair & SEO-optimiert. Kostenloser Entwurf in 24h.",
    url: "https://www.fylumarketing.de/webdesign-saarland",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Webdesign Saarland – Fylu Marketing aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Saarland | Professionelle Websites ab 990€ | Fylu",
    description: "Webdesign aus dem Saarland: Moderne Websites ab 990€. Kostenloser Entwurf in 24h.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
