import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/webdesign-saarland`;

export const metadata: Metadata = {
  title:
    "Webdesign Saarland · Webdesigner aus Saarlouis für Unternehmen | Fylu Marketing",
  description:
    "Webdesign Saarland vom Webdesigner aus Saarlouis. Websites für Unternehmen in Saarbrücken, Saarlouis, Merzig, Neunkirchen, Homburg und dem gesamten Saarland. Sachlich, effizient, conversion-orientiert.",
  keywords: [
    "Webdesign Saarland",
    "Webdesigner Saarland",
    "Webdesign Saarlouis",
    "Webdesigner Saarlouis",
    "Webdesign Saarbrücken",
    "Webdesigner Saarbrücken",
    "Webdesign Merzig",
    "Webdesign Neunkirchen",
    "Webdesign Homburg",
    "Webdesign Völklingen",
    "Webdesign Dillingen",
    "Webdesign Agentur Saarland",
    "Webdesign Firma Saarland",
    "Website erstellen lassen Saarland",
    "Homepage erstellen lassen Saarland",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Webdesign Saarland · Webdesigner aus Saarlouis für Unternehmen | Fylu Marketing",
    description:
      "Webdesign Saarland vom Webdesigner aus Saarlouis. Für Unternehmen in Saarbrücken, Saarlouis, Merzig, Neunkirchen, Homburg und dem gesamten Saarland.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Webdesign Saarland · Fylu Marketing aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Saarland · Fylu Marketing",
    description:
      "Webdesigner aus Saarlouis für Unternehmen im gesamten Saarland.",
    images: ["/herob.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Webdesign Saarland",
  alternateName: [
    "Webdesigner Saarland",
    "Webdesign Saarlouis",
    "Webdesign Saarbrücken",
    "Webdesign Agentur Saarland",
  ],
  serviceType: "Webdesign",
  description:
    "Individuelles Webdesign aus Saarlouis für Unternehmen im gesamten Saarland: Saarbrücken, Saarlouis, Merzig, Neunkirchen, Homburg, Völklingen, Dillingen und Umgebung.",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: [
    { "@type": "State", name: "Saarland" },
    { "@type": "City", name: "Saarbrücken" },
    { "@type": "City", name: "Saarlouis" },
    { "@type": "City", name: "Merzig" },
    { "@type": "City", name: "Neunkirchen" },
    { "@type": "City", name: "Homburg" },
    { "@type": "City", name: "Völklingen" },
    { "@type": "City", name: "Dillingen" },
    { "@type": "Country", name: "Deutschland" },
  ],
  url: URL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
    { "@type": "ListItem", position: 2, name: "Webdesign Saarland", item: URL },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
