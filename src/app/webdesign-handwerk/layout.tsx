import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Handwerk ▷ Websites für Handwerker ab 990€ ✓ Mehr Aufträge | Fylu",
  description:
    "Webdesign für Handwerker ★ Speziell für Maler, Elektriker, Dachdecker, SHK, Schreiner. Mobiloptimiert, bei Google sichtbar, ab 990€ Festpreis. Kostenloser Entwurf in 24h.",
  keywords: [
    "Webdesign Handwerk",
    "Handwerker Website",
    "Website Handwerksbetrieb",
    "Webdesign Elektriker",
    "Webdesign Maler",
    "Webdesign SHK",
    "Webdesign Dachdecker",
    "Webdesign Schreiner",
    "Handwerker Webseite Saarland",
    "Website Handwerker Saarbrücken",
  ],
  alternates: {
    canonical: "/webdesign-handwerk",
  },
  openGraph: {
    title: "Webdesign für Handwerker | Website die Aufträge bringt | Fylu",
    description:
      "Webdesign speziell für Handwerksbetriebe: modern, mobiloptimiert & bei Google sichtbar. Ab 990€.",
    url: "https://www.fylumarketing.de/webdesign-handwerk",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Webdesign für Handwerker – Fylu Marketing aus dem Saarland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Handwerk | Mehr Aufträge ab 990€ | Fylu",
    description: "Webdesign speziell für Handwerksbetriebe – mobiloptimiert, lokal SEO-optimiert.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
