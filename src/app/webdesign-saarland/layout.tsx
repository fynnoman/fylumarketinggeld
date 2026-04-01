import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Saarland | Professionelle Websites ab 990€ | Fylu",
  description:
    "Webdesign aus dem Saarland: Moderne Websites für lokale Unternehmen. Persönlich, fair & SEO-optimiert. Kostenloser Entwurf in 24h.",
  keywords:
    "Webdesign Saarland, Webdesign Saarbrücken, Webdesign Saarlouis, Website erstellen Saarland, Webdesigner Saarland",
  alternates: {
    canonical: "/webdesign-saarland",
  },
  openGraph: {
    title: "Webdesign Saarland | Professionelle Websites ab 990€ | Fylu",
    description:
      "Webdesign aus dem Saarland: Moderne Websites für lokale Unternehmen. Persönlich, fair & SEO-optimiert.",
    url: "https://www.fylumarketing.de/webdesign-saarland",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
