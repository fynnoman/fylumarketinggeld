import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Team & Studio | Die Menschen hinter Fylu | Webdesign Saarland',
  description:
    'Das Studio hinter Fylu — vier Spezialisten, die Strategie, Design, Code und Sichtbarkeit unter ein Dach bringen. Kein Outsourcing, kein Account-Manager-Pingpong, sondern ein eingespieltes Team aus dem Saarland.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Team & Studio | Fylu Webdesign Saarland',
    description:
      'Lernen Sie das Fylu-Studio kennen — Strategie, Design, Code und SEO aus einer Hand.',
    url: 'https://www.fylumarketing.de/team',
    type: 'website',
    locale: 'de_DE',
  },
};

type Member = {
  name: string;
  role: string;
  short: string;
  bio: string;
  image: string;
  imagePosition?: string;
  initials: string;
  focus: string[];
};

const team: Member[] = [
  {
    name: 'Fynn Schulz',
    role: 'Inhaber & Kreativleitung',
    short: 'Creative Direction · Kundenführung',
    bio: 'Gründer von Fylu. Verantwortet die kreative Richtung jedes Projekts und die direkte Zusammenarbeit mit unseren Kunden — vom ersten Strategiegespräch bis zum Live-Gang. Über fünf Jahre Erfahrung in Webdesign, Brand-Aufbau und lokalem Marketing im Saarland.',
    image: '/64bb3620-f0df-4887-a72b-6f4e69750fd8.webp',
    imagePosition: 'object-[50%_25%]',
    initials: 'FS',
    focus: ['Creative Direction', 'Kundenführung', 'Brand-Story'],
  },
  {
    name: 'Yukio Sato',
    role: 'Head of Strategy',
    short: 'Marktstrategie · Analyse',
    bio: 'Verantwortet Markt- und Wettbewerbsanalysen, Positionierungs-Strategie und das datenbasierte Fundament unserer Projekte. Übersetzt Branchen- und Suchverhalten in klare strategische Empfehlungen, bevor das erste Layout entsteht.',
    image: '/team/yukio-sato.png',
    initials: 'YS',
    focus: ['Marktanalyse', 'Positionierung', 'Conversion-Audit'],
  },
  {
    name: 'Julian Stosse',
    role: 'Technische Leitung',
    short: 'Lead Developer · Performance',
    bio: 'Verantwortet die technische Substanz unserer Projekte: Next.js-Architektur, sauberer Code, höchste Core-Web-Vitals-Werte. Sorgt dafür, dass jede Website nicht nur gut aussieht, sondern in der Google-Suche, auf dem Smartphone und unter Last spürbar überlegen ist.',
    image: '/team/julian-stosse-v2.png',
    initials: 'JS',
    focus: ['Next.js & React', 'Core Web Vitals', 'Technisches SEO'],
  },
  {
    name: 'Noelle Dohr',
    role: 'Head of Marketing',
    short: 'SEO · Performance Marketing',
    bio: 'Verantwortet die Sichtbarkeit unserer Kunden — von lokaler SEO im Saarland bis zu skalierten Google-Ads-Kampagnen. Konzipiert Content-Strategien, betreut Reporting und sorgt dafür, dass aus Traffic messbare Anfragen werden.',
    image: '/team/noelle-dohr.png',
    initials: 'ND',
    focus: ['Lokale SEO', 'Google Ads', 'Content-Strategie'],
  },
];

const principles = [
  {
    kicker: '01',
    title: 'Ein Team. Ein Verantwortlicher.',
    body: 'Bei uns gibt es keinen Account-Manager, der zwischen Ihnen und der eigentlichen Arbeit sitzt. Sie sprechen direkt mit den Menschen, die Ihre Website konzipieren, gestalten, bauen und sichtbar machen. Entscheidungen fallen in Stunden, nicht in Wochen.',
  },
  {
    kicker: '02',
    title: 'Strategie vor Pixel.',
    body: 'Jedes Projekt beginnt mit einer gemeinsamen Strategie-Sitzung. Fynn führt das Gespräch und skizziert die kreative Richtung, Yukio liefert Markt- und Wettbewerbsanalyse, Noelle bringt die SEO-Perspektive ein, Julian prüft technische Machbarkeit. Bevor irgendjemand ein Tool öffnet, ist klar, was die Website leisten muss.',
  },
  {
    kicker: '03',
    title: 'Werkstatt, nicht Agentur.',
    body: 'Wir arbeiten wie ein Atelier: kleine, eingespielte Crew, kurze Wege, hohe Substanz. Statt zwanzig parallele Projekte zu jonglieren, betreuen wir wenige Kunden gleichzeitig — dafür mit voller Aufmerksamkeit. So entstehen Websites, die nicht nach Vorlage aussehen.',
  },
  {
    kicker: '04',
    title: 'Ergebnis vor Aufwand.',
    body: 'Eine Website ist kein Selbstzweck. Wir messen unseren Erfolg an Anfragen, Rankings und Umsatz unserer Kunden — nicht an gestalterischer Selbstverliebtheit. Deshalb iterieren wir nach dem Launch weiter, prüfen, optimieren. 90 Tage lang, ohne Aufpreis.',
  },
];

