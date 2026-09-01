import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Saarland · Fylu Studio · Custom Software & Web-Apps | Editorial",
  description:
    "Software als Erweiterung des Fylu-Studios: Web-Apps, ERP, CRM, API-Integration und Automatisierung. Editorial gearbeitet aus Saarlouis. Rahmen nach Vorgespräch.",
  alternates: {
    canonical: "/software-saarland",
  },
  openGraph: {
    title: "Software Saarland · Fylu Studio | Editorial",
    description:
      "Custom Software und Web-Apps aus Saarlouis. Als Erweiterung des Fylu-Studios oder als eigenständiges Vorhaben.",
    url: "https://www.fylumarketing.de/software-saarland",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Software Saarland – Fylu Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Saarland · Fylu Studio",
    description: "Custom Software als Erweiterung des Fylu-Studios.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
