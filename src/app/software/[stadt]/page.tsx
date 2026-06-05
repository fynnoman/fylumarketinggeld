import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/animated/FadeInSection";
import { regions, getRegionBySlug } from "@/lib/regions";

const SITE = "https://www.fylumarketing.de";

const softwareFaqs = (city: string) => [
  {
    q: `Was kostet Softwareentwicklung in ${city}?`,
    a: `Für Unternehmen in ${city} und Umgebung arbeiten wir mit Festpreis-Modellen: kleine Tools / MVPs ab 8.000€, mittelgroße Custom-Software (ERP/CRM/SaaS) zwischen 25.000–80.000€, komplexe Plattformen ab 50.000€. Stundensätze und versteckte Folgekosten gibt es bei uns nicht.`,
  },
  {
    q: `Welche Software entwickelt ihr für Unternehmen in ${city}?`,
    a: `Web-Apps, interne Tools, ERP- und CRM-Systeme, API-Integrationen, Automatisierungen, AI-Integration und Custom-SaaS. Häufige Anwendungsfälle in ${city}: digitale Auftragsverwaltung für Handwerksbetriebe, Kundenportale für Dienstleister, Bestell- und Reservierungssysteme für Gastronomie, Lager- und Warenwirtschaft für Mittelstand.`,
  },
  {
    q: `Seid ihr in ${city} vor Ort oder remote?`,
    a: `Unser Studio sitzt in Saarlouis — von dort sind alle Saarländer Orte inklusive ${city} in wenigen Minuten erreichbar. Standardmäßig arbeiten wir remote (effizienter, schneller), für Kick-off-Meetings und kritische Workshops kommen wir auf Wunsch vor Ort.`,
  },
  {
    q: `Mit welchen Technologien arbeitet ihr?`,
    a: `Moderner Tech-Stack: TypeScript, React, Next.js, Node.js, Python, PostgreSQL. Cloud: Vercel, AWS, Cloudflare. AI: OpenAI, Anthropic. Wir wählen Tools, die auch in 5 Jahren wartbar sind — keine Hype-Sprachen, keine Microsoft-90er-Stack.`,
  },
  {
    q: `Wie schnell kann ein Projekt für mein Unternehmen aus ${city} starten?`,
    a: `Nach einem 30-Minuten-Discovery-Call (kostenlos) starten wir typischerweise innerhalb von 7–14 Tagen mit der Konzeptphase. Pro Monat nehmen wir maximal 3 neue Software-Projekte an.`,
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
  const url = `${SITE}/software/${region.slug}`;
  const title = `Software ${region.city} | Softwareentwicklung & Programmierer | Fylu`;
  const description = `Softwareentwicklung für Unternehmen in ${region.city}: Web-Apps, ERP, CRM, API-Integration, Automatisierung. Modern, persönlich, mit Festpreis aus Saarlouis.`;
  return {
    title,
    description,
    keywords: [
      `Software ${region.city}`,
      `Softwareentwicklung ${region.city}`,
      `Programmierer ${region.city}`,
      `Webentwickler ${region.city}`,
      `Software-Entwickler ${region.city}`,
      `IT-Dienstleister ${region.city}`,
      `Custom Software ${region.city}`,
      `App entwickeln ${region.city}`,
      "Software Saarland",
      "Programmierer Saarland",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Fylu Webdesign & Software",
      locale: "de_DE",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function SoftwareCityPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const region = getRegionBySlug(stadt);
  if (!region) notFound();

  const url = `${SITE}/software/${region.slug}`;
  const faqs = softwareFaqs(region.city);
  const relatedRegions = regions.filter((r) => r.slug !== region.slug).slice(0, 8);

  return (
    <main>
      <Navbar />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
              { '@type': 'ListItem', position: 2, name: 'Software Saarland', item: `${SITE}/software-saarland` },
              { '@type': 'ListItem', position: 3, name: `Software ${region.city}`, item: url },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Softwareentwicklung',
            name: `Software ${region.city}`,
            description: `Softwareentwicklung für Unternehmen in ${region.city}: Web-Apps, ERP/CRM, API-Integration, Automatisierung. Aus Saarlouis für ${region.city} und das Saarland.`,
            url,
            provider: { '@type': 'Organization', '@id': `${SITE}/#organization` },
            areaServed: {
              '@type': 'City',
              name: region.city,
              containedInPlace: { '@type': 'State', name: region.region },
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb Nav */}
      <div className="bg-[var(--background-warm)] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 pt-20">
          <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan-700 transition-colors">Home</Link>
            <span className="mx-2 text-stone-300">/</span>
            <Link href="/software-saarland" className="hover:text-cyan-700 transition-colors">Software Saarland</Link>
            <span className="mx-2 text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Software {region.city}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-5 md:px-8 bg-white overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 right-0 w-[50vw] h-[50vw]"
            style={{
              background:
                'radial-gradient(50% 50% at 70% 30%, rgba(6,182,212,0.13), transparent 70%)',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInSection>
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Software · {region.city} · {region.region}
              </span>
            </div>
            <h1 className="text-[2.2rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.2rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em] max-w-4xl">
              Software für Unternehmen in{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                {region.city}.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="mt-7 text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
              Custom-Software, Web-Apps, ERP- und CRM-Lösungen für {region.city} und Umgebung — entwickelt aus Saarlouis, mit modernem Tech-Stack, Festpreis statt Stundensatz. {region.intro}
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/angebote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_10px_30px_-12px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                Discovery-Gespräch <span className="text-cyan-300">→</span>
              </Link>
              <Link
                href={`/webdesign/${region.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[15px] font-semibold text-stone-900 bg-white border border-stone-300/80 hover:bg-stone-50 transition-all duration-300"
              >
                Webdesign in {region.city} <span className="text-stone-400">↗</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Was wir in der Stadt entwickeln */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§1</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Software-Bedarf in {region.city}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-8 max-w-3xl">
              Welche Software{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                {region.city}er Unternehmen
              </span>{' '}
              wirklich brauchen.
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
            {region.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              Genau hier setzen wir an: Wir bauen die Software, die im Hintergrund läuft und Ihr Unternehmen in {region.city} skalierbar macht — vom internen Tool, das manuelle Excel-Listen ersetzt, über das Kundenportal mit Login bis zur kompletten ERP-Lösung mit Buchhaltungs-Schnittstelle.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Disziplinen */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12 max-w-3xl">
              Was wir für {region.city}{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">bauen.</span>
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Web-Apps & SaaS', body: `Vollständige Webanwendungen mit Login, Datenbank und Bezahlung — für Unternehmen in ${region.city}.` },
              { title: 'Interne Tools', body: 'Custom-Software, die Excel und manuelle Prozesse ersetzt. Spart Zeit, reduziert Fehler.' },
              { title: 'ERP & CRM', body: `Modulare Unternehmens-Software für Vertrieb, Buchhaltung, Kundenverwaltung — auf den Mittelstand in ${region.city} zugeschnitten.` },
              { title: 'API-Integration', body: 'DATEV, lexoffice, Stripe, HubSpot — wir verbinden Ihre Systeme automatisch.' },
              { title: 'Automatisierung', body: 'Lead-Verteilung, Rechnungsstellung, Reporting — manuelle Arbeit reduzieren.' },
              { title: 'AI-Integration', body: 'ChatGPT, Claude, Embeddings — moderne KI sinnvoll in Ihre Software einbauen.' },
            ].map((s, i) => (
              <FadeInSection key={s.title} delay={i * 0.05}>
                <article className="h-full bg-[var(--background-warm)] rounded-3xl border border-stone-200/70 p-6">
                  <span className="font-display italic font-normal text-2xl text-[var(--cyan-deep)]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--ink)] tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.body}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§2</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Häufige Fragen
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12 max-w-3xl">
              Software in {region.city} —{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">die Basics.</span>
            </h2>
          </FadeInSection>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FadeInSection key={f.q} delay={i * 0.04}>
                <details className="group bg-white rounded-2xl border border-stone-200/70 px-6 py-5 hover:border-cyan-200 transition-colors">
                  <summary className="cursor-pointer flex items-baseline justify-between gap-4 list-none">
                    <span className="flex items-baseline gap-3">
                      <span className="font-display italic text-cyan-700 text-sm leading-none">
                        0{i + 1}
                      </span>
                      <span className="font-medium text-[var(--ink)] text-base md:text-[17px] tracking-tight">
                        {f.q}
                      </span>
                    </span>
                    <span className="text-cyan-700 text-xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-stone-600 leading-relaxed text-[15px]">{f.a}</p>
                </details>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm uppercase tracking-[0.18em] text-stone-500 font-semibold mb-6">
            Software in weiteren Saarland-Städten
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedRegions.map((r) => (
              <Link
                key={r.slug}
                href={`/software/${r.slug}`}
                className="px-4 py-2 rounded-full bg-stone-50 hover:bg-cyan-50 hover:text-cyan-700 border border-stone-200/70 text-sm text-stone-700 transition-colors"
              >
                Software {r.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
