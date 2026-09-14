import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was ist Local SEO?',
    a: 'Local SEO ist die gezielte Optimierung Ihrer digitalen Präsenz für Suchanfragen mit lokalem Bezug wie „Kanzlei Saarbrücken", „Zahnarzt Merzig" oder „Handwerker Saarlouis". Kernstück ist das Google-Unternehmensprofil, ergänzt durch NAP-Konsistenz, lokale Backlinks, Reviews und strukturierte Daten auf der Website.',
  },
  {
    q: 'Was ist NAP-Konsistenz?',
    a: 'NAP steht für Name, Address, Phone. Die drei Angaben müssen im Google-Unternehmensprofil, im Impressum, in strukturierten Daten und in allen Branchenverzeichnissen exakt identisch sein, bis hin zu Schreibweise, Abkürzungen und Formatierung der Telefonnummer. Konsistenz ist die Voraussetzung dafür, dass Google Ihre Entität eindeutig auflöst.',
  },
  {
    q: 'Wie wichtig ist das Google-Unternehmensprofil?',
    a: 'Signale aus dem Google-Unternehmensprofil zählen zu den stärksten Faktoren für die Sichtbarkeit im lokalen Ranking und im Map Pack. Ohne vollständiges Profil ist eine Top-Platzierung bei lokalen Suchanfragen faktisch ausgeschlossen, auch wenn die Website technisch einwandfrei ist.',
  },
  {
    q: 'Wie sammelt man Bewertungen richtig?',
    a: 'Persönliche Bitte am Projektende, QR-Code oder Link nach dem Termin, E-Mail an Bestandskunden. Nicht erlaubt sind Anreize (Rabatte, Gutscheine, Geschenke), Review-Gating (nur Zufriedene fragen) oder inhaltliche Vorgaben. Verstöße führen zu Löschung und im schlimmsten Fall zu einer Abmahnung nach UWG.',
  },
  {
    q: 'Welche Verzeichnisse zählen 2026 noch?',
    a: 'Pflicht: Google, Bing Places, Apple Business Connect. Hoch relevant für DACH: Gelbe Seiten, Das Örtliche, 11880, Cylex, meinestadt.de. Für B2B zusätzlich LinkedIn und XING. Wichtig ist Konsistenz und die Bereinigung veralteter Einträge, nicht die schiere Zahl.',
  },
  {
    q: 'Wie schnell wirkt Local SEO?',
    a: 'Erste Effekte auf der Map und in lokalen Rankings zeigen sich innerhalb von zwei bis sechs Wochen. Nachhaltige Verschiebungen und der Aufbau von Prominenz durch Bewertungen und Backlinks brauchen drei bis neun Monate.',
  },
  {
    q: 'Kann Local SEO auch für Anbieter ohne Ladengeschäft funktionieren?',
    a: 'Ja. Service-Area-Businesses (Dienstleister ohne Kundenverkehr am Standort) können das Google-Unternehmensprofil vollwertig nutzen und ihr Servicegebiet definieren. Wichtig ist die klare Konfiguration als SAB, damit Google die Präsenz korrekt einordnet.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'GBP-Aufbau',
    cadence: 'einmalig',
    body: 'Vollständige Einrichtung oder Neuaufbau: Kategorien, Leistungen, Attribute, Öffnungszeiten, Fotos, Beschreibung. Servicegebiet oder Ladenlokal, sauber konfiguriert.',
  },
  {
    ordinal: 'II',
    label: 'NAP-Consistency',
    cadence: 'einmalig',
    body: 'Master-Dokument mit Name, Adresse, Telefon. Prüfung und Bereinigung bestehender Einträge in den Top-Verzeichnissen, saubere Nachpflege in Impressum und Schema.',
  },
  {
    ordinal: 'III',
    label: 'Review-Engine',
    cadence: 'laufend',
    body: 'Prozess zur systematischen Sammlung von Google-Bewertungen: rechtssicher, ohne Anreize, mit Antwortquote nahe 100 Prozent. Aktive Beantwortung binnen 48 Stunden.',
  },
];

const rankingFactors = [
  {
    label: 'Google Business Profile',
    weight: '32 %',
    body: 'Vollständigkeit, Aktivität, Kategorien und Attribute des Profils. Der stärkste einzelne Signalblock im Local Pack.',
  },
  {
    label: 'On-Page-Signale',
    weight: '19 %',
    body: 'LocalBusiness-Schema, lokale Landingpages, konsistente NAP-Angaben, saubere technische SEO-Foundation auf der Website.',
  },
  {
    label: 'Bewertungen',
    weight: '16-20 %',
    body: 'Anzahl, Frische und Antwortquote der Google-Bewertungen. Frische Reviews aus den letzten 90 Tagen tragen überproportional.',
  },
  {
    label: 'Links',
    weight: '15 %',
    body: 'Lokale und thematisch relevante Backlinks: Presse, Verbände, Kunden, Partner, lokales Sponsoring.',
  },
  {
    label: 'Verhaltenssignale',
    weight: '8-10 %',
    body: 'Anrufe direkt aus dem Profil, Wegbeschreibungs-Anfragen, Foto-Aufrufe, Klicks auf die Website.',
  },
  {
    label: 'Citations',
    weight: '7 %',
    body: 'Einträge in Branchenverzeichnissen. Wichtig ist Konsistenz, nicht Menge. Verzeichnisse dienen als Trust-Signal.',
  },
];