const SITE = 'https://www.fylumarketing.de';

export default function TeamPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Team', item: `${SITE}/team` },
    ],
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fylu',
    url: SITE,
    logo: `${SITE}/logo-fylu.webp`,
    employee: team.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      worksFor: { '@type': 'Organization', name: 'Fylu' },
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <main className="bg-white text-[var(--ink)]">
        {/* ─────────────────────  HERO  ───────────────────── */}
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-28 overflow-hidden isolate">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[60vw] max-h-[700px]"
              style={{
                background:
                  'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.18), transparent 70%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
                backgroundSize: '34px 34px',
                maskImage:
                  'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
              }}
            />
          </div>

          <div className="container mx-auto px-5 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 mb-7">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none">
                  §6
                </span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                  Das Studio dahinter
                </span>
              </div>

              <h1 className="text-[2.6rem] leading-[1.04] sm:text-5xl md:text-[3.8rem] lg:text-[4.6rem] lg:leading-[1] font-semibold tracking-[-0.035em]">
                Vier Menschen.{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Ein Studio.
                </span>{' '}
                Kein Mittelmaß.
              </h1>

              <p className="mt-9 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Hinter Fylu steht keine Agentur mit Karteileichen-Mitarbeitern und
                outgesourcter Produktion. Sondern ein eingespieltes Studio aus dem
                Saarland — vier Spezialisten für Strategie, Design, Code und
                Sichtbarkeit, die alle Projekte gemeinsam tragen.
              </p>

              <div className="mt-12 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-stone-400">
                <span className="w-10 h-px bg-stone-300" />
                <span>Saarlouis · seit 2025</span>
                <span className="w-10 h-px bg-stone-300" />
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────  TEAM GRID  ───────────────── */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-stone-50/60 to-white">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16 md:mb-20 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cyan-deep)]">
                  Die Crew
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] max-w-2xl mx-auto leading-[1.1]">
                  Eingespielt. Greifbar.{' '}
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    Verantwortlich.
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-8">
                {team.map((m, i) => (
                  <article
                    key={m.name}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Circular portrait */}
                    <div className="relative">
                      {/* Soft halo behind */}
                      <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-100/70 via-cyan-50/40 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Decorative ring */}
                      <div className="absolute -inset-2 rounded-full border border-stone-200/70 group-hover:border-cyan-300/70 group-hover:scale-105 transition-all duration-500" />

                      <div className="relative w-44 h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden bg-stone-100 ring-1 ring-stone-200 shadow-[0_18px_60px_-24px_rgba(12,14,16,0.35)] group-hover:shadow-[0_24px_70px_-20px_rgba(6,182,212,0.35)] transition-shadow duration-500">
                        <Image
                          src={m.image}
                          alt={`${m.name} — ${m.role} bei Fylu`}
                          fill
                          sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 210px"
                          className={`object-cover transition-transform duration-700 group-hover:scale-[1.06] ${
                            m.imagePosition ?? 'object-center'
                          }`}
                          loading={i === 0 ? 'eager' : 'lazy'}
                        />
                      </div>

                      {/* Position number */}
                      <span className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center font-display italic text-[var(--cyan-deep)] text-sm">
                        0{i + 1}
                      </span>

                      {/* Initials chip */}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--ink)] text-white text-[10px] font-semibold tracking-[0.18em] uppercase shadow-md">
                        {m.initials}
                      </span>
                    </div>

                    {/* Name + role */}
                    <h3 className="mt-9 text-xl md:text-[1.4rem] font-semibold leading-tight">
                      {m.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] uppercase tracking-[0.15em] text-[var(--cyan-deep)] font-medium">
                      {m.role}
                    </p>
                    <p className="mt-1 text-xs text-stone-400 font-medium tracking-wide">
                      {m.short}
                    </p>

                    {/* Bio */}
                    <p className="mt-5 text-sm text-stone-600 leading-relaxed max-w-[26ch]">
                      {m.bio}
                    </p>

                    {/* Focus chips */}
                    <ul className="mt-6 flex flex-wrap justify-center gap-1.5">
                      {m.focus.map((f) => (
                        <li
                          key={f}
                          className="text-[10.5px] font-medium tracking-wide text-stone-500 px-2.5 py-1 rounded-full bg-stone-100/80 border border-stone-200/70"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────  ZUSAMMENARBEIT  ───────────── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cyan-deep)]">
                  Unsere Zusammenarbeit
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
                  Wie wir{' '}
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    miteinander
                  </span>{' '}
                  arbeiten.
                </h2>
                <p className="mt-6 text-stone-500 leading-relaxed text-[15px]">
                  Vier Spezialgebiete, eine gemeinsame Linie. Wir glauben nicht
                  an Hierarchien um ihrer selbst willen — sondern an klare
                  Verantwortlichkeiten, kurze Wege und ehrliche Kritik im Team.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-10 md:space-y-12">
                {principles.map((p) => (
                  <div
                    key={p.kicker}
                    className="grid grid-cols-[auto_1fr] gap-5 md:gap-7 items-start group"
                  >
                    <div className="flex flex-col items-center pt-1">
                      <span className="font-display italic text-2xl text-[var(--cyan-deep)] leading-none">
                        {p.kicker}
                      </span>
                      <span className="mt-3 w-px h-12 bg-gradient-to-b from-stone-300 to-transparent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-stone-600 leading-relaxed text-[15.5px]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────  ABLAUF / RHYTHMUS  ───────────── */}
        <section className="py-24 md:py-32 bg-stone-50/70 border-y border-stone-100">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cyan-deep)]">
                  Der Rhythmus
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-3xl mx-auto">
                  So sieht ein typisches Projekt mit uns aus.
                </h2>
                <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  Wir arbeiten in festen, transparenten Phasen — keine
                  Black-Box-Wochen, keine Wartezeiten ohne Update.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    week: 'Woche 1',
                    title: 'Strategie & Konzept',
                    lead: 'Yukio & Noelle',
                    body: 'Gemeinsames Strategiegespräch, Wettbewerbs- und SEO-Analyse, Positionierungs-Statement, Conversion-Pfade. Sie wissen am Ende der Woche, worauf Ihre Website zielt.',
                  },
                  {
                    week: 'Woche 2 – 4',
                    title: 'Design & Realisation',
                    lead: 'Fynn & Julian',
                    body: 'Art Direction, Wireframes, Premium-Design, technische Umsetzung in Next.js. Sie sehen den Fortschritt in einer Preview-Umgebung und geben strukturiertes Feedback in zwei Runden.',
                  },
                  {
                    week: 'Woche 5 +',
                    title: 'Launch & Sichtbarkeit',
                    lead: 'Gesamtes Team',
                    body: 'Live-Gang, lokale SEO-Schärfung, Google-Unternehmensprofil, Performance-Monitoring. 90 Tage iterative Optimierung — solange, bis die Anfragen messbar steigen.',
                  },
                ].map((phase) => (
                  <div
                    key={phase.title}
                    className="relative bg-white rounded-2xl border border-stone-200/80 p-7 hover:border-cyan-300/70 hover:shadow-[0_18px_50px_-22px_rgba(6,182,212,0.35)] transition-all duration-500"
                  >
                    <span className="inline-block text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[var(--cyan-deep)] mb-5">
                      {phase.week}
                    </span>
                    <h3 className="text-xl md:text-[1.35rem] font-semibold leading-tight tracking-[-0.015em]">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-stone-400 font-medium">
                      Lead: {phase.lead}
                    </p>
                    <p className="mt-5 text-[14.5px] text-stone-600 leading-relaxed">
                      {phase.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────  MANIFEST QUOTE  ───────────── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-display italic text-[var(--cyan-deep)] text-4xl leading-none">
                „
              </span>
              <blockquote className="mt-5 text-2xl md:text-3xl lg:text-[2.4rem] leading-[1.25] font-medium tracking-[-0.02em] text-stone-800">
                Wir bauen die Websites, an denen sich die Konkurrenz im Saarland
                ausrichtet — weil wir abends in der Werkstatt sitzen und nicht
                aufhören, bis jedes Detail{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Maßstäbe setzt.
                </span>
              </blockquote>
              <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-stone-400 font-medium">
                Fynn Schulz · Inhaber, Fylu Studio
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────  CTA  ───────────── */}
        <section className="py-24 md:py-28 bg-gradient-to-b from-stone-50 to-white">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[var(--ink)]">
                Lust, uns persönlich{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  kennenzulernen?
                </span>
              </h2>
              <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-xl mx-auto">
                15 Minuten Strategiegespräch — Sie reden direkt mit Fynn. Kein
                Verkaufsdruck, keine Standard-Slides. Wenn es passt, ziehen wir
                den Rest des Teams hinzu.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                <Link
                  href="/buchen"
                  className="group inline-flex items-center justify-center gap-2 bg-[var(--ink)] hover:bg-black text-white px-7 py-3.5 rounded-full text-[15px] font-semibold shadow-[0_20px_50px_-15px_rgba(12,14,16,0.4)] transition-all duration-300 hover:-translate-y-[1px]"
                >
                  <span>Strategiegespräch buchen</span>
                  <span className="text-cyan-300 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <a
                  href="mailto:kontakt@fylumarketing.de"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[var(--ink)] px-6 py-3.5 rounded-full text-[15px] font-medium border border-stone-200 transition-all duration-300"
                >
                  Direkt schreiben
                  <span className="text-[var(--cyan-deep)]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
