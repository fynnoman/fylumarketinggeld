import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Saarland · Fylu Marketing · Google-Unternehmensprofil",
  description:
    "Google-Unternehmensprofil, NAP-Konsistenz, Reviews und lokale Signale aus Saarlouis. Fylu Marketing hilft Unternehmen jeder Phase, ihre Online-Präsenz aufzubauen und zu skalieren.",
  alternates: {
    canonical: "/local-seo-saarland",
  },
  openGraph: {
    title: "Local SEO Saarland · Fylu Marketing",
    description:
      "Google-Unternehmensprofil, Reviews, lokale Backlinks und NAP-Konsistenz aus Saarlouis.",
    url: "https://www.fylumarketing.de/local-seo-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Local SEO Saarland Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Saarland · Fylu Marketing",
    description: "Google-Unternehmensprofil und lokale Signale aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
