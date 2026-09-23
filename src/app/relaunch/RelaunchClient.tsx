'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import FadeInSection from '@/components/animated/FadeInSection';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { CALENDLY_URL, WHATSAPP_URL } from '@/lib/contact';
import { trackEvent, readUtmFromSession } from '@/lib/track';

const PHONE_TEL = '+4915168488999';
const PHONE_DISPLAY = '+49 151 684 88999';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const problems = [
  'Ihre Website wirkt kleiner als Ihr Unternehmen.',
  'Ihr Auftritt ist über Jahre gewachsen, aber nicht zusammengewachsen.',
  'Ihre Qualität erkennt man online nicht auf den ersten Blick.',
  'Bei Google und KI-Suchen wird nicht klar sichtbar, wofür Ihr Unternehmen steht.',
];

const cases = [
  {
    name: 'MG Gebäudeservice',
    industry: 'Facility · Köln und Düsseldorf',
    screenshot: '/mg-geb%C3%A4ude.png',
    alt: 'MG Gebäudeservice · Website-Relaunch von Fylu Marketing',
    before:
      'Die vorhandene Präsenz spiegelte das operative Niveau nicht wider und wirkte im direkten Vergleich zu größeren Wettbewerbern unterinvestiert.',
    after:
      'Ein institutioneller Auftritt, der Zertifizierungen und Referenzen als tragende Elemente führt, nicht als Fußnoten.',
    href: '/referenzen/mg-gebaeudeservice',
  },
  {
    name: 'PB Fahrzeugpflege',
    industry: 'Fahrzeugaufbereitung · Saarlouis',
    screenshot: '/PB.jpg',
    alt: 'PB Fahrzeugpflege · Website-Relaunch von Fylu Marketing',
    before:
      'Seit 1997 auf Premium-Fahrzeugaufbereitung spezialisiert. Der alte Auftritt hat davon nichts erzählt.',
    after:
      'Ein ruhiger, hochwertiger Auftritt, der die tatsächliche Reputation und die Bewertungslage sichtbar macht.',
    href: '/referenzen/pb-fahrzeugpflege',
  },
  {
    name: 'Galabau Eifler',
    industry: 'Garten- und Landschaftsbau · Saarbrücken',
    screenshot: '/galabau.png',
    alt: 'Galabau Eifler · Website-Relaunch von Fylu Marketing',
    before:
      'Bild-getriebenes Geschäft ohne saubere Projekt-Galerie. Anfragen kamen ohne Rahmen und ohne Budget-Bezug.',
    after:
      'Zurückhaltende Typografie, geordnete Referenz-Strecke, deutlich sortiertere Anfragen.',
    href: '/referenzen/galabau-eifler',
  },
];

const processSteps = [
  { label: 'Positionierung', body: 'Wofür Ihre Firma steht, klar formuliert.' },
  { label: 'Marke', body: 'Ein konsistentes Erscheinungsbild auf allen Kanälen.' },
  { label: 'Website', body: 'Struktur, Design und Umsetzung auf einem Niveau.' },
  { label: 'SEO und GEO', body: 'Sichtbarkeit bei Google und in KI-Suchsystemen.' },
  { label: 'Wachstum', body: 'Iteration, neue Seiten und Betreuung nach dem Launch.' },
];

const trustLogos = [
  { src: '/logos/mg-gebaeudeservice.webp', alt: 'MG Gebäudeservice' },
  { src: '/logos/galabau-eifler.webp', alt: 'Galabau Eifler' },
  { src: '/logos/salif-gebaeudeservice.webp', alt: 'Salif Gebäudeservice' },
  { src: '/logos/demir-speedconnect.webp', alt: 'Demir Speedconnect' },
  { src: '/logos/madma.webp', alt: 'Madma' },
  { src: '/logos/syncrony.webp', alt: 'Syncrony' },
];

const testimonials = [
  {
    quote:
      'Was wirklich heraussticht, ist der Service: extrem schnelle Reaktionszeiten, klare Kommunikation, zügige Umsetzung. Genau diese Art der Zusammenarbeit wünscht man sich.',
    author: 'Karsten Becker',
    role: 'Inhaber PB Fahrzeugpflege',
  },
  {
    quote:
      'Ich bin sehr zufrieden mit der Arbeit die geleistet wurde. Ich kann diese Seite nur sehr weiterempfehlen.',
    author: 'Kevin Eifler',
    role: 'Inhaber Galabau Eifler',
  },
];

