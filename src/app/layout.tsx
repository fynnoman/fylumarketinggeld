import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webdesign Agentur | Professionelle Websites die Kunden gewinnen | Fylu",
  description: "Professionelles Webdesign & SEO für kleine und mittlere Unternehmen. Mehr Google-Sichtbarkeit, mehr Anfragen, mehr Umsatz. Jetzt kostenlosen Website-Entwurf sichern.",
  keywords: "Webdesign, Webdesign Agentur, Website erstellen, SEO Optimierung, Google Optimierung, Homepage erstellen, professionelle Website, Webdesign Deutschland, lokales SEO",
  authors: [{ name: "Fynn Schulz", url: "https://fylumarketing.de" }],
  creator: "Fylu – Fynn Schulz",
  publisher: "Fylu",
  metadataBase: new URL("https://fylumarketing.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webdesign Agentur | Websites die Kunden gewinnen | Fylu",
    description: "Professionelles Webdesign & SEO für kleine und mittlere Unternehmen. Mehr Google-Sichtbarkeit, mehr Anfragen, mehr Umsatz.",
    url: "https://fylumarketing.de",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/heroba.png",
        width: 1200,
        height: 630,
        alt: "Fylu Webdesign Agentur – Professionelle Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Agentur | Fylu",
    description: "Professionelles Webdesign & SEO. Mehr Kunden durch Ihre Website.",
    images: ["/heroba.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://fylumarketing.de" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Fylu – Webdesign & SEO",
              description: "Professionelles Webdesign und SEO-Optimierung für kleine und mittlere Unternehmen in Deutschland.",
              url: "https://fylumarketing.de",
              telephone: "+4915168488999",
              email: "fynnschulzonline@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
              },
              serviceType: ["Webdesign", "SEO Optimierung", "Google Optimierung", "Website Erstellung"],
              priceRange: "€€",
              areaServed: "Deutschland",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
