import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding-Agentur Saarland | Marke, Corporate Design, Naming | Fylu Marketing",
  description:
    "Branding-Agentur aus Saarlouis: Positionierung, Naming, Logo, Corporate Design und Markenanwendung aus einer Hand. Für Unternehmen im Saarland und deutschlandweit.",
  alternates: {
    canonical: "/branding-agentur-saarland",
  },
  openGraph: {
    title: "Branding-Agentur Saarland | Fylu Marketing",
    description:
      "Positionierung, Naming, Logo, Corporate Design und Markenanwendung aus einer Hand. Aus Saarlouis.",
    url: "https://www.fylumarketing.de/branding-agentur-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Branding-Agentur Saarland | Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding-Agentur Saarland | Fylu Marketing",
    description: "Positionierung, Naming, Logo, Corporate Design. Aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
