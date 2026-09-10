import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/animated/FadeInSection";

export const metadata: Metadata = {
  title: "SEO-Agenturen im Saarland, Marktübersicht 2026 | Fylu",
  description:
    "Marktübersicht saarländischer SEO-Anbieter 2026: Ausrichtung, Sitz, Stärken. Von kleineren Agenturen bis zu klassischen Full-Service-Agenturen, kurz und neutral eingeordnet.",
  alternates: { canonical: "/ratgeber/seo-agenturen-saarland" },
  openGraph: {
    title: "SEO-Agenturen im Saarland, Marktübersicht 2026 | Fylu",
    description:
      "Neutrale Übersicht saarländischer SEO-Anbieter: Ausrichtung, Sitz und was jede Agentur besonders macht.",
    url: "https://www.fylumarketing.de/ratgeber/seo-agenturen-saarland",
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "article",
    images: [
      { url: "/herob.png", width: 1200, height: 630, alt: "SEO-Agenturen Saarland 2026" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-Agenturen im Saarland, Marktübersicht 2026",
    description: "Neutrale Übersicht saarländischer SEO-Anbieter.",
    images: ["/herob.png"],
  },
};

type Entry = {
  name: string;
  location: string;
  focus: string;
  note: string;
  homepage: string;
};

// Marktübersicht: Anbieter, die im saarländischen SEO-Markt aktiv und öffentlich
// über eine eigene Domain sichtbar sind. Reihenfolge alphabetisch, kein Ranking.
const entries: Entry[] = [
  {
    name: "Ditella",
    location: "Saarbrücken",
    focus: "Local SEO, Google Ads, technisches SEO",
    note: "Klassische SEO-Agentur mit Fokus auf messbare Rankings und lokale Sichtbarkeit.",
    homepage: "https://ditella.de/leistungen/seo",
  },
  {
    name: "Fylu Marketing",
    location: "Saarlouis",
    focus: "Webdesign, SEO- und GEO-Erweiterung",
    note: "Agentur für Unternehmen jeder Phase, die ihre Online-Präsenz aufbauen und skalieren wollen. Direkter Kontakt zum Ansprechpartner. SEO als Erweiterung des Website-Auftritts, nicht als separate Kampagne.",
    homepage: "https://www.fylumarketing.de/seo-saarland",
  },
  {
    name: "MichelyWeb",
    location: "Saarland",
    focus: "Suchmaschinenoptimierung, Webdesign",
    note: "Etablierter regionaler Anbieter mit inhaltlich tiefen Landingpages und langer Marktpräsenz.",
    homepage: "https://www.michelyweb.de/leistungen/suchmaschinenoptimierung/saarland/",
  },
  {
    name: "MindWebMedia",
    location: "Saarland",
    focus: "SEO, GEO, technisches SEO",
    note: "Adressiert klassisches SEO und Generative Engine Optimization getrennt als eigene Produkte.",
    homepage: "https://mindwebmedia.de/seo-agentur-saarland",
  },
  {
    name: "PAI Marketing",
    location: "Saarlouis",
    focus: "Suchmaschinenoptimierung",
    note: "Kleinere Agentur mit lokalem Fokus auf Saarlouis und Umgebung.",
    homepage: "https://pai-marketing.de/seo/",
  },
  {
    name: "Sepeur Strategies",
    location: "Saarland",
    focus: "SEO für lokale Betriebe",
    note: "Inhaltlich sehr ausführliche Landingpages, klarer Fokus auf saarländischen Mittelstand.",
    homepage: "https://sepeur-strategies.com/seo-saarland/",
  },
  {
    name: "Vextal",
    location: "Saarbrücken",
    focus: "Local SEO, KMU",
    note: "Adressiert kleine und mittelständische Betriebe mit lokalem Suchbezug.",
    homepage: "https://vextal.de/seo-saarland",
  },
  {
    name: "WEBDELIN",
    location: "Saarland",
    focus: "SEO, KI-SEO (GEO), Google Ads",
    note: "Eigenständiger Fokus auf KI-Suche neben klassischem SEO. Kostenloser SEO-Check als Einstieg.",
    homepage: "https://www.webdelin.de/seo",
  },
];

const criteria = [
  {
    label: "Zielgruppen-Fit",
    body: "Kleinere Agenturen für Unternehmen mit langfristigem Anspruch und direktem Draht. Klassische Full-Service-Agenturen für Volumen, Kampagnen und breite Reichweite.",
  },
  {
    label: "Ansprechpartner",
    body: "Bei kleineren Anbietern direkter Kontakt zum Ansprechpartner oder Entwickler. Bei größeren Agenturen häufig Account-Manager mit dahinterliegendem Team.",
  },
  {
    label: "Kombination Design + SEO",
    body: "Manche Anbieter trennen strikt zwischen Design und SEO. Andere führen beides aus einer Hand, das reduziert Übergabeverluste beim Relaunch.",
  },
  {
    label: "GEO-Kompetenz",
    body: "Generative Engine Optimization für ChatGPT, Perplexity und Google AI Overviews wird bislang nur von wenigen Anbietern im Saarland als eigene Leistung geführt.",
  },
  {
    label: "Konditionen",
    body: "Transparente Kalkulation ohne monatliche Grundgebühr vs. klassisches Retainer-Modell. Beide Modelle sind legitim, die Frage ist, was zum Vorhaben passt.",
  },
];

export default function SeoAgenturenSaarlandPage() {
  const url = "https://www.fylumarketing.de/ratgeber/seo-agenturen-saarland";

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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fylumarketing.de" },
              { "@type": "ListItem", position: 2, name: "Ratgeber", item: "https://www.fylumarketing.de/ratgeber" },
              { "@type": "ListItem", position: 3, name: "SEO-Agenturen im Saarland", item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SEO-Agenturen im Saarland, Marktübersicht 2026",
            description:
              "Neutrale Übersicht saarländischer SEO-Anbieter mit Ausrichtung, Sitz und Kurzbeschreibung. Für Entscheider, die Anbieter im Saarland vergleichen wollen.",
            author: { "@id": "https://www.fylumarketing.de/#fynn-schulz" },
            publisher: { "@id": "https://www.fylumarketing.de/#organization" },
            datePublished: "2026-09-09",
            dateModified: "2026-09-09",
            mainEntityOfPage: url,
            inLanguage: "de-DE",
            about: { "@type": "Thing", name: "SEO-Agenturen im Saarland" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            numberOfItems: entries.length,
            itemListElement: entries.map((e, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Organization",
                name: e.name,
                url: e.homepage,
                areaServed: e.location,
                description: e.note,
              },
            })),
          }),
        }}
      />

      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-[var(--background-warm)] border-b border-stone-200/70">
          <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
            <nav className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              <Link href="/" className="hover:text-cyan-700 transition-colors">Home</Link>
              <span className="mx-2 text-stone-400">·</span>
              <Link href="/ratgeber" className="hover:text-cyan-700 transition-colors">Ratgeber</Link>
              <span className="mx-2 text-stone-400">·</span>
              <span className="text-stone-900 font-medium">SEO-Agenturen Saarland</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)",
                backgroundSize: "28px 28px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 40% 40%, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 40% 40%, black 30%, transparent 80%)",
              }}
            />
            <div className="absolute bottom-0 left-0 w-[55vw] h-[45vw] bloom-cyan" />
            <div className="noise-overlay opacity-30" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeInSection>
              <div className="editorial-eyebrow mb-6">
                <span>Ratgeber · Marktübersicht</span>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.08}>
              <h1 className="text-[2.4rem] leading-[1.05] sm:text-5xl md:text-[3.6rem] lg:text-[4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                SEO-Agenturen im Saarland:{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  neutrale Marktübersicht 2026.
                </span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={0.16}>
              <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
                Der saarländische SEO-Markt ist überschaubar und fragmentiert.
                Diese Übersicht ordnet die aktiven Anbieter alphabetisch ein: mit
                Sitz, inhaltlicher Ausrichtung und einer kurzen Einschätzung, für
                welche Situation der jeweilige Anbieter passt. Kein Ranking.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Liste */}
        <section className="py-20 md:py-28 px-5 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
              {entries.map((e, i) => (
                <FadeInSection key={e.name} delay={0.06 + i * 0.04}>
                  <article className="bg-[var(--background-warm)] rounded-3xl border border-stone-200/70 p-7 md:p-8">
                    <div className="flex items-baseline gap-4 mb-4 flex-wrap">
                      <span className="font-display italic text-cyan-700 text-lg leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-[1.4rem] md:text-[1.55rem] font-semibold text-[var(--ink)] tracking-[-0.02em]">
                        {e.name}
                      </h2>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                        {e.location}
                      </span>
                    </div>
                    <div className="text-[13px] text-stone-500 mb-3 pl-[3.75rem]">
                      Ausrichtung: {e.focus}
                    </div>
                    <p className="text-stone-700 leading-relaxed text-[0.98rem] pl-[3.75rem]">
                      {e.note}
                    </p>
                    <div className="mt-5 pl-[3.75rem]">
                      <a
                        href={e.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan-deep)] hover:text-cyan-800"
                      >
                        Zur Website
                        <span>→</span>
                      </a>
                    </div>
                  </article>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Auswahlkriterien */}
        <section className="py-20 md:py-28 px-5 md:px-8 bg-[var(--background-warm)]">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Auswahl
                </span>
              </div>
              <h2 className="text-[2rem] leading-[1.05] sm:text-4xl md:text-[2.8rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Kriterien, die den{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Unterschied machen.
                </span>
              </h2>
            </FadeInSection>
            <div className="mt-10 space-y-3">
              {criteria.map((c, i) => (
                <FadeInSection key={c.label} delay={0.06 + i * 0.04}>
                  <div className="bg-white rounded-2xl border border-stone-200/70 p-6 md:p-7">
                    <h3 className="text-[15px] md:text-base font-semibold text-[var(--ink)] mb-2">
                      {c.label}
                    </h3>
                    <p className="text-stone-700 leading-relaxed text-[0.95rem]">
                      {c.body}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-5 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <div className="hairline-rule w-24 mx-auto mb-8" />
              <h2 className="text-[2rem] leading-[1.05] sm:text-4xl md:text-[2.6rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Passt Fylu Marketing zu Ihrem{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Vorhaben?
                </span>
              </h2>
              <p className="mt-6 text-stone-600 text-lg leading-relaxed">
                Fünfzehn Minuten. Wir hören zu, bevor wir antworten.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/buchen"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)]"
                >
                  <span>Vorgespräch buchen</span>
                  <span className="text-cyan-400">→</span>
                </Link>
                <Link
                  href="/seo-saarland"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
                >
                  <span>Zur SEO-Übersicht</span>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
