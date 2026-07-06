import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { regions, getRegionBySlug } from "@/lib/regions";

function getRelatedRegions(currentSlug: string) {
  return regions.filter((r) => r.slug !== currentSlug).slice(0, 8);
}

const SITE = "https://www.fylumarketing.de";

const faqs = (city: string) => [
  {
    q: `Was kostet eine Fylu-Website in ${city}?`,
    a: "Signature ab 3.490 €, Atelier ab 6.490 €, Maison ab 9.190 €. Diese Preise sind Ausgangspunkte — der endgültige Rahmen entsteht im Vorgespräch. Alle Beträge zzgl. USt.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Signature-Auftritte gehen in etwa zwei bis vier Wochen live. Atelier und Maison planen wir mit vier bis sechs Wochen. Nach Live-Gang folgen bis zu sechs Monate Studio-Begleitung.",
  },
  {
    q: "Werde ich bei Google gefunden?",
    a: "Jede Fylu-Website enthält eine technische SEO-Foundation. Für tiefere Sichtbarkeit gibt es die Add-Ons SEO Foundation ab 890 €, SEO Betreuung ab 490 €/Monat sowie Google Ads Setup ab 690 €.",
  },
  {
    q: "Ist die Website mobil optimiert?",
    a: "Selbstverständlich. Jeder Fylu-Auftritt wird mobile-first entworfen — auf die Rhythmisierung des Smartphones abgestimmt, dann für Tablet und Desktop erweitert.",
  },
  {
    q: "Kann ich Inhalte selbst pflegen?",
    a: "Auf Wunsch. Wir richten redaktionelle Content-Systeme ein, in denen Sie Texte, Bilder und Kapitel selbst pflegen — ohne die editoriale Handschrift der Seite zu verlieren.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Zwischen 60 und 180 Tagen Studio-Begleitung sind je nach Paket enthalten. Iteration, Reporting, Feinschliff. Danach entscheiden Sie, ob wir weiter begleiten oder Sie im eigenen Haus übernehmen.",
  },
];

const steps = [
  {
    title: "Vorgespräch",
    text: "Fünfzehn Minuten. Wir hören zu — Substanz Ihres Hauses, aktuelle Präsenz, Anspruch des Vorhabens.",
  },
  {
    title: "Positionierung",
    text: "Rahmen, Verkaufsarchitektur, Content-Map. Kein Template, eine eigene Handschrift.",
  },
  {
    title: "Werkbank",
    text: "Design und Umsetzung mit editorial gestalteter Typografie, technischer SEO-Foundation, spürbarer Rhythmisierung.",
  },
  {
    title: "Sichtbarkeit",
    text: "Lokale Schärfung und Google-Präsenz — für Suchbegriffe, die Klienten tatsächlich eingeben.",
  },
  {
    title: "Iteration",
    text: "Bis zu sechs Monate Studio-Begleitung nach Live-Gang. Zeit für Substanz, nicht für Theorie.",
  },
];

