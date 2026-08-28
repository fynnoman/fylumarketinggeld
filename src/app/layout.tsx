import type { Metadata } from "next";
import { Fraunces, Geist, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";
import GtagLoader from "@/components/GtagLoader";
import HiddenTaskeyLink from "@/components/HiddenTaskeyLink";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

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
  title: {
    default: "Webdesign & SEO im Saarland | Fylu Studio Saarlouis",
    template: "%s | Fylu Studio",
  },
  description: "Webdesign, SEO und Google Ads aus Saarlouis. Wir bauen Ihre Website und sorgen dafür, dass Google Sie findet. Persönlich betreut, in 14 Tagen live.",
  authors: [{ name: "Fynn Schulz", url: "https://www.fylumarketing.de" }],
  creator: "Fylu Studio Saarlouis",
  publisher: "Fylu",
  metadataBase: new URL("https://www.fylumarketing.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webdesign & SEO im Saarland | Fylu Studio Saarlouis",
    description: "Webdesign, SEO und Google Ads aus Saarlouis. Website in 14 Tagen live, persönlich betreut.",
    url: "https://www.fylumarketing.de",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Fylu Studio, Webdesign und SEO aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & SEO im Saarland | Fylu Studio Saarlouis",
    description: "Webdesign, SEO und Google Ads aus Saarlouis. Website in 14 Tagen live, persönlich betreut.",
    images: ["/hero-background.webp"],
  },
  keywords: [
    "Webdesign Saarland",
    "Webdesigner Saarlouis",
    "SEO Saarland",
    "Google Ads Saarland",
    "Website erstellen lassen Saarland",
    "Webdesign Saarbrücken",
    "Webdesign Merzig",
    "Webdesign Dillingen",
    "Webdesign Handwerk",
    "Fylu Studio",
  ],
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
  category: "Editorial Webdesign Studio",
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
              name: "Fylu Studio – Editorial Webdesign Saarland",
              alternateName: "Fylu Marketing",
              legalName: "Fylu – Fynn Schulz",
              description:
                "Fylu ist ein Boutique-Webdesign-Studio aus Saarlouis. Editorial gestaltete Websites, kuratierte SEO- und Google-Ads-Erweiterungen sowie Software- und App-Entwicklung. Bewusst begrenzt auf zwölf Klienten pro Jahr — geführt aus dem Saarland für Häuser in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig, Völklingen, St. Ingbert, Dillingen und im gesamten Saarland sowie deutschlandweit.",
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
                jobTitle: "Studio-Lead & Editorial Webdesigner",
                worksFor: { "@id": "https://www.fylumarketing.de/#organization" },
                description:
                  "Studio-Lead von Fylu Studio in Saarlouis. Spezialisiert auf editorial gestaltete Websites für hochwertige, etablierte Unternehmen mit klarem Conversion-Fokus. Kombiniert Design-, SEO- und Software-Kompetenz aus einer Hand.",
                knowsAbout: [
                  "Editorial Webdesign",
                  "Conversion-Analyse",
                  "Suchmaschinenoptimierung (SEO)",
                  "Local SEO",
                  "Google Ads",
                  "Generative Engine Optimization (GEO)",
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Structured Data",
                  "Core Web Vitals",
                  "Softwareentwicklung",
                  "AI-Integration",
                ],
                knowsLanguage: ["de", "en"],
                nationality: { "@type": "Country", name: "Deutschland" },
                workLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Saarlouis",
                    addressRegion: "Saarland",
                    addressCountry: "DE",
                  },
                },
                sameAs: [
                  "https://www.linkedin.com/in/fynn-schulz/",
                  "https://www.instagram.com/fylumarketing/",
                ],
                url: "https://www.fylumarketing.de/team",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "20",
              },
              slogan: "Editorial Webdesign aus dem Saarland — mit einer Handschrift, die bleibt.",
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
              name: "Fylu Studio · Editorial Webdesign Saarland",
              description:
                "Editorial gestaltete Websites, kuratierte SEO- und Ads-Erweiterungen aus einem Boutique-Studio in Saarlouis. Zwölf Klienten pro Jahr.",
              publisher: { "@id": "https://www.fylumarketing.de/#organization" },
              inLanguage: "de-DE",
              about: [
                { "@type": "Thing", name: "Webdesign" },
                { "@type": "Thing", name: "Suchmaschinenoptimierung" },
                { "@type": "Thing", name: "Google Ads" },
                { "@type": "Thing", name: "Softwareentwicklung" },
                { "@type": "Thing", name: "Conversion-Analyse" },
                { "@type": "Thing", name: "Local SEO" },
              ],
              audience: {
                "@type": "BusinessAudience",
                audienceType:
                  "Etablierte, hochwertige B2B-Unternehmen — Kanzleien, Steuerberater, Ärzte, Zahnärzte, Immobilienmakler, Photovoltaik-Anbieter, Gebäudereinigung, Industrie-Mittelstand, hochwertiges Handwerk.",
              },
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
              name: "Fylu Studio · Editorial Webdesign Saarland",
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
              name: "Fylu Studio",
              alternateName: "Fylu Marketing",
              url: "https://www.fylumarketing.de",
              logo: "https://www.fylumarketing.de/logo-fylu.webp",
              founder: {
                "@type": "Person",
                name: "Fynn Schulz",
                jobTitle: "Studio-Lead",
                worksFor: { "@type": "Organization", name: "Fylu Studio" },
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
      </head>
      <body className={`${fraunces.variable} ${geist.variable} ${caveat.variable} antialiased`}>
        {children}
        <Analytics />
        <HiddenTaskeyLink />
        <WhatsAppButton />
        <CookieBanner />
        <GtagLoader />
      </body>
    </html>
  );
}