export default function LocalSeoSaarlandPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fylumarketing.de' },
              { '@type': 'ListItem', position: 2, name: 'Local SEO Saarland', item: 'https://www.fylumarketing.de/local-seo-saarland' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://www.fylumarketing.de/local-seo-saarland#service',
            name: 'Local SEO Saarland',
            description:
              'Google-Unternehmensprofil, NAP-Konsistenz, Reviews und lokale Signale aus Saarlouis. Fylu Marketing hilft Unternehmen jeder Phase, ihre Online-Präsenz aufzubauen und zu skalieren.',
            serviceType: 'Local SEO',
            url: 'https://www.fylumarketing.de/local-seo-saarland',
            provider: { '@id': 'https://www.fylumarketing.de/#organization' },
            areaServed: [
              { '@type': 'State', name: 'Saarland' },
              { '@type': 'Country', name: 'Deutschland' },
            ],
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              url: 'https://www.fylumarketing.de/buchen',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.fylumarketing.de/local-seo-saarland#webpage',
            url: 'https://www.fylumarketing.de/local-seo-saarland',
            name: 'Local SEO Saarland · Fylu Marketing',
            description:
              'Google-Unternehmensprofil, NAP-Konsistenz, Reviews und lokale Backlinks aus Saarlouis.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            mainEntity: { '@id': 'https://www.fylumarketing.de/local-seo-saarland#service' },
            about: { '@type': 'Thing', name: 'Local SEO' },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '[data-speakable]'],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'de-DE',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-[var(--background-warm)] border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
            <Link href="/" className="hover:text-cyan-700 transition-colors">Home</Link>
            <span className="mx-2 text-stone-400">·</span>
            <Link href="/seo-saarland" className="hover:text-cyan-700 transition-colors">SEO</Link>
            <span className="mx-2 text-stone-400">·</span>
            <span className="text-stone-900 font-medium">Local SEO Saarland</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-36 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 80% 60% at 40% 40%, black 30%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 60% at 40% 40%, black 30%, transparent 80%)',
            }}
          />
          <div className="absolute bottom-0 left-0 w-[55vw] h-[45vw] bloom-cyan" />
          <div className="noise-overlay opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Local SEO · Lokale Sichtbarkeit</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Local SEO Saarland.{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Für Suchen mit Ortsbezug.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Local SEO ist die gezielte Optimierung Ihrer digitalen Präsenz für
              Suchanfragen mit lokalem Bezug. Wir bringen Ihr Google-Unternehmensprofil
              auf Vollständigkeit, sorgen für konsistente NAP-Angaben und bauen
              systematisch Bewertungen und lokale Signale auf.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/buchen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                <span>Vorgespräch buchen</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#local-module"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Module ansehen</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Ranking-Faktoren */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§01</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Was Google 2026 gewichtet
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Sechs Signalblöcke,{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                nach Gewicht sortiert.
              </span>
            </h2>
            <p className="mt-6 text-stone-600 max-w-2xl leading-relaxed">
              Angaben nach Whitespark Local Search Ranking Factors 2026,
              erhoben unter 47 Fachexperten für den lokalen Suchraum.
            </p>
          </FadeInSection>
          <div className="mt-14 space-y-3">
            {rankingFactors.map((f, i) => (
              <FadeInSection key={f.label} delay={0.06 + i * 0.04}>
                <div className="bg-[var(--background-warm)] rounded-2xl border border-stone-200/70 p-6 md:p-7">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-display italic text-cyan-700 text-lg leading-none">{f.weight}</span>
                    <h3 className="text-[1.05rem] font-semibold text-[var(--ink)]">{f.label}</h3>
                  </div>
                  <p className="text-stone-700 leading-relaxed text-[0.95rem] pl-[3.75rem]">
                    {f.body}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Module */}
      <section id="local-module" className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Module
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Drei Ebenen an{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Local-SEO-Arbeit.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Einzeln buchbar oder als abgestimmte Ergänzung zu Ihrem Fylu-Auftritt.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <FadeInSection key={m.ordinal} delay={0.1 + i * 0.08}>
                <div className="bg-white rounded-3xl p-8 border border-stone-200/70 premium-lift h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 mb-2">
                        Modul {m.ordinal}
                      </div>
                      <h3 className="font-display italic text-3xl md:text-[2.1rem] text-[var(--ink)] leading-none">
                        {m.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-stone-700 text-[0.95rem] leading-relaxed mb-8">
                    {m.body}
                  </p>
                  <div className="mt-auto pt-6 border-t border-dashed border-stone-200">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                      {m.cadence}
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <p className="mt-10 text-center text-[11px] uppercase tracking-[0.22em] text-stone-500">
            Konditionen individuell im Vorgespräch
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§03</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Fragen
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em] mb-12">
              Ehrlich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                beantwortet.
              </span>
            </h2>
          </FadeInSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="bg-[var(--background-warm)] rounded-2xl border border-stone-200/70 p-6 md:p-7">
                  <h3 className="text-[15px] md:text-base font-semibold text-[var(--ink)] mb-3 flex items-baseline gap-3">
                    <span className="font-display italic text-cyan-700 text-sm leading-none">0{i + 1}</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-[0.95rem] pl-6">
                    {faq.a}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <div className="hairline-rule w-24 mx-auto mb-8" />
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Bereit für ein{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                sauberes lokales Fundament?
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

      <Footer />
    </main>
  );
}
