import type { Metadata } from "next";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/webdesign-autoaufbereitung`;

export const metadata: Metadata = {
  title:
    "Webdesign Autoaufbereitung · Website für Fahrzeugaufbereiter | Fylu Marketing",
  description:
    "Websites für Autoaufbereitung und Fahrzeugaufbereitung: klare Leistungsstruktur, Vorher-Nachher-Referenzen und lokale Sichtbarkeit. Aus Saarlouis für Betriebe im Saarland und deutschlandweit.",
  keywords: [
    "Webdesign Autoaufbereitung",
    "Website Autoaufbereitung",
    "Website für Autoaufbereiter",
    "Webdesign Fahrzeugaufbereitung",
    "Website Fahrzeugaufbereitung",
    "Autopflege Website erstellen lassen",
    "Detailing Website",
    "Fahrzeugpflege Webdesign",
    "Autoaufbereitung Homepage",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title:
      "Webdesign Autoaufbereitung · Website für Fahrzeugaufbereiter | Fylu Marketing",
    description:
      "Websites für Autoaufbereitung und Fahrzeugaufbereitung: klare Leistungsstruktur, Vorher-Nachher-Referenzen und lokale Sichtbarkeit.",
    url: URL,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/herob.png",
        width: 1200,
        height: 630,
        alt: "Webdesign Autoaufbereitung · Fylu Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Autoaufbereitung · Fylu Marketing",
    description:
      "Websites für Autoaufbereitung und Fahrzeugaufbereitung. Aus Saarlouis.",
    images: ["/herob.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
