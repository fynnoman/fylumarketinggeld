'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Case = {
  client: string;
  owner: string;
  image: string;
  industry: string;
  location: string;
  title: string;
  story: string;
  services: string[];
  url: string;
  urlLabel: string;
};

const cases: Case[] = [
  {
    client: 'MG Gebäudeservice',
    owner: 'Gianluca Stira',
    image: '/mg-geb%C3%A4ude.png',
    industry: 'Gebäudeservice',
    location: 'Köln & Düsseldorf',
    title: 'Digital-nativer Auftritt im konservativen Facility-Markt.',
    story:
      'Für die Skalierung auf über 260 Fachkräfte brauchte MG einen Auftritt, der Zertifizierungen (ISO 9001, ISO 14001, RAL GZ 902) sichtbar trägt und neben etablierten Anbietern nicht klein wirkt. Ergebnis: Top-3-Wahrnehmung in Köln & Düsseldorf innerhalb von zwölf Monaten.',
    services: ['Website', 'Marken-Architektur', 'Digitale Tools'],
    url: 'https://mg-gebaeudeservice.de',
    urlLabel: 'mg-gebaeudeservice.de',
  },
  {
    client: 'Galabau Eifler',
    owner: 'Kevin Eifler',
    image: '/galabau.png',
    industry: 'Garten- & Landschaftsbau',
    location: 'Saarbrücken',
    title: 'Vom Handwerksbetrieb zum Studio mit Handschrift.',
    story:
      'Editorial-Auftritt für einen Landschaftsbauer mit Anspruch. Große Serif-Typo, kuratierte Projekt-Galerie, Vorher/Nachher-Strecken — der Betrieb wird zur Marke, die man sich merkt. Anfragen kommen sortierter und mit klarem Budget-Verständnis.',
    services: ['Website', 'Editorial-Design', 'Projekt-Storytelling'],
    url: 'https://galabau-eifler.de',
    urlLabel: 'galabau-eifler.de',
  },
  {
    client: 'Oufa Hairstyling',
    owner: 'Oufa Youssef',
    image: '/oufa.png',
    industry: 'Friseur-Atelier',
    location: 'Saarbrücken',
    title: 'Ein Auftritt auf Weltmeister-Niveau.',
    story:
      'Oufa Youssef ist Weltmeisterin im Hairstyling. Der bisherige Auftritt hat davon nichts erzählt. Neu: Awards prominent inszeniert, Termin-Buchung ohne Umweg, Social-Anbindung an @oufa_hairstyling — vom Salon zum Atelier mit klarer Positionierung.',
    services: ['Website', 'Terminbuchung', 'Award-Inszenierung'],
    url: 'https://www.oufa-hairstyling.de',
    urlLabel: 'oufa-hairstyling.de',
  },
  {
    client: 'PB Fahrzeugpflege',
    owner: 'Karsten Becker',
    image: '/PB.png',
    industry: 'Fahrzeugaufbereitung & Keramikversiegelung',
    location: 'Saarlouis · Saarland · Luxemburg',
    title: 'Über 25 Jahre Handwerk, endlich sichtbar.',
    story:
      'Seit 1997 auf Premium-Fahrzeugaufbereitung spezialisiert — die alte Website hat davon nichts erzählt. „The Art of Detailing" mit prominenten Trust-Signalen (4,92/5 · 648 ProvenExpert · 184 Google), klarer Anfrage-Strecke und ruhiger Bildsprache. Vom Werkstattbetrieb zur festen Adresse für Sportwagen und Oldtimer.',
    services: ['Website', 'Trust-Architektur', 'Lokales SEO'],
    url: 'https://pb-fahrzeugpflege.de',
    urlLabel: 'pb-fahrzeugpflege.de',
  },
  {
    client: 'Demir SpeedConnect',
    owner: 'Adem Demir',
    image: '/demir.png',
    industry: 'Glasfaser & Tiefbau',
    location: 'Saarland · Deutschland',
    title: '+25 % Anfragen bei gleichem Budget.',
    story:
      'B2B-Dienstleister im Infrastrukturmarkt mit langen Vertriebszyklen. Klare Verkaufsarchitektur, dominante Typo, direkter CTA — 25 % mehr Anfragen bei identischem Ads-Budget. Und, wichtiger, spürbar bessere Qualität der Anfragen.',
    services: ['Website', 'Conversion-Architektur', 'B2B-Vertrieb'],
    url: 'https://demir-speedconnect.de',
    urlLabel: 'demir-speedconnect.de',
  },
  {
    client: 'Bäckerei Weidmann',
    owner: 'Frau Weidmann',
    image: '/weidmann.png',
    industry: 'Bäckerei & Konditorei',
    location: 'St. Ingbert',
    title: 'Traditionsbäckerei mit editorialer Bildsprache.',
    story:
      'Handwerk vor Ort sichtbar gemacht — Sortiment, Backstube, Öffnungszeiten und Vor-Ort-Erlebnis in einem ruhigen editorialen Layout. Der Besuch wird zur klaren Handlungsaufforderung, nicht ein weiterer Menüpunkt.',
    services: ['Website', 'Editorial-Design', 'Lokale Sichtbarkeit'],
    url: 'https://baeckerei-weidmann.de',
    urlLabel: 'baeckerei-weidmann.de',
  },
  {
    client: 'Salif Gebäudeservice',
    owner: 'Salif Ramadan',
    image: '/salif.png',
    industry: 'Gebäudeservice',
    location: 'Pirmasens · Kaiserslautern · Westpfalz',
    title: 'Neu am Markt — sichtbar auf Augenhöhe.',
    story:
      'Junger Gebäudeservice, der von Anfang an nicht wie einer aussehen sollte. Editorial-Auftritt mit dominanter Typo, industriellem Kontrast und klaren Standort-Signalen (Pirmasens · Kaiserslautern · Westpfalz) — sichtbar auf Augenhöhe mit deutlich älteren Mitbewerbern, bereits im ersten Monat mehrere neue Klienten.',
    services: ['Website', 'Marken-Aufbau', 'Lokale Sichtbarkeit'],
    url: 'https://www.salif-gebaeudeservice.de',
    urlLabel: 'salif-gebaeudeservice.de',
  },
];

