import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website erstellen lassen | Professionell ab 990€ | Fylu",
  description:
    "Website erstellen lassen: professionell, mobiloptimiert & SEO-ready. Ab 990€, fertig in 2-3 Wochen. Kostenloser Entwurf in 24h.",
  keywords:
    "Website erstellen lassen, Homepage erstellen lassen, professionelle Website, Website Kosten, Website erstellen lassen Preis",
  alternates: {
    canonical: "/website-erstellen-lassen",
  },
  openGraph: {
    title: "Website erstellen lassen | Professionell ab 990€ | Fylu",
    description:
      "Website erstellen lassen: professionell, mobiloptimiert & SEO-ready. Ab 990€, fertig in 2-3 Wochen.",
    url: "https://www.fylumarketing.de/website-erstellen-lassen",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
