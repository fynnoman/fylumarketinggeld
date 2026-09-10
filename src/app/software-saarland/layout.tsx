import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Saarland · Fylu Marketing · Custom Software & Web-Apps",
  description:
    "Software von Fylu Marketing: Web-Apps, ERP, CRM, API-Integration und Automatisierung. Aus Saarlouis. Rahmen nach Vorgespräch.",
  alternates: {
    canonical: "/software-saarland",
  },
  openGraph: {
    title: "Software Saarland · Fylu Marketing",
    description:
      "Custom Software und Web-Apps aus Saarlouis. Als Ergänzung Ihrer Fylu-Website oder als eigenständiges Vorhaben.",
    url: "https://www.fylumarketing.de/software-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Software Saarland · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Saarland · Fylu Marketing",
    description: "Custom Software von Fylu Marketing.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