type FormState = 'idle' | 'sending' | 'success' | 'error';

type ContactTab = 'anfrage' | 'termin';

export default function RelaunchClient() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formStarted, setFormStarted] = useState(false);
  const [contactTab, setContactTab] = useState<ContactTab>('anfrage');
  const shouldReduceMotion = useReducedMotion();
  const successRef = useRef<HTMLDivElement | null>(null);

  function switchTab(next: ContactTab) {
    setContactTab(next);
    trackEvent('tab_switch', { location: 'relaunch', tab: next });
  }

  useEffect(() => {
    if (state === 'success' && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      trackEvent('form_success', { location: 'relaunch' });
    }
  }, [state]);

  function onFieldFocus() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent('form_start', { location: 'relaunch' });
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === 'sending') return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const firmName = String(fd.get('firmName') || '').trim();
    const website = String(fd.get('website') || '').trim();
    const contactName = String(fd.get('contactName') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const verbessern = String(fd.get('verbessern') || '').trim();
    const zeitraum = String(fd.get('zeitraum') || '').trim();
    const groesse = String(fd.get('groesse') || '').trim();
    const consent = fd.get('consent') === 'on';

    if (!firmName || !website || !contactName || !verbessern) {
      setState('error');
      setErrorMessage(
        'Bitte füllen Sie Unternehmen, Website, Name und Ihr Anliegen aus.',
      );
      return;
    }
    if (!email && !phone) {
      setState('error');
      setErrorMessage('Bitte hinterlegen Sie eine E-Mail oder eine Telefonnummer.');
      return;
    }
    if (!consent) {
      setState('error');
      setErrorMessage('Bitte bestätigen Sie die Datenschutzerklärung.');
      return;
    }

    setState('sending');
    trackEvent('form_submit', { location: 'relaunch', verbessern });
    setErrorMessage('');

    const utm = readUtmFromSession();
    const utmLine = utm
      ? `\n\nQuelle: ${Object.entries(utm)
          .map(([k, v]) => `${k}=${v}`)
          .join(' · ')}`
      : '';

    const message = [
      'Anfrage von Meta-Ads-Landingpage /relaunch',
      '',
      `Verbessern: ${verbessern}`,
      zeitraum ? `Zeitraum: ${zeitraum}` : '',
      utmLine,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firmName,
          contactName,
          email: email || undefined,
          phone,
          brancheDetail: website,
          projectType: 'Digitaler Relaunch',
          groesse,
          preferences: zeitraum,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setState('error');
        setErrorMessage(
          (data && typeof data.error === 'string' && data.error) ||
            'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de.',
        );
        return;
      }

      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMessage(
        'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de.',
      );
    }
  }

  return (
    <main className="bg-white text-[var(--ink)]">
      {/* Sticky Minimal Header */}
      <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 md:px-10 py-3 md:py-4">
          <Link href="/relaunch" aria-label="Fylu Marketing" className="flex items-center">
            <Image
              src="/logo-fylu-marketing.jpeg"
              alt="Fylu Marketing"
              width={220}
              height={110}
              priority
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label="Anrufen"
              onClick={() => trackEvent('cta_click', { location: 'header', label: 'anrufen' })}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-[var(--ink)] transition-colors"
            >
              <PhoneIcon />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => trackEvent('cta_click', { location: 'header', label: 'whatsapp' })}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-colors"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="#anfrage"
              onClick={() =>
                trackEvent('cta_click', { location: 'header', label: 'auftritt_pruefen' })
              }
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] hover:bg-black text-white px-4 md:px-5 py-2.5 md:py-3 text-[13px] font-semibold shadow-[0_10px_28px_-14px_rgba(12,14,16,0.55)] transition-all"
            >
              <span className="hidden sm:inline">Auftritt prüfen lassen</span>
              <span className="sm:hidden">Prüfen</span>
              <span className="text-cyan-400 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden isolate bg-[var(--background-warm)]">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 80% 60% at 30% 50%, black 30%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 60% at 30% 50%, black 30%, transparent 80%)',
            }}
          />
          <div className="absolute top-[10%] right-[-20%] w-[70vw] h-[60vw] bloom-cyan" />
          <div className="noise-overlay opacity-30" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
            {/* Links: Copy */}
            <div>
              <FadeInSection>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/80 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-70 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-stone-700">
                    Digitaler Relaunch für etablierte Unternehmen
                  </span>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.06}>
                <h1 className="text-[2.8rem] leading-[1.02] sm:text-[3.6rem] md:text-[4.2rem] lg:text-[4.8rem] lg:leading-[0.98] font-semibold tracking-[-0.038em]">
                  Ihre Firma ist besser
                  <br />
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    als Ihre Website.
                  </span>
                </h1>
              </FadeInSection>

              <FadeInSection delay={0.14}>
                <p className="mt-8 text-lg md:text-[1.2rem] text-stone-700 leading-relaxed max-w-xl">
                  Wir modernisieren den digitalen Auftritt etablierter Unternehmen im
                  Saarland. Von Marke und Website bis SEO und GEO.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <p className="mt-4 text-[0.95rem] text-stone-500 leading-relaxed max-w-xl">
                  Für Unternehmen, deren Außenauftritt nicht mehr zur tatsächlichen
                  Größe und Qualität passt.
                </p>
              </FadeInSection>

              <FadeInSection delay={0.28}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="#anfrage"
                    onClick={() =>
                      trackEvent('cta_click', {
                        location: 'hero',
                        label: 'auftritt_pruefen',
                      })
                    }
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] hover:bg-black text-white px-7 py-4 text-[15px] font-semibold shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px] transition-all"
                  >
                    <span>Auftritt kostenlos prüfen lassen</span>
                    <span className="text-cyan-400 transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    onClick={() => trackEvent('cta_click', { location: 'hero', label: 'anrufen' })}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 hover:border-stone-400 px-5 py-4 text-[14px] font-semibold text-[var(--ink)] transition-colors"
                  >
                    <PhoneIcon />
                    <span>Anrufen</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('cta_click', { location: 'hero', label: 'whatsapp' })}
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-5 py-4 text-[14px] font-semibold text-white transition-colors"
                  >
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className="mt-5 text-[12px] uppercase tracking-[0.22em] text-stone-500">
                  Kostenlos · unverbindlich · persönlich geprüft
                </div>
              </FadeInSection>
            </div>

            {/* Rechts: Real Case Screenshot */}
            <FadeInSection delay={0.18}>
              <div className="relative">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 30, rotate: 0.4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl overflow-hidden shadow-[0_50px_120px_-30px_rgba(12,14,16,0.35)] border border-stone-200/70 bg-white"
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 bg-stone-50 border-b border-stone-200/70 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
                    <span className="ml-4 text-[10px] font-mono tracking-[0.14em] text-stone-400 truncate">
                      mg-gebaeudeservice.de
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] bg-stone-50">
                    <Image
                      src="/mg-geb%C3%A4ude.png"
                      alt="MG Gebäudeservice · Aktueller Relaunch von Fylu Marketing"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="object-cover object-top"
                    />
                  </div>
                </motion.div>

                {/* Small floating label */}
                <div className="absolute -bottom-4 left-6 md:left-8 bg-white border border-stone-200/80 rounded-full pl-4 pr-5 py-2 shadow-[0_20px_40px_-16px_rgba(12,14,16,0.2)] flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" aria-hidden />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-stone-700 font-medium">
                    Real relaunched · MG Gebäudeservice
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 md:py-32 lg:py-40 px-5 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <FadeInSection>
              <div className="lg:sticky lg:top-28">
                <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-6">
                  Erkennung
                </div>
                <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold tracking-[-0.03em]">
                  Kommt Ihnen das{' '}
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    bekannt vor?
                  </span>
                </h2>
                <p className="mt-6 text-stone-600 leading-relaxed max-w-md">
                  Ihr Unternehmen hat sich weiterentwickelt. Der digitale Auftritt
                  vielleicht nicht.
                </p>
              </div>
            </FadeInSection>

            <div>
              <div className="border-t border-stone-200/80">
                {problems.map((p, i) => (
                  <FadeInSection key={p} delay={0.05 + i * 0.06}>
                    <div className="flex items-baseline gap-6 md:gap-10 py-8 md:py-10 border-b border-stone-200/80">
                      <span className="font-display italic text-[var(--cyan-deep)] text-4xl md:text-6xl leading-none tabular-nums min-w-[3rem] md:min-w-[4rem]">
                        0{i + 1}
                      </span>
                      <span className="text-[1.15rem] md:text-[1.5rem] leading-snug tracking-[-0.01em]">
                        {p}
                      </span>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={0.32}>
                <div className="mt-10">
                  <a
                    href="#anfrage"
                    onClick={() =>
                      trackEvent('cta_click', {
                        location: 'problem',
                        label: 'auftritt_pruefen',
                      })
                    }
                    className="group inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 font-semibold"
                  >
                    <span className="relative">
                      Auftritt prüfen lassen
                      <span className="absolute inset-x-0 bottom-0 h-px bg-cyan-700/40" />
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-24 md:py-32 lg:py-40 px-5 md:px-10 bg-[var(--background-warm)]">
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection>
            <div className="max-w-3xl mb-16 md:mb-24">
              <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-6">
                Ausgewählte Projekte
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold tracking-[-0.03em]">
                Der Unterschied, den ein{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  guter Auftritt macht.
                </span>
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-24 md:space-y-36">
            {cases.map((c, i) => {
              const flip = i % 2 === 1;
              return (
                <FadeInSection key={c.name} delay={0.05}>
                  <div
                    className={`grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center ${
                      flip ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="relative rounded-2xl overflow-hidden shadow-[0_50px_120px_-30px_rgba(12,14,16,0.3)] border border-stone-200/70 bg-white"
                    >
                      <div className="flex items-center gap-1.5 bg-stone-50 border-b border-stone-200/70 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
                        <span className="h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
                        <span className="h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
                        <span className="ml-4 text-[10px] font-mono tracking-[0.14em] text-stone-400 truncate">
                          {c.name.toLowerCase().replace(/\s+/g, '-')}.de
                        </span>
                      </div>
                      <div className="relative aspect-[16/11] bg-stone-50">
                        <Image
                          src={c.screenshot}
                          alt={c.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 780px"
                          className="object-cover object-top"
                        />
                      </div>
                    </motion.div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-stone-500 font-medium mb-4">
                        Case 0{i + 1} · {c.industry}
                      </div>
                      <h3 className="font-display italic text-3xl md:text-[2.4rem] leading-tight text-[var(--ink)] mb-8">
                        {c.name}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.32em] text-stone-400 font-medium mb-2">
                            Ausgangslage
                          </div>
                          <p className="text-stone-700 leading-relaxed text-[1rem]">
                            {c.before}
                          </p>
                        </div>
                        <div className="hairline-rule w-12" />
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-medium mb-2">
                            Nach dem Relaunch
                          </div>
                          <p className="text-stone-800 leading-relaxed text-[1rem]">
                            {c.after}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={c.href}
                        className="mt-8 group inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 font-semibold text-[14px]"
                      >
                        <span className="relative">
                          Case ansehen
                          <span className="absolute inset-x-0 bottom-0 h-px bg-cyan-700/40" />
                        </span>
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* WAS FYLU VERÄNDERT */}
      <section className="py-24 md:py-32 lg:py-40 px-5 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <FadeInSection>
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-6">
                Der Ansatz
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold tracking-[-0.03em]">
                Nicht einfach eine{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  neue Website.
                </span>
              </h2>
              <p className="mt-8 text-stone-700 leading-relaxed text-[1.05rem] md:text-[1.15rem]">
                Wenn der digitale Auftritt nicht mehr zum Unternehmen passt, reicht
                ein neues Layout selten. Wir bringen Positionierung, Marke, Website
                und Sichtbarkeit wieder auf ein gemeinsames Niveau.
              </p>
            </div>
          </FadeInSection>

          {/* Prozess-Linie */}
          <FadeInSection delay={0.1}>
            <div className="mt-20 md:mt-28 relative">
              <div
                className="hidden md:block absolute left-0 right-0 top-[26px] h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"
                aria-hidden
              />
              <ol className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative">
                {processSteps.map((s, i) => (
                  <li key={s.label} className="flex md:flex-col items-start md:items-center gap-5 md:gap-6">
                    <span className="relative flex-shrink-0 inline-flex items-center justify-center h-[52px] w-[52px] rounded-full bg-white border border-stone-300/80 font-display italic text-[var(--cyan-deep)] text-[15px]">
                      0{i + 1}
                    </span>
                    <div className="md:text-center">
                      <div className="font-display italic text-[1.35rem] md:text-[1.55rem] text-[var(--ink)] leading-tight">
                        {s.label}
                      </div>
                      <p className="mt-2 text-[0.9rem] text-stone-500 leading-relaxed max-w-[220px] md:mx-auto">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* VERTRAUEN */}
      <section className="py-24 md:py-32 lg:py-40 px-5 md:px-10 bg-[var(--background-warm)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="relative">
                <div className="relative aspect-[4/5] w-full max-w-[440px] rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src="/64bb3620-f0df-4887-a72b-6f4e69750fd8.webp"
                    alt="Fynn Schulz · Inhaber und Strategie bei Fylu Marketing"
                    fill
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-6 bg-white border border-stone-200/80 rounded-full pl-4 pr-5 py-2 shadow-[0_20px_40px_-16px_rgba(12,14,16,0.2)] flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" aria-hidden />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-stone-700 font-medium">
                    Fynn Schulz · Saarlouis
                  </span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-6">
                  Fylu Marketing
                </div>
                <h2 className="text-[2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold tracking-[-0.03em]">
                  Direkt. Persönlich.{' '}
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    Ohne Agenturapparat.
                  </span>
                </h2>
                <p className="mt-8 text-stone-700 leading-relaxed text-[1.05rem] md:text-[1.1rem] max-w-xl">
                  Bei Fylu sprechen Sie direkt mit den Menschen, die Ihren Auftritt
                  entwickeln und verantworten. Wir arbeiten bewusst mit wenigen
                  Unternehmen gleichzeitig und verbinden Strategie, Design und
                  digitale Umsetzung in einem Projekt.
                </p>

                {/* Testimonials */}
                <div className="mt-10 space-y-8">
                  {testimonials.map((t) => (
                    <div key={t.author} className="border-l-2 border-cyan-700/40 pl-5">
                      <blockquote className="font-display italic text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-stone-800">
                        „{t.quote}"
                      </blockquote>
                      <div className="mt-3 text-[13px] text-stone-500">
                        {t.author} · {t.role} · Google-Bewertung
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Kundenlogo-Zeile */}
          <FadeInSection delay={0.16}>
            <div className="mt-20 md:mt-28 pt-10 md:pt-14 border-t border-stone-200/80">
              <div className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-8 text-center">
                Auszug aus laufenden und abgeschlossenen Projekten
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-10 items-center">
                {trustLogos.map((l) => (
                  <div key={l.src} className="relative h-8 md:h-10">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      fill
                      sizes="140px"
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FORMULAR */}
      <section
        id="anfrage"
        className="relative py-24 md:py-32 lg:py-40 px-5 md:px-10 bg-white text-[var(--ink)] scroll-mt-24 overflow-hidden isolate border-t border-stone-200/70"
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(12,14,16,0.06) 1px, transparent 1.4px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 80%)',
            }}
          />
        </div>

        <div className="max-w-[1000px] mx-auto">
          {state === 'success' ? (
            <div ref={successRef}>
              <FadeInSection>
                <div className="text-center max-w-2xl mx-auto">
                  <div className="hairline-rule w-24 mx-auto mb-8" />
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-medium mb-6">
                    Anfrage angekommen
                  </div>
                  <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold tracking-[-0.03em]">
                    Vielen Dank.{' '}
                    <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                      Wir schauen uns Ihren Auftritt an.
                    </span>
                  </h2>
                  <p className="mt-8 text-stone-600 leading-relaxed text-[1.05rem]">
                    Sie hören persönlich von uns, meist innerhalb von 24 Stunden.
                  </p>
                  <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('cta_click', { location: 'success', label: 'calendly' })
                      }
                      className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] hover:bg-black text-white px-7 py-4 text-[15px] font-semibold shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] transition-all"
                    >
                      <span>Direkt einen Termin wählen</span>
                      <span className="text-cyan-400 transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      onClick={() =>
                        trackEvent('cta_click', { location: 'success', label: 'anrufen' })
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 hover:border-stone-400 px-6 py-4 text-[15px] font-semibold text-[var(--ink)] transition-colors"
                    >
                      <PhoneIcon />
                      <span>Anrufen</span>
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('cta_click', { location: 'success', label: 'whatsapp' })
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-6 py-4 text-[15px] font-semibold text-white transition-colors"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </FadeInSection>
            </div>
          ) : (
            <>
              <FadeInSection>
                <div className="max-w-2xl">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-medium mb-6">
                    Auftritt kostenlos prüfen lassen
                  </div>
                  <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold tracking-[-0.03em]">
                    Ihre Firma ist besser{' '}
                    <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                      als Ihre Website?
                    </span>
                  </h2>
                  <p className="mt-6 text-stone-600 leading-relaxed text-[1.05rem] md:text-[1.15rem] max-w-xl">
                    Dann schauen wir uns an, was sich ändern sollte.
                  </p>
                </div>
              </FadeInSection>

              {/* Sofort-Kontakt Buttons */}
              <FadeInSection delay={0.06}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    onClick={() =>
                      trackEvent('cta_click', { location: 'anfrage', label: 'anrufen' })
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 hover:border-stone-400 px-5 py-3 text-[14px] font-semibold text-[var(--ink)] transition-colors"
                  >
                    <PhoneIcon />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('cta_click', { location: 'anfrage', label: 'whatsapp' })
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-5 py-3 text-[14px] font-semibold text-white transition-colors"
                  >
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </FadeInSection>

              {/* Regler: Anfrage / Termin */}
              <FadeInSection delay={0.1}>
                <div className="mt-12 md:mt-14">
                  <div className="inline-flex items-center gap-1 rounded-full bg-[var(--background-warm)] border border-stone-200/80 p-1.5">
                    <button
                      type="button"
                      onClick={() => switchTab('anfrage')}
                      aria-pressed={contactTab === 'anfrage'}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                        contactTab === 'anfrage'
                          ? 'bg-[var(--ink)] text-white shadow-[0_10px_28px_-14px_rgba(12,14,16,0.55)]'
                          : 'text-stone-600 hover:text-[var(--ink)]'
                      }`}
                    >
                      Anfrage schreiben
                    </button>
                    <button
                      type="button"
                      onClick={() => switchTab('termin')}
                      aria-pressed={contactTab === 'termin'}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                        contactTab === 'termin'
                          ? 'bg-[var(--ink)] text-white shadow-[0_10px_28px_-14px_rgba(12,14,16,0.55)]'
                          : 'text-stone-600 hover:text-[var(--ink)]'
                      }`}
                    >
                      Termin buchen
                    </button>
                  </div>
                </div>
              </FadeInSection>

              {contactTab === 'termin' ? (
                <FadeInSection delay={0.14}>
                  <div className="mt-8 relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)]">
                    <div className="flex items-center justify-between px-5 md:px-7 py-3 md:py-4 border-b border-stone-200/70 bg-white">
                      <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 animate-ping" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.28em] sm:tracking-[0.32em] uppercase text-stone-500">
                          Verfügbar · Erstgespräch
                        </span>
                      </div>
                      <span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
                        calendly · fylumarketing
                      </span>
                    </div>
                    <CalendlyEmbed height="clamp(680px, 90svh, 820px)" />
                  </div>
                </FadeInSection>
              ) : (
              <FadeInSection delay={0.14}>
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="mt-8 rounded-2xl md:rounded-3xl bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.15)] p-6 md:p-10 grid gap-6 md:gap-7"
                >
                  <div className="grid md:grid-cols-2 gap-6 md:gap-7">
                    <Field label="Unternehmen" name="firmName" required autoComplete="organization" onFocus={onFieldFocus} />
                    <Field
                      label="Website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      required
                      autoComplete="url"
                      onFocus={onFieldFocus}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-7">
                    <Field label="Name" name="contactName" required autoComplete="name" onFocus={onFieldFocus} />
                    <div className="grid grid-cols-2 gap-3">
                      <Field
                        label="E-Mail"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onFocus={onFieldFocus}
                      />
                      <Field
                        label="Telefon"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        onFocus={onFieldFocus}
                      />
                    </div>
                  </div>

                  <fieldset className="mt-2">
                    <legend className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-4">
                      Was möchten Sie verbessern? <span className="text-[var(--cyan-deep)]">*</span>
                    </legend>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
                      {[
                        'Website',
                        'Marke',
                        'SEO und Sichtbarkeit',
                        'Gesamter Auftritt',
                        'Noch nicht sicher',
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="group relative flex items-center justify-center text-center px-3 py-3 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-400 text-[13px] text-stone-700 cursor-pointer transition-colors has-[:checked]:bg-[var(--ink)] has-[:checked]:text-white has-[:checked]:border-[var(--ink)]"
                        >
                          <input
                            type="radio"
                            name="verbessern"
                            value={opt}
                            required
                            onFocus={onFieldFocus}
                            className="sr-only"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-7">
                    <SelectField
                      label="Zeitraum (optional)"
                      name="zeitraum"
                      options={[
                        'So bald wie möglich',
                        'In den nächsten 1 bis 3 Monaten',
                        'Später',
                        'Noch offen',
                      ]}
                      onFocus={onFieldFocus}
                    />
                    <SelectField
                      label="Unternehmensgröße (optional)"
                      name="groesse"
                      options={[
                        '1 bis 5 Mitarbeitende',
                        '6 bis 20 Mitarbeitende',
                        '21 bis 50 Mitarbeitende',
                        '51 bis 100 Mitarbeitende',
                        'über 100 Mitarbeitende',
                      ]}
                      onFocus={onFieldFocus}
                    />
                  </div>

                  <label className="mt-2 flex items-start gap-3 text-[13px] text-stone-600 leading-relaxed">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-stone-300 text-[var(--ink)] focus:ring-cyan-600"
                    />
                    <span>
                      Ich habe die{' '}
                      <Link
                        href="/datenschutz"
                        className="underline decoration-stone-400 underline-offset-2 hover:text-stone-900"
                      >
                        Datenschutzerklärung
                      </Link>{' '}
                      zur Kenntnis genommen.
                    </span>
                  </label>

                  {state === 'error' && errorMessage ? (
                    <div className="rounded-xl bg-red-50 border border-red-200 text-red-800 text-[13px] px-4 py-3">
                      {errorMessage}
                    </div>
                  ) : null}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={state === 'sending'}
                      className="group w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] hover:bg-black text-white px-8 py-4 text-[15px] font-semibold transition-all shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>
                        {state === 'sending' ? 'Wird gesendet…' : 'Auftritt kostenlos prüfen lassen'}
                      </span>
                      {state === 'sending' ? null : (
                        <span className="text-cyan-400 transition-transform group-hover:translate-x-0.5">→</span>
                      )}
                    </button>
                    <p className="mt-4 text-[12px] text-stone-500">
                      Kostenlos und unverbindlich. Wir melden uns persönlich.
                    </p>
                  </div>
                </form>
              </FadeInSection>
              )}
            </>
          )}
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-[var(--ink)] text-stone-400 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-fylu-marketing.jpeg"
              alt="Fylu Marketing"
              width={140}
              height={70}
              className="h-8 w-auto opacity-90"
            />
            <span>· Saarlouis</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">
              {PHONE_DISPLAY}
            </a>
            <span className="text-stone-600">·</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-stone-600">·</span>
            <a href="mailto:kontakt@fylumarketing.de" className="hover:text-white transition-colors">
              kontakt@fylumarketing.de
            </a>
            <span className="text-stone-600">·</span>
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <span className="text-stone-600">·</span>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      {state !== 'success' ? (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200/80 px-3 py-3 shadow-[0_-10px_30px_-15px_rgba(12,14,16,0.15)]">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label="Anrufen"
              onClick={() =>
                trackEvent('cta_click', { location: 'sticky_mobile', label: 'anrufen' })
              }
              className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-stone-200 text-[var(--ink)]"
            >
              <PhoneIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() =>
                trackEvent('cta_click', { location: 'sticky_mobile', label: 'whatsapp' })
              }
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="#anfrage"
              onClick={() =>
                trackEvent('cta_click', { location: 'sticky_mobile', label: 'auftritt_pruefen' })
              }
              className="group flex-1 flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] text-white px-4 py-3.5 text-[14px] font-semibold"
            >
              <span>Auftritt prüfen lassen</span>
              <span className="text-cyan-400">→</span>
            </a>
          </div>
        </div>
      ) : null}
    </main>
  );
}

/* ============================================================
   Reusable Fields
   ============================================================ */

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  autoComplete,
  onFocus,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  onFocus?: () => void;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-3">
        {label}
        {required ? <span className="text-[var(--cyan-deep)]"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onFocus={onFocus}
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  onFocus,
}: {
  label: string;
  name: string;
  options: string[];
  onFocus?: () => void;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-3">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        onFocus={onFocus}
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-colors cursor-pointer"
      >
        <option value="" disabled>
          Bitte wählen
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
