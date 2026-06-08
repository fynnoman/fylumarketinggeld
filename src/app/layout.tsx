import type { Metadata } from "next";
import { Fraunces, Geist, Caveat } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import HiddenTaskeyLink from "@/components/HiddenTaskeyLink";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const GTAG_ID = "AW-18076906192";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Webdesign Saarland | Websites, SEO & Google Ads ab 990€ | Fylu Saarlouis",
  description: "Webdesign Agentur Saarland aus Saarlouis. Professionelle Websites, lokale SEO & Google Ads für Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig. Ab 990€, kostenloser Entwurf in 24h.",
  keywords: [
    "Webdesign Saarland",
    "Webdesigner Saarland",
    "Webdesign Saarbrücken",
    "Webdesign Saarlouis",
    "SEO Saarland",
    "Google Ads Saarland",
    "Website erstellen lassen Saarland",
    "Webdesign Agentur Saarland",
    "Homepage erstellen Saarland",
  ],
  authors: [{ name: "Fynn Schulz", url: "https://www.fylumarketing.de" }],
  creator: "Fylu – Fynn Schulz",
  publisher: "Fylu",
  metadataBase: new URL("https://www.fylumarketing.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webdesign Saarland | Websites & SEO die Kunden bringen | Fylu",
    description: "Professionelles Webdesign & SEO aus dem Saarland. Für Unternehmen in Saarbrücken, Saarlouis & ganz Deutschland. Mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz.",
    url: "https://www.fylumarketing.de",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Fylu Webdesign Agentur – Professionelle Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Saarland | Fylu",
    description: "Webdesign & SEO aus dem Saarland. Mehr Kunden durch Ihre Website.",
    images: ["/hero-background.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Ear6kvwbpWM5FoLN6Qfwk5GWOlsTSkpyscKuDedLIcU",
  },
  category: "Webdesign Agentur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "LocalBusiness", "WebDesignCompany"],
              "@id": "https://www.fylumarketing.de/#organization",
              name: "Fylu – Webdesign & SEO Saarland",
              alternateName: "Fylu Marketing",
              legalName: "Fylu – Fynn Schulz",
              description:
                "Webdesign Agentur aus Saarlouis im Saarland. Professionelle Websites, lokale Suchmaschinenoptimierung (SEO) und Google Ads für Unternehmen in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig, Völklingen, St. Ingbert, Dillingen und im gesamten Saarland sowie deutschlandweit.",
              url: "https://www.fylumarketing.de",
              logo: {
                "@type": "ImageObject",
                url: "https://www.fylumarketing.de/logo-fylu.webp",
                width: 512,
                height: 512,
              },
              image: "https://www.fylumarketing.de/hero-background.webp",
              telephone: "+4915168488999",
              email: "kontakt@fylumarketing.de",
              foundingDate: "2024",
              founder: {
                "@type": "Person",
                "@id": "https://www.fylumarketing.de/#fynn-schulz",
                name: "Fynn Schulz",
                jobTitle: "Webdesigner & SEO-Spezialist",
                worksFor: { "@id": "https://www.fylumarketing.de/#organization" },
                knowsAbout: [
                  "Webdesign",
                  "Suchmaschinenoptimierung",
                  "Google Ads",
                  "Conversion-Optimierung",
                  "Local SEO",
                ],
                url: "https://www.fylumarketing.de",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saarlouis",
                addressLocality: "Saarlouis",
                postalCode: "66740",
                addressRegion: "Saarland",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.3133,
                longitude: 6.7525,
              },
              hasMap: "https://www.google.com/maps/place/Saarlouis",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              serviceType: [
                "Webdesign",
                "Suchmaschinenoptimierung (SEO)",
                "Google Ads",
                "Website Erstellung",
                "Google Business Optimierung",
                "Local SEO",
                "Conversion-Optimierung",
                "Webhosting",
                "Softwareentwicklung",
                "Software-Entwicklung",
                "Webentwicklung",
                "Programmierung",
                "Custom Software",
                "ERP-Entwicklung",
                "CRM-Entwicklung",
                "SaaS-Entwicklung",
                "API-Integration",
                "Automatisierung",
                "App-Entwicklung",
                "Web-App-Entwicklung",
                "AI-Integration",
                "IT-Dienstleistung",
              ],
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: ["Überweisung", "PayPal", "Kreditkarte"],
              areaServed: [
                { "@type": "State", name: "Saarland" },
                { "@type": "City", name: "Saarbrücken" },
                { "@type": "City", name: "Saarlouis" },
                { "@type": "City", name: "Neunkirchen" },
                { "@type": "City", name: "Homburg" },
                { "@type": "City", name: "Völklingen" },
                { "@type": "City", name: "Merzig" },
                { "@type": "City", name: "St. Ingbert" },
                { "@type": "City", name: "Dillingen" },
                { "@type": "City", name: "St. Wendel" },
                { "@type": "City", name: "Lebach" },
                { "@type": "City", name: "Püttlingen" },
                { "@type": "City", name: "Blieskastel" },
                { "@type": "Country", name: "Deutschland" },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 49.3133,
                  longitude: 6.7525,
                },
                geoRadius: "60000",
              },
              knowsAbout: [
                "Webdesign Saarland",
                "Webdesign Saarbrücken",
                "Webdesign Saarlouis",
                "SEO Optimierung",
                "Local SEO",
                "Google Ads",
                "Google Business Profile",
                "Website erstellen lassen",
                "Conversion-Optimierung",
                "Core Web Vitals",
                "Mobile First Design",
                "Softwareentwicklung Saarland",
                "Software Saarland",
                "Programmierer Saarland",
                "Webentwickler Saarland",
                "Software-Entwickler Saarland",
                "Full-Stack Entwicklung",
                "React Entwicklung",
                "Next.js Entwicklung",
                "TypeScript",
                "Node.js Entwicklung",
                "Python Entwicklung",
                "PostgreSQL",
                "ERP Saarland",
                "CRM Saarland",
                "SaaS-Entwicklung",
                "Web-App entwickeln",
                "App entwickeln lassen",
                "API-Integration",
                "Automatisierung",
                "AI-Integration",
                "OpenAI API",
                "Anthropic API",
                "Custom Software Saarland",
                "IT-Dienstleister Saarland",
              ],
              sameAs: [
                "https://www.instagram.com/fylumarketing/",
                "https://www.linkedin.com/in/fynn-schulz/",
                "https://g.page/fylumarketing",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Webdesign & SEO Pakete",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Basismodell Website",
                    description:
                      "Professionelle Website mit bis zu 3 Seiten, mobiloptimiert, SEO-Basis und Kontaktformular. Inklusive Hosting für 2 Monate.",
                    price: "990",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/angebote",
                    itemOffered: {
                      "@type": "Service",
                      name: "Basis-Webdesign",
                      serviceType: "Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Fortgeschritten Website",
                    description:
                      "Verkaufsoptimierte Website mit bis zu 6 Seiten, erweiterte SEO, Google Business Einrichtung. Inklusive Hosting für 2 Monate.",
                    price: "1490",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/angebote",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business-Webdesign",
                      serviceType: "Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Professionell Website",
                    description:
                      "Unbegrenzte Seiten, Premium-Design, intensive Performance- und Conversion-Optimierung. Inklusive Hosting für 4 Monate.",
                    price: "2490",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/angebote",
                    itemOffered: {
                      "@type": "Service",
                      name: "Premium-Webdesign",
                      serviceType: "Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "SEO Betreuung",
                    description:
                      "Laufende SEO-Optimierung mit monatlichem Reporting für nachhaltige Google-Sichtbarkeit im Saarland.",
                    price: "300",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "300",
                      priceCurrency: "EUR",
                      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                    },
                    availability: "https://schema.org/InStock",
                    itemOffered: {
                      "@type": "Service",
                      name: "Suchmaschinenoptimierung",
                      serviceType: "SEO",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Google Ads Management",
                    description:
                      "Professionelle Google Ads Kampagnen mit Setup, laufender Optimierung und transparentem Reporting.",
                    price: "250",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "250",
                      priceCurrency: "EUR",
                      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                    },
                    availability: "https://schema.org/InStock",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Ads Management",
                      serviceType: "SEA",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Custom Software & Web-App",
                    description:
                      "Maßgeschneiderte Web-Apps, interne Tools und Custom Software mit modernem Tech-Stack. Festpreis nach Discovery-Phase.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: "8000",
                      maxPrice: "80000",
                      priceCurrency: "EUR",
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/software-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "Softwareentwicklung",
                      serviceType: "Software Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "App-Entwicklung",
                    description:
                      "Web-Apps, PWAs und native iOS/Android-Apps mit React Native. Festpreis-Modell, App-Store-Veröffentlichung inklusive.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: "8900",
                      maxPrice: "50000",
                      priceCurrency: "EUR",
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/app-entwickeln-lassen",
                    itemOffered: {
                      "@type": "Service",
                      name: "App-Entwicklung",
                      serviceType: "Mobile Application Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "ERP- & CRM-Entwicklung",
                    description:
                      "Maßgeschneiderte ERP- und CRM-Systeme für den Mittelstand. Modular, skalierbar, mit API-Integration zu DATEV, lexoffice und Co.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: "25000",
                      maxPrice: "150000",
                      priceCurrency: "EUR",
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/software-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "ERP- und CRM-Entwicklung",
                      serviceType: "Enterprise Software",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "12",
              },
              slogan: "Webdesign aus dem Saarland, das wirklich verkauft.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.fylumarketing.de/#website",
              url: "https://www.fylumarketing.de",
              name: "Fylu – Webdesign Saarland",
              description:
                "Webdesign, SEO und Google Ads aus dem Saarland – persönlich, fair und mit messbaren Ergebnissen.",
              publisher: { "@id": "https://www.fylumarketing.de/#organization" },
              inLanguage: "de-DE",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.fylumarketing.de/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fylu – Webdesign & SEO Saarland",
              url: "https://www.fylumarketing.de",
              inLanguage: "de-DE",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.fylumarketing.de/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fylu",
              alternateName: "Fylu Marketing",
              url: "https://www.fylumarketing.de",
              logo: "https://www.fylumarketing.de/logo-fylu.webp",
              founder: {
                "@type": "Person",
                name: "Fynn Schulz",
                jobTitle: "Inhaber & Strategie",
                worksFor: { "@type": "Organization", name: "Fylu" },
              },
              foundingLocation: { "@type": "Place", name: "Saarlouis, Saarland, Deutschland" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+4915168488999",
                contactType: "customer service",
                email: "kontakt@fylumarketing.de",
                areaServed: ["DE"],
                availableLanguage: ["de", "en"],
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was kostet eine professionelle Website im Saarland?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eine professionelle Website bei Fylu beginnt ab 990€ für das Basismodell mit bis zu 3 Seiten, mobiloptimiert und mit lokaler SEO-Basis für das Saarland. Das beliebte Business-Paket kostet 1.490€ und enthält bis zu 6 Seiten, erweiterte SEO und Google Business Einrichtung. Premium-Lösungen ab 2.490€. Alle Pakete zum klaren Festpreis – ohne versteckte Kosten.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie lange dauert die Erstellung einer Website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In der Regel ist Ihre Website innerhalb von 2-4 Wochen fertig. Den ersten Design-Entwurf erhalten Sie kostenlos und unverbindlich innerhalb von 24 Stunden. Express-Websites in 14 Tagen sind ohne Aufpreis möglich.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bietet Fylu auch SEO-Optimierung im Saarland an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, jede Website wird mit lokaler SEO-Basis (OnPage, Technik, Google Business) ausgeliefert. Erweiterte SEO-Betreuung für Suchanfragen wie 'Webdesigner Saarbrücken' oder 'Handwerker Saarlouis' ab 300€ pro Monat. Google Ads Management ab 250€ pro Monat.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Für welche Städte im Saarland arbeitet Fylu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fylu ist in Saarlouis ansässig und betreut Unternehmen in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Völklingen, Merzig, St. Ingbert, Dillingen, St. Wendel, Lebach, Püttlingen, Blieskastel und im gesamten Saarland. Remote-Projekte deutschlandweit ebenfalls möglich.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was unterscheidet Fylu von anderen Webdesign-Agenturen im Saarland?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Bei Fylu arbeiten Sie direkt mit dem Webdesigner – kein Agentur-Overhead, keine Ticket-Systeme, keine Warteschleifen. Sie bekommen klare Festpreise ab 990€, einen kostenlosen Entwurf in 24 Stunden und eine Website, die für lokale Suchanfragen im Saarland von Grund auf optimiert ist. Persönlich, transparent und nachweislich wirksam.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie schnell werde ich bei Google gefunden?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Erste Verbesserungen sind oft nach 4-8 Wochen messbar. Signifikante Rankings für lokale Begriffe wie 'Webdesign Saarbrücken' oder 'Handwerker Saarlouis' typischerweise nach 3-6 Monaten. Für sofortige Sichtbarkeit empfehle ich ergänzend Google Ads – Kampagnen sind binnen 24 Stunden aktiv.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist die Website mobiloptimiert und Google-konform?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Selbstverständlich. Jede Website wird mobile-first entwickelt, erfüllt alle Core Web Vitals (LCP, INP, CLS) und ist nach allen aktuellen Google-Standards gebaut. Über 70 Prozent der lokalen Suchanfragen kommen vom Smartphone – darauf ist alles ausgerichtet.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${geist.variable} ${caveat.variable} antialiased`}>
        {children}
        <Analytics />
        <HiddenTaskeyLink />
        <WhatsAppButton />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
