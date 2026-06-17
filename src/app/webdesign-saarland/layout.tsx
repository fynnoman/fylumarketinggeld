import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Saarland ▷ Websites ✓ kostenloser Entwurf in 24h | Fylu",
  description:
    "Webdesign Saarland ★ Professionelle Websites für Saarbrücken, Saarlouis, Neunkirchen, Dillingen & Co. Transparente Konditionen, persönlich, SEO-optimiert, kostenloser Entwurf in 24 Stunden. Jetzt anfragen.",
  alternates: {
    canonical: "/webdesign-saarland",
  },
  openGraph: {
    title: "Webdesign Saarland | Professionelle Websites | Fylu",
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
    title: "Webdesign Saarland | Professionelle Websites | Fylu",
    description: "Webdesign aus dem Saarland: Moderne Websites. Kostenloser Entwurf in 24h.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
