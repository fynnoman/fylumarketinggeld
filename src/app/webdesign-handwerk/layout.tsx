import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign für Handwerker | Website die Aufträge bringt | Fylu",
  description:
    "Webdesign speziell für Handwerksbetriebe: modern, mobiloptimiert & bei Google sichtbar. Ab 990€. Kostenloser Entwurf in 24h.",
  keywords:
    "Webdesign Handwerk, Handwerker Website, Website Handwerksbetrieb, Webdesign Elektriker, Webdesign Maler, Webdesign SHK",
  alternates: {
    canonical: "/webdesign-handwerk",
  },
  openGraph: {
    title: "Webdesign für Handwerker | Website die Aufträge bringt | Fylu",
    description:
      "Webdesign speziell für Handwerksbetriebe: modern, mobiloptimiert & bei Google sichtbar. Ab 990€.",
    url: "https://www.fylumarketing.de/webdesign-handwerk",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
