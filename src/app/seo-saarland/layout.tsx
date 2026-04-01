import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Saarland | Bei Google auf Seite 1 | Fylu Saarlouis",
  description:
    "SEO-Optimierung im Saarland: Mehr Google-Sichtbarkeit für lokale Unternehmen. OnPage, Local SEO & Google Business. Jetzt kostenlos beraten lassen.",
  keywords:
    "SEO Saarland, Suchmaschinenoptimierung Saarland, SEO Saarbrücken, SEO Saarlouis, Local SEO, Google Optimierung Saarland",
  alternates: {
    canonical: "/seo-saarland",
  },
  openGraph: {
    title: "SEO Saarland | Bei Google auf Seite 1 | Fylu Saarlouis",
    description:
      "SEO-Optimierung im Saarland: Mehr Google-Sichtbarkeit für lokale Unternehmen. OnPage, Local SEO & Google Business.",
    url: "https://www.fylumarketing.de/seo-saarland",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
