import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { regions, getRegionBySlug } from "@/lib/regions";

const SITE = "https://www.fylumarketing.de";

const faqs = (city: string) => [
  {
    q: `Was kostet eine professionelle Website in ${city}?`,
    a: "Eine professionelle Website beginnt bei mir bei 990€ für das Basismodell mit bis zu 3 Seiten. Das Business-Paket kostet 1.490€ und enthält bis zu 6 Seiten inklusive lokaler SEO und Google Business. Individuelle Lösungen sind auf Anfrage möglich.",
  },
  {
    q: "Wie lange dauert die Erstellung meiner Website?",
    a: "In der Regel ist Ihre Website innerhalb von 2–4 Wochen fertig. Den ersten Design-Entwurf erhalten Sie schon innerhalb von 24 Stunden nach unserem Erstgespräch – kostenlos und unverbindlich.",
  },
  {
    q: "Werden meine Kunden mich bei Google finden?",
    a: "Ja. Jede Website enthält eine SEO-Basis-Optimierung mit OnPage-SEO, technischer Optimierung und Google Business Einrichtung. Auf Wunsch betreue ich auch laufend Ihr lokales SEO und Ihre Google Ads.",
  },
  {
    q: "Ist die Website für Smartphones optimiert?",
    a: "Selbstverständlich. Jede Website wird mobile-first entwickelt und auf allen Geräten getestet – Smartphone, Tablet und Desktop. Das ist auch für die Google-Rankings entscheidend.",
  },
  {
    q: "Kann ich die Website später selbst pflegen?",
    a: "Auf Wunsch richte ich ein einfaches CMS ein, mit dem Sie Texte und Bilder selbst aktualisieren können. Alternativ übernehme ich Änderungen für Sie – schnell, unkompliziert und ohne lange Wartezeiten.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Nach dem Livegang lasse ich Sie nicht allein. Je nach Paket erhalten Sie 2–4 Monate Hosting inklusive. Darüber hinaus stehe ich Ihnen für Updates, Änderungen und Support zur Verfügung.",
  },
];

const steps = [
  {
    title: "Erstgespräch",
    text: "Wir lernen uns kennen, ich verstehe Ihr Geschäft, Ihre Ziele und Ihren Markt. Kein Verkaufsdruck – nur ehrliche Beratung.",
  },
  {
    title: "Kostenloser Entwurf in 24h",
    text: "Innerhalb von 24 Stunden erhalten Sie einen ersten Design-Entwurf – unverbindlich. Sie sehen sofort, wie Ihre neue Website aussehen kann.",
  },
  {
    title: "Design & Entwicklung",
    text: "Nach Ihrem Feedback baue ich Ihre Website mit modernster Technik – optimiert auf Geschwindigkeit, SEO und Conversion.",
  },
  {
    title: "Lokale SEO-Optimierung",
    text: "Vor dem Launch optimiere ich Ihre Website für Google: Keywords, technisches SEO, Meta-Tags, Ladezeit und Google Business.",
  },
  {
    title: "Launch & Support",
    text: "Ihre Website geht live – und ich bleibe Ihr fester Ansprechpartner für Updates, Änderungen und Wachstum.",
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
  const title = `Webdesign ${region.city} | Websites, SEO & Google Ads | Fylu`;
  const description = `Webdesigner für ${region.city}: moderne Websites, lokale SEO und Google Ads ab 990€. Persönliche Betreuung, kostenloser Entwurf in 24 Stunden.`;
  return {
    title,
    description,
    alternates: { canonical: url },
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
            name: `Fylu – Webdesign ${region.city}`,
            description: `Webdesign Agentur aus dem Saarland für Unternehmen in ${region.city}. Professionelle Websites, SEO und Google Ads.`,
            url,
            telephone: "+4915168488999",
            email: "kontakt@fylumarketing.de",
            address: {
              "@type": "PostalAddress",
              addressLocality: region.city,
              addressRegion: region.region,
              addressCountry: "DE",
            },
            geo: { "@type": "GeoCoordinates", latitude: region.lat, longitude: region.lng },
            priceRange: "€€",
            areaServed: [
              { "@type": "City", name: region.city },
              ...region.nearbyCities.map((c) => ({ "@type": "City", name: c })),
              { "@type": "State", name: region.region },
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
              href="/angebote"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98]"
            >
              Kostenlosen Entwurf sichern
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

      {/* Prozess */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Mein Webdesign-Prozess für Unternehmen in {region.city}
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
                price: "990€",
                pages: "Bis 3 Seiten",
                desc: "Perfekt für den Start: mobiloptimiert, SEO-Basis und Kontaktformular.",
              },
              {
                name: "Business",
                price: "1.490€",
                pages: "Bis 6 Seiten",
                desc: "Verkaufsoptimierte Struktur, lokale SEO und Google Business Einrichtung.",
                highlight: true,
              },
              {
                name: "Premium",
                price: "2.490€",
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
            href="/angebote"
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
              href="/angebote"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98]"
            >
              Kostenlosen Entwurf sichern
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

      <Footer />
    </main>
  );
}