export function generateStaticParams() {
  return regions.map((r) => ({ stadt: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const region = getRegionBySlug(stadt);
  if (!region) return {};
  const url = `${SITE}/webdesign/${region.slug}`;
  const isTop = region.tier === "top";
  // Conversion-fokussierter Title für Top-Tier (höhere CTR durch 24h-Versprechen).
  const title = isTop
    ? `Webdesigner ${region.city} · Entwurf in 24h · Fylu`
    : `Webdesign ${region.city} | Fylu Webdesigner Saarland`;
  const description = isTop
    ? `Webdesigner für ${region.city}: schnelle, mobile Websites mit lokalem SEO. Kostenloser Entwurf in 24h, persönliche Betreuung aus Saarlouis.`
    : `Webdesign aus dem Saarland für ${region.city}. Kostenloser Entwurf in 24 Stunden.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    // Extended-Tier-Städte aus dem Index halten — der Content überlappt zu stark
    // mit den Top-5 (Audit-Befund: 99,85 % Duplicate). Hochstufen auf "top",
    // sobald die Page unique Inhalte bekommt.
    robots: isTop
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "Fylu Marketing",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const region = getRegionBySlug(stadt);
  if (!region) notFound();

  const pageFaqs = faqs(region.city);
  const url = `${SITE}/webdesign/${region.slug}`;
  const relatedRegions = getRelatedRegions(region.slug);

  return (
    <main>
      <Navbar />
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: `Webdesign ${region.city}`, item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${url}#localbusiness`,
            name: `Fylu – Webdesign ${region.city}`,
            description: `Webdesign Agentur aus Saarlouis im Saarland für Unternehmen in ${region.city}. Professionelle Websites, lokale SEO und Google Ads.`,
            url,
            telephone: "+4915168488999",
            email: "kontakt@fylumarketing.de",
            image: "https://www.fylumarketing.de/hero-background.webp",
            logo: "https://www.fylumarketing.de/logo-fylu.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Saarlouis",
              addressLocality: "Saarlouis",
              postalCode: "66740",
              addressRegion: "Saarland",
              addressCountry: "DE",
            },
            geo: { "@type": "GeoCoordinates", latitude: region.lat, longitude: region.lng },
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
            currenciesAccepted: "EUR",
            areaServed: [
              { "@type": "City", name: region.city },
              ...region.nearbyCities.map((c) => ({ "@type": "City", name: c })),
              { "@type": "State", name: region.region },
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: { "@type": "GeoCoordinates", latitude: region.lat, longitude: region.lng },
              geoRadius: "30000",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              bestRating: "5",
              worstRating: "1",
              reviewCount: "20",
            },
            sameAs: [
              "https://www.instagram.com/fylumarketing/",
              "https://www.linkedin.com/in/fynn-schulz/",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Webdesign",
            name: `Webdesign ${region.city}`,
            description: `Professionelles Webdesign für Unternehmen in ${region.city} und Umgebung. Moderne Websites, lokale SEO und Google Ads – transparente Konditionen.`,
            provider: { "@id": "https://www.fylumarketing.de/#organization" },
            areaServed: { "@type": "City", name: region.city },
            offers: [
              {
                "@type": "Offer",
                name: "Basismodell",
                availability: "https://schema.org/InStock",
                url: "https://www.fylumarketing.de/buchen",
              },
              {
                "@type": "Offer",
                name: "Business",
                availability: "https://schema.org/InStock",
                url: "https://www.fylumarketing.de/buchen",
              },
              {
                "@type": "Offer",
                name: "Premium",
                availability: "https://schema.org/InStock",
                url: "https://www.fylumarketing.de/buchen",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pageFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-sm text-stone-500">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 font-medium">Webdesign {region.city}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
            Webdesign {region.city} – Websites, die Kunden bringen
          </h1>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-3xl">
            {region.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/buchen"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98]"
            >
              Anfrage senden
            </Link>
            <Link
              href="/buchen"
              className="bg-white border border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 hover:bg-cyan-50 active:scale-[0.98]"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </section>

      {/* Warum Webdesign */}
      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Warum eine professionelle Website in {region.city} entscheidend ist
          </h2>
          <div className="prose prose-lg prose-stone max-w-none space-y-6">
            {region.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stadt-spezifisches Profil — nur für Top-Tier-Städte mit unique Content.
          Diese Sektion existiert genau aus dem Grund: Google sieht hier
          stadtspezifische Substanz statt generischem Webdesign-Boilerplate. */}
      {region.tier === "top" && (region.economy || region.topIndustries || region.localFact) && (
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-10">
              {region.city} — Wirtschaft, Branchen & lokale Besonderheiten
            </h2>
            {region.economy && (
              <p className="text-lg leading-relaxed text-stone-700 mb-8">{region.economy}</p>
            )}

            {region.topIndustries && region.topIndustries.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-stone-900 mb-4">
                  Stärkste Branchen vor Ort
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-stone-700">
                  {region.topIndustries.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1.5">•</span>
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {region.localFact && (
              <div className="border-l-4 border-amber-600 pl-6 py-2 bg-amber-50/40 mb-10">
                <p className="text-stone-800 italic">{region.localFact}</p>
              </div>
            )}

            {region.microCase && (
              <div className="border border-stone-200 rounded-2xl p-8 bg-stone-50">
                <span className="inline-block text-xs uppercase tracking-wider font-medium text-amber-700 mb-3">
                  Mini-Case · {region.city}
                </span>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  {region.microCase.headline}
                </h3>
                <p className="text-stone-700 leading-relaxed">{region.microCase.body}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Prozess */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Unser Webdesign-Prozess für Unternehmen in {region.city}
          </h2>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Webdesign-Pakete für Unternehmen in {region.city}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "Basismodell",
                price: 'Auf Anfrage',
                pages: "Bis 3 Seiten",
                desc: "Perfekt für den Start: mobiloptimiert, SEO-Basis und Kontaktformular.",
              },
              {
                name: "Business",
                price: 'Auf Anfrage',
                pages: "Bis 6 Seiten",
                desc: "Verkaufsoptimierte Struktur, lokale SEO und Google Business Einrichtung.",
                highlight: true,
              },
              {
                name: "Premium",
                price: 'Auf Anfrage',
                pages: "Unbegrenzt",
                desc: "Premium-Design, Performance-Tuning und Conversion-Optimierung.",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border ${
                  pkg.highlight ? "border-cyan-500 bg-cyan-50" : "border-stone-200 bg-white"
                }`}
              >
                <h3 className="text-lg font-bold text-stone-900 mb-1">{pkg.name}</h3>
                <p className="text-3xl font-extrabold text-cyan-600 mb-2">{pkg.price}</p>
                <p className="text-sm text-stone-500 mb-3">{pkg.pages}</p>
                <p className="text-stone-600 text-sm">{pkg.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/buchen"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 active:scale-[0.98] inline-block"
          >
            Alle Pakete ansehen
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Häufige Fragen zum Webdesign in {region.city}
          </h2>
          <div className="space-y-6">
            {pageFaqs.map((faq, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-cyan-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Bereit für Ihre neue Website in {region.city}?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Kostenloser Entwurf innerhalb von 24 Stunden – unverbindlich. Für Unternehmen in {region.city}
            {region.nearbyCities.length > 0 ? `, ${region.nearbyCities.slice(0, 3).join(", ")}` : ""} und im
            ganzen Saarland.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/buchen"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98]"
            >
              Anfrage senden
            </Link>
            <Link
              href="/buchen"
              className="bg-white border border-cyan-500 text-cyan-600 px-10 py-5 rounded-xl text-xl font-bold transition-all duration-200 hover:bg-cyan-100 active:scale-[0.98]"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-Linking: weitere Städte im Saarland */}
      <section className="py-16 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3 text-center">
            Webdesign auch in anderen Städten im Saarland
          </h2>
          <p className="text-stone-600 text-center mb-8 max-w-2xl mx-auto">
            Ich betreue Unternehmen im gesamten Saarland. Wählen Sie Ihre Stadt für regionale Details:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {relatedRegions.map((r) => (
              <Link
                key={r.slug}
                href={`/webdesign/${r.slug}`}
                className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-center text-stone-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors text-sm font-medium"
              >
                Webdesign {r.city}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/seo-saarland" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">SEO Saarland</Link>
            <Link href="/google-ads-saarland" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">Google Ads Saarland</Link>
            <Link href="/website-erstellen-lassen" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">Website erstellen lassen</Link>
            <Link href="/webdesign-handwerk" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">Webdesign Handwerk</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
