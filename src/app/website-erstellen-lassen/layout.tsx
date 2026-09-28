import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/website-erstellen-lassen`;

export const metadata: Metadata = {
  title:
    "Website erstellen lassen · Homepage & Webseite vom Profi | Fylu Marketing",
  description:
    "Website erstellen lassen aus dem Saarland: Homepage, Firmenwebsite oder Webseite vom Profi. Individuell entwickelt, mobiloptimiert und für Google und AI-Suchsysteme vorbereitet.",
  keywords: [
    "Website erstellen lassen",
    "Homepage erstellen lassen",
    "Webseite erstellen lassen",
    "Webseiten erstellen lassen",
    "Professionelle Website erstellen lassen",
    "Website erstellen Agentur",
    "Firmenwebsite erstellen lassen",
    "Unternehmenswebsite erstellen lassen",
    "Website erstellen lassen Saarland",
    "Homepage erstellen lassen Saarland",
    "Website vom Profi",
    "Website Agentur",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Website erstellen lassen · Homepage & Webseite vom Profi | Fylu Marketing",
    description:
      "Website, Homepage oder Webseite vom Profi aus Saarlouis. Individuell entwickelt, mobiloptimiert, für Google und AI-Suchsysteme vorbereitet.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Website erstellen lassen | Fylu Marketing aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website erstellen lassen · Homepage & Webseite vom Profi | Fylu Marketing",
    description:
      "Website, Homepage oder Webseite vom Profi aus Saarlouis. Individuell, mobiloptimiert, SEO- und GEO-vorbereitet.",
    images: ["/herob.png"],
  },
};

const faqEntries = [
  {
    question: "Was kostet es, eine Website erstellen zu lassen?",
    answer:
      "Der Rahmen hängt vom Umfang ab: Anzahl der Seiten, Umfang der Inhalte, Anbindungen und die spätere Betreuung. Im Vorgespräch klären wir den passenden Rahmen und halten ihn schriftlich fest, ohne versteckte Positionen.",
  },
  {
    question: "Wie lange dauert es, eine Website erstellen zu lassen?",
    answer:
      "Kleinere Firmenwebsites entstehen in wenigen Wochen. Größere Vorhaben mit Positionierung, Content-Struktur und Anbindungen brauchen entsprechend länger. Wir planen den Zeitrahmen im Vorgespräch verbindlich.",
  },
  {
    question: "Ist der Begriff Website, Homepage oder Webseite gemeint?",
    answer:
      "Wir behandeln alle drei Begriffe als dieselbe Leistung. Eine Homepage ist streng genommen die Startseite, eine Webseite ist eine einzelne Seite, eine Website ist der komplette Auftritt. In der Praxis werden die Begriffe synonym benutzt.",
  },
  {
    question: "Wird die Website bei Google gefunden?",
    answer:
      "Jede Website bekommt eine saubere technische SEO-Basis: schnelle Ladezeit, strukturierte Daten, mobile Optimierung, semantische Struktur. Für tiefere Sichtbarkeit gibt es SEO-Foundation und laufende SEO-Betreuung als eigenständige Leistungen.",
  },
  {
    question: "Was passiert nach dem Launch?",
    answer:
      "Nach dem Launch übernehmen wir auf Wunsch die laufende Betreuung: neue Inhalte, Landingpages, technische Pflege, SEO-, GEO- und Ads-Betreuung. Der Umfang richtet sich nach eurem Wachstum, nicht nach einem starren Paket.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Website erstellen lassen",
  alternateName: [
    "Homepage erstellen lassen",
    "Webseite erstellen lassen",
    "Webseiten erstellen lassen",
    "Professionelle Website erstellen lassen",
    "Firmenwebsite erstellen lassen",
  ],
  serviceType: "Webdesign & Website-Erstellung",
  description:
    "Individuell entwickelte Websites, Homepages und Firmenauftritte aus Saarlouis. Für Unternehmen jeder Phase, vom ersten Auftritt bis zur Skalierung.",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: [
    { "@type": "State", name: "Saarland" },
    { "@type": "Country", name: "Deutschland" },
  ],
  url: URL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website erstellen lassen",
      item: URL,
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