export default function HorizontalCases() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="klienten"
      className="relative bg-[var(--background-warm)] overflow-hidden scroll-mt-24 isolate"
      aria-label="Referenzen"
    >
      {/* Header — editorial */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §03
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Referenzen
              </span>
            </div>
            <h2 className="text-[2.6rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold text-[var(--ink)] tracking-[-0.04em]">
              Häuser,{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                die für sich sprechen
              </span>
              .
            </h2>
            <p className="mt-6 md:mt-8 max-w-lg text-base md:text-lg text-stone-600 leading-relaxed">
              Sieben Klienten. Sieben unterschiedliche Märkte. Ein gemeinsamer Nenner:
              Der Auftritt trägt heute, was das Unternehmen tatsächlich ist.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-stone-400 font-medium">
            <span className="rule-tick text-stone-400" />
            <span>Sieben Referenzen · seit 2024</span>
          </div>
        </motion.div>
      </div>

      {/* Cases — vertical alternating full-width blocks */}
      <div className="relative z-10 space-y-28 md:space-y-40 pb-28 md:pb-40">
        {cases.map((c, i) => (
          <CaseBlock key={c.client} data={c} index={i} />
        ))}
      </div>

      {/* Big background outline label */}
      <div
        aria-hidden
        className="absolute top-[4%] right-[-4vw] pointer-events-none select-none rotate-[8deg] origin-top-right"
      >
        <div className="text-outline font-display italic font-normal text-[16vw] leading-none opacity-30">
          Referenzen
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ data, index }: { data: Case; index: number }) {
  const isOdd = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.9, ease }}
      className="relative max-w-[1400px] mx-auto px-5 md:px-8"
    >
      <div
        className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
          isOdd ? 'lg:[direction:rtl]' : ''
        }`}
      >
        {/* Image side */}
        <div
          className={`lg:col-span-8 relative ${
            isOdd ? 'lg:[direction:ltr]' : ''
          }`}
        >
          <motion.a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="group relative block rounded-2xl md:rounded-[1.75rem] overflow-hidden bg-[var(--ink)] shadow-[0_30px_80px_-20px_rgba(12,14,16,0.35)] ring-1 ring-black/5"
            aria-label={`${data.client} — Website öffnen`}
          >
            {/* Browser chrome — subtle */}
            <div className="relative flex items-center gap-2 px-4 py-3 bg-[var(--ink)]/95 border-b border-white/5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[10px] md:text-[11px] font-mono tracking-[0.14em] text-stone-500 truncate">
                {data.urlLabel}
              </span>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/9] bg-white overflow-hidden">
              <Image
                src={data.image}
                alt={`${data.client} — Website Screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                priority={index < 2}
              />
              {/* Hover veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover pill */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur text-[var(--ink)] text-xs font-semibold tracking-[0.02em] shadow-lg">
                  Website öffnen
                  <span className="text-[var(--cyan-deep)]">→</span>
                </span>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Text side */}
        <div
          className={`lg:col-span-4 ${
            isOdd ? 'lg:[direction:ltr]' : ''
          }`}
        >
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
              0{index + 1}
            </span>
            <span className="rule-tick text-stone-400" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-stone-500">
              {data.industry}
            </span>
          </div>

          <h3 className="text-2xl md:text-[1.75rem] lg:text-3xl font-semibold text-[var(--ink)] leading-[1.15] tracking-[-0.02em] mb-5">
            {data.title}
          </h3>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5 text-sm">
            <span className="text-[var(--ink)] font-semibold">{data.client}</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-600">
              <span className="font-display italic text-stone-500 mr-1.5">mit</span>
              {data.owner}
            </span>
          </div>

          <p className="text-stone-600 text-[15px] md:text-base leading-relaxed mb-7">
            {data.story}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {data.services.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full bg-white border border-stone-200 text-[11px] font-medium tracking-[0.02em] text-stone-700"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-5 border-t border-stone-200/80">
            <span className="text-[10px] uppercase tracking-[0.32em] text-stone-400 font-medium">
              Standort
            </span>
            <span className="text-sm text-stone-700">{data.location}</span>
          </div>

          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-deep)] hover:text-[var(--ink)] transition-colors"
          >
            <span>{data.urlLabel}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
