'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: 'Wie viel Budget brauche ich für Google Ads?',
    a: 'Ein realistisches Startbudget für lokale Kampagnen im Saarland liegt bei 500 bis 1.500 Euro pro Monat für die Anzeigenkosten selbst. Dazu kommt die monatliche Management-Gebühr für Kampagnenbetreuung und Optimierung. Der große Vorteil: Sie sehen sofort, welche Anzeige wie viel kostet und was sie bringt — volle Transparenz ab Tag 1.',
  },
  {
    q: 'Wann sehe ich Ergebnisse mit Google Ads?',
    a: 'Im Gegensatz zu SEO sehen Sie bei Google Ads sofort Ergebnisse. Ihre Anzeigen sind binnen 24 Stunden aktiv. Die erste Optimierungsphase dauert etwa 2 bis 4 Wochen — in dieser Zeit sammeln wir Daten und verfeinern Ihre Kampagnen. Nach einem Monat haben Sie belastbare Zahlen und eine optimierte Kampagne.',
  },
  {
    q: 'Was ist der Unterschied zwischen Google Ads und SEO?',
    a: 'SEO bringt Ihnen langfristig kostenlose Besucher über die organischen Suchergebnisse — das dauert aber 3 bis 6 Monate. Google Ads bringt Ihnen sofort Besucher über bezahlte Anzeigen oberhalb der Suchergebnisse. Ideal ist eine Kombination: Google Ads für sofortige Ergebnisse und SEO für nachhaltige Sichtbarkeit.',
  },
  {
    q: 'Kann ich Google Ads nicht einfach selbst machen?',
    a: 'Technisch ja — aber die meisten Unternehmer verbrennen ohne Erfahrung 50 bis 70 Prozent ihres Budgets. Google macht es absichtlich einfach, Geld auszugeben, aber schwer, profitabel zu werben. Fehlerhafte Keywords, schlechte Anzeigentexte und fehlende Conversion-Tracking kosten mehr als professionelles Management.',
  },
  {
    q: 'Was passiert wenn ich Google Ads stoppe?',
    a: 'Sobald Sie die Kampagnen pausieren, erscheinen keine Anzeigen mehr und Sie erhalten keine Klicks. Deshalb empfehle ich parallel immer auch SEO aufzubauen — so haben Sie ein Sicherheitsnetz, wenn Sie Ihr Ads-Budget reduzieren möchten.',
  },
  {
    q: 'Für welche Branchen funktioniert Google Ads im Saarland?',
    a: 'Google Ads funktioniert für praktisch jede lokale Branche: Handwerker, Ärzte, Anwälte, Restaurants, Immobilienmakler, Fitnessstudios, Autohäuser und viele mehr. Entscheidend ist, dass potenzielle Kunden aktiv nach Ihrem Angebot suchen — und das ist bei lokalen Dienstleistungen fast immer der Fall. Speziell für Handwerker biete ich optimiertes Webdesign an.',
  },
];

export default function GoogleAdsSaarlandPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-80px' });

  return (
    <main>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fylumarketing.de' },
              { '@type': 'ListItem', position: 2, name: 'Google Ads Saarland', item: 'https://www.fylumarketing.de/google-ads-saarland' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Fylu – Google Ads Agentur Saarland',
            description: 'Professionelle Google Ads Kampagnen für Unternehmen im Saarland. Sofort sichtbar, messbar und profitabel.',
            url: 'https://www.fylumarketing.de/google-ads-saarland',
            telephone: '+4915168488999',
            email: 'fynn@taskeyapp.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
            priceRange: '€€',
          }),
        }}
      />
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

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-sm text-stone-500">
            <Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 font-medium">Google Ads Saarland</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6"
          >
            Google Ads Saarland — Sofort sichtbar, sofort Kundenanfragen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
            className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-3xl"
          >
            Während SEO einige Monate braucht, bringen Google Ads Ihnen ab dem ersten Tag neue Kunden. Ich erstelle, manage und optimiere Ihre Kampagnen — damit jeder investierte Euro messbar mehr zurückbringt. Für Unternehmen in Saarbrücken, Saarlouis, Homburg, Neunkirchen, St. Wendel, Merzig und dem gesamten Saarland.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
          >
            <Link href="/angebote">
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98]">
                Kostenlose Kampagnen-Analyse anfordern
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Warum Google Ads */}
      <section ref={ref} className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-8"
          >
            Warum Google Ads die schnellste Methode für neue Kunden ist
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
            className="prose prose-lg prose-stone max-w-none"
          >
            <p>
              Stellen Sie sich vor: Ein potenzieller Kunde in Saarbrücken googelt „Steuerberater Saarland", „Zahnarzt Saarlouis" oder „Dachdecker Neunkirchen". Ganz oben erscheint Ihre Anzeige — noch vor allen organischen Ergebnissen, noch vor dem Wettbewerb. Der Kunde klickt, landet auf Ihrer optimierten Seite und nimmt Kontakt auf. Genau so funktioniert Google Ads.
            </p>
            <p>
              Im Gegensatz zu Social Media Werbung erreichen Sie mit Google Ads Menschen, die <strong>aktiv nach Ihrem Angebot suchen</strong>. Das ist der entscheidende Unterschied. Auf Facebook oder Instagram scrollen Nutzer durch ihren Feed und werden unterbrochen. Bei Google suchen sie gezielt — sie haben bereits ein Problem und wollen eine Lösung. Das macht Google Ads zur effektivsten Werbeform für lokale Unternehmen im Saarland.
            </p>
            <p>
              Der Vorteil gegenüber SEO: Sie müssen nicht monatelang warten. Ihre Kampagnen sind innerhalb von 24 Stunden aktiv und Sie sehen sofort, wie viele Klicks, Anrufe und Kontaktanfragen Sie erhalten. Jeder Euro ist nachvollziehbar. Kein Rätselraten — nur harte Zahlen. Langfristig empfehle ich eine Kombination mit <Link href="/seo-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">professionellem SEO</Link>, um auch organisch sichtbar zu werden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Meine Google Ads Leistungen für Ihr Unternehmen
          </h2>
          <div className="space-y-10">
            {[
              { title: 'Keyword-Recherche & Kampagnen-Setup', text: 'Ich finde heraus, welche Suchbegriffe Ihre Kunden im Saarland verwenden und erstelle darauf abgestimmte Kampagnen. Dazu gehören Anzeigengruppen, negative Keywords (um Streuverluste zu minimieren) und die korrekte Gebotsstrategie für Ihr Budget.' },
              { title: 'Überzeugende Anzeigentexte', text: 'Ihre Anzeigen müssen aus der Masse herausstechen. Ich schreibe Anzeigentexte, die den Suchenden sofort ansprechen, Vertrauen aufbauen und zum Klicken animieren — mit klaren Alleinstellungsmerkmalen, Handlungsaufforderungen und lokalen Bezügen.' },
              { title: 'Optimierte Landing Pages', text: 'Eine Google Ads Kampagne ist nur so gut wie die Seite, auf der Besucher landen. Ich erstelle oder optimiere Ihre Landing Pages so, dass Besucher zu Kunden werden. Schnelle Ladezeit, klare Struktur, prominente Kontaktmöglichkeiten. Erfahren Sie mehr über professionelles Webdesign im Saarland.' },
              { title: 'Conversion-Tracking & Reporting', text: 'Ich richte Google Analytics und Conversion-Tracking ein, damit Sie exakt wissen: Wie viele Anrufe, Kontaktformulare oder Buchungen hat Ihre Kampagne generiert? Monatliche Reports zeigen transparent, was funktioniert und wo optimiert wird.' },
              { title: 'Laufende Optimierung', text: 'Google Ads ist kein „einmal einrichten und vergessen". Ich überwache Ihre Kampagnen kontinuierlich, passe Keywords, Gebote und Anzeigentexte an und sorge dafür, dass Ihre Kosten pro Anfrage stetig sinken — während die Qualität der Anfragen steigt.' },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten */}
      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Was kostet Google Ads Betreuung im Saarland?
          </h2>
          <div className="prose prose-lg prose-stone max-w-none mb-10">
            <p>
              Bei Google Ads gibt es zwei Kostenpunkte: das <strong>Anzeigenbudget</strong> (was Sie direkt an Google zahlen) und die <strong>Management-Gebühr</strong> (für Kampagnenerstellung, Optimierung und Reporting).
            </p>
            <p>
              Für lokale Unternehmen im Saarland empfehle ich ein Anzeigenbudget von <strong>500 bis 1.500 Euro pro Monat</strong> als Startpunkt. Das reicht erfahrungsgemäß für 30 bis 150 qualifizierte Klicks pro Monat — je nach Branche und Wettbewerb. Die Management-Gebühr beginnt bei <strong>250 Euro pro Monat</strong> für ein einfaches Kampagnen-Setup.
            </p>
            <p>
              Wichtig: Jeder Euro ist nachvollziehbar. Sie sehen genau, wie viel ein Klick kostet, wie viele Anfragen daraus entstehen und was eine Kundenanfrage im Durchschnitt kostet. Wenn die Zahlen nicht stimmen, passen wir die Strategie an — oder pausieren die Kampagne. Kein Risiko, volle Kontrolle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Anzeigenbudget', value: '500–1.500€/Monat', desc: 'Direkt an Google — Sie bestimmen das Budget' },
              { label: 'Management-Gebühr', value: 'ab 250€/Monat', desc: 'Kampagnenerstellung, Optimierung, Reporting' },
              { label: 'Setup-Gebühr', value: 'einmalig ab 490€', desc: 'Keyword-Recherche, Kampagnen-Struktur, Tracking' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-stone-200 text-center">
                <p className="text-sm text-stone-500 font-medium mb-2">{c.label}</p>
                <p className="text-2xl font-extrabold text-stone-900 mb-2">{c.value}</p>
                <p className="text-sm text-stone-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads vs SEO */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Google Ads vs. SEO — Was ist besser für Ihr Unternehmen?
          </h2>
          <div className="prose prose-lg prose-stone max-w-none mb-10">
            <p>
              Die ehrliche Antwort: beides zusammen. Google Ads bringt <strong>sofortige Ergebnisse</strong> — ideal für Neugründungen, saisonale Angebote oder wenn Sie schnell neue Kunden brauchen. SEO baut <strong>langfristige Sichtbarkeit</strong> auf — nach 3 bis 6 Monaten erhalten Sie kostenlosen Traffic über die organischen Suchergebnisse.
            </p>
            <p>
              Meine Empfehlung für Unternehmen im Saarland: Starten Sie mit Google Ads für sofortige Anfragen, während wir parallel an Ihrem SEO arbeiten. Sobald die organischen Rankings greifen, können Sie Ihr Ads-Budget reduzieren — oder auf noch profitablere Keywords umschichten.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 pr-4 text-stone-900 font-bold">Kriterium</th>
                  <th className="py-4 px-4 text-cyan-600 font-bold">Google Ads</th>
                  <th className="py-4 pl-4 text-stone-600 font-bold">SEO</th>
                </tr>
              </thead>
              <tbody className="text-stone-600">
                {[
                  ['Ergebnisse', 'Sofort (24h)', '3–6 Monate'],
                  ['Kosten', 'Laufend (pro Klick)', 'Einmalig + Pflege'],
                  ['Kontrolle', 'Volle Kontrolle', 'Abhängig von Google'],
                  ['Nachhaltigkeit', 'Stoppt bei Pause', 'Langfristig kostenlos'],
                  ['Skalierbarkeit', 'Sofort skalierbar', 'Organisch wachsend'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-stone-900">{row[0]}</td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 pl-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Häufige Fragen zu Google Ads im Saarland
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06, ease: smoothEase }}
                className="bg-white p-6 rounded-xl border border-stone-200"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Bereit für sofort mehr Kundenanfragen?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Lassen Sie uns in einem kostenlosen Gespräch analysieren, welches Google Ads Potenzial in Ihrer Branche steckt. Unverbindlich und transparent.
          </p>
          <Link href="/angebote">
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98]">
              Kostenlose Kampagnen-Analyse anfordern
            </button>
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
            <Link href="/seo-saarland" className="hover:text-cyan-500 transition-colors">SEO Saarland</Link>
            <Link href="/webdesign-saarland" className="hover:text-cyan-500 transition-colors">Webdesign Saarland</Link>
            <Link href="/website-erstellen-lassen" className="hover:text-cyan-500 transition-colors">Website erstellen lassen</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
