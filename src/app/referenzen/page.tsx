import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.fylumarketing.de";

type Project = {
  client: string;
  industry: string;
  city?: string;
  url: string;
  urlLabel: string;
  image: string;
  alt: string;
  portrait?: boolean;
};

const projects: Project[] = [
  {
    client: "Sportcenter Kenn",
    industry: "Sport- und Freizeitzentrum",
    city: "Kenn bei Trier",
    url: "https://www.sportcenterkenn.de",
    urlLabel: "sportcenterkenn.de",
    image: "/sportcenter-kenn.jpeg",
    alt: "Sportcenter Kenn · Fylu Marketing Referenz",
    portrait: true,
  },
  {
    client: "Milana Kollmann",
    industry: "Zahnärztliche Abrechnung",
    city: "Saarlouis",
    url: "https://milana-six.vercel.app/",
    urlLabel: "milana-six.vercel.app",
    image: "/milana.jpeg",
    alt: "Milana Kollmann · Fylu Marketing Referenz",
    portrait: true,
  },
  {
    client: "PB Fahrzeugpflege",
    industry: "Fahrzeugaufbereitung · Keramikversiegelung",
    city: "Saarlouis",
    url: "https://pb-fahrzeugpflege.de",
    urlLabel: "pb-fahrzeugpflege.de",
    image: "/PB.jpg",
    alt: "PB Fahrzeugpflege · Fylu Marketing Referenz",
  },
  {
    client: "Galabau Eifler",
    industry: "Garten- und Landschaftsbau",
    city: "Saarbrücken",
    url: "https://galabau-eifler.de",
    urlLabel: "galabau-eifler.de",
    image: "/galabau-eifler.jpeg",
    alt: "Galabau Eifler · Fylu Marketing Referenz",
    portrait: true,
  },
  {
    client: "MG Gebäudeservice",
    industry: "Facility Services",
    city: "Köln und Düsseldorf",
    url: "https://mg-gebaeudeservice.de",
    urlLabel: "mg-gebaeudeservice.de",
    image: "/mg-geb%C3%A4ude.png",
    alt: "MG Gebäudeservice · Fylu Marketing Referenz",
  },
];

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Ausgewählte Fylu-Projekte, direkt zur jeweiligen Kunden-Website. Nur reale Kunden, kein Fülltext.",
  alternates: { canonical: `${SITE}/referenzen` },
};

export default function ReferencesIndex() {
  const url = `${SITE}/referenzen`;

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Referenzen", item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${url}#collection`,
            url,
            name: "Fylu Referenzen",
            description:
              "Ausgewählte Fylu-Projekte. Bild und Direktlink zur jeweiligen Kunden-Website.",
            inLanguage: "de-DE",
            isPartOf: { "@id": `${SITE}/#website` },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: projects.length,
              itemListElement: projects.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: p.url,
                name: p.client,
              })),
            },
          }),
        }}
      />
      <main className="min-h-screen bg-[var(--background-warm)]">
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 text-center">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                  §
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Referenzen
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
                Umgesetzte{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Projekte
                </span>
                .
              </h1>
              <p className="mt-6 text-stone-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                Ein Bild pro Projekt, Direktlink zur Website. Kein Marketing-Text.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.client} · Website öffnen`}
                  className="group relative block rounded-2xl overflow-hidden bg-[var(--ink)] ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(12,14,16,0.3)] hover:shadow-[0_30px_80px_-20px_rgba(12,14,16,0.4)] transition-shadow"
                >
                  <div
                    className={`relative ${p.portrait ? "aspect-[3/4] bg-[var(--ink)]" : "aspect-[16/10] bg-white"}`}
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className={`transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${
                        p.portrait ? "object-cover object-center" : "object-cover object-top"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/90 font-semibold mb-1">
                        {p.industry}
                      </div>
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <div className="text-lg font-semibold tracking-[-0.01em] leading-tight">
                            {p.client}
                          </div>
                          {p.city && (
                            <div className="text-[12px] text-stone-300/90 mt-0.5">
                              {p.city}
                            </div>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-white/90 group-hover:text-white transition-colors">
                          <span className="hidden sm:inline">{p.urlLabel}</span>
                          <span className="text-cyan-300 transition-transform group-hover:translate-x-0.5">↗</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
