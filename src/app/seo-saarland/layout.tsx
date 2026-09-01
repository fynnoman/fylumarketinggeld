import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Saarland · Fylu Studio · Erweiterung Ihrer Website",
  description:
    "SEO als Erweiterung Ihrer Fylu-Website. SEO Foundation, Google Business und SEO Betreuung — kuratiert aus einem Boutique-Studio in Saarlouis.",
  alternates: {
    canonical: "/seo-saarland",
  },
  openGraph: {
    title: "SEO Saarland · Editorial Studio | Fylu",
    description:
      "SEO als Erweiterung Ihrer Fylu-Website — geführt aus einem Boutique-Studio in Saarlouis.",
    url: "https://www.fylumarketing.de/seo-saarland",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "SEO Saarland – Fylu Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Saarland · Editorial Studio | Fylu",
    description: "SEO als Erweiterung Ihrer Fylu-Website — aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
