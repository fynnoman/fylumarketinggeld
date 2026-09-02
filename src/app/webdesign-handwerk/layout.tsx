import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Handwerk ▷ Websites für Handwerker ✓ Mehr Aufträge | Fylu",
  description:
    "Webdesign für Handwerker ★ Speziell für Maler, Elektriker, Dachdecker, SHK, Schreiner. Mobiloptimiert, bei Google sichtbar, transparente Konditionen. Kostenloser Entwurf in 24h.",
  alternates: {
    canonical: "/webdesign-handwerk",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  openGraph: {
    title: "Webdesign für Handwerker | Website die Aufträge bringt | Fylu",
    description:
      "Webdesign speziell für Handwerksbetriebe: modern, mobiloptimiert & bei Google sichtbar..",
    url: "https://www.fylumarketing.de/webdesign-handwerk",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Webdesign für Handwerker – Fylu Marketing aus dem Saarland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Handwerk | Mehr Aufträge | Fylu",
    description: "Webdesign speziell für Handwerksbetriebe – mobiloptimiert, lokal SEO-optimiert.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
