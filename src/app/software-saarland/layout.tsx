import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Saarland ▷ Softwareentwicklung & IT-Dienstleister | Fylu",
  description:
    "Softwareentwicklung Saarland: Web-Apps, Custom-Software, ERP- & CRM-Lösungen, API-Integration und Automatisierung. Persönlich aus Saarlouis — für das Saarland und deutschlandweit.",
  alternates: {
    canonical: "/software-saarland",
  },
  openGraph: {
    title: "Software Saarland | Softwareentwicklung & IT-Dienstleister | Fylu",
    description:
      "Software aus dem Saarland: Web-Apps, ERP, CRM, API-Integration. Persönlich, modern, messbar. Aus Saarlouis für das gesamte Saarland.",
    url: "https://www.fylumarketing.de/software-saarland",
    siteName: "Fylu Webdesign & Software",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Software Saarland – Fylu aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Saarland | Softwareentwicklung aus Saarlouis | Fylu",
    description: "Web-Apps, ERP, CRM, API-Integration aus dem Saarland. Persönlich & modern.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
