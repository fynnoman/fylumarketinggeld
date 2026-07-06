import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Saarland · Fylu Studio · Erweiterung Ihrer Website | ab 890 €",
  description:
    "SEO als Erweiterung Ihrer Fylu-Website. SEO Foundation ab 890 €, Google Business ab 290 €, SEO Betreuung ab 490 € / Monat — kuratiert aus einem Boutique-Studio in Saarlouis.",
  alternates: {
    canonical: "/seo-saarland",
  },
  openGraph: {
    title: "SEO Saarland · Editorial Studio | Fylu",
    description:
      "SEO Foundation ab 890 €. Als Erweiterung Ihrer Fylu-Website — geführt aus einem Boutique-Studio in Saarlouis.",
    url: "https://www.fylumarketing.de/seo-saarland",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "SEO Saarland – Fylu Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Saarland · Editorial Studio | Fylu",
    description: "SEO als Erweiterung Ihrer Website — ab 890 €.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
