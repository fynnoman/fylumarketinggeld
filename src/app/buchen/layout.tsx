import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website buchen | Webdesign Auftrag starten | Fylu Saarland",
  description:
    "Starten Sie jetzt Ihr Webdesign-Projekt. Professionelle Website erstellen lassen — für Unternehmen im Saarland und deutschlandweit.",
  alternates: {
    canonical: "/buchen",
  },
};

export default function BuchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
