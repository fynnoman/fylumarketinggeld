import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/animated/FadeInSection";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/landingpage-erstellen-lassen`;

const faqs = [
  {
    q: "Was ist der Unterschied zwischen einer Website und einer Landingpage?",
    a: "Eine Website ist der komplette Auftritt eines Unternehmens. Eine Landingpage ist eine fokussierte Einzelseite mit einem einzigen Ziel: eine Anfrage, eine Buchung, ein Download oder ein Kauf. Sie hat keine ablenkende Navigation und ist auf einen Kampagnenkontext zugeschnitten.",
  },
  {
    q: "Wofür braucht man eine Landingpage?",
    a: "Für Google Ads, Meta Ads, LinkedIn-Kampagnen, Newsletter-Aktionen oder gezielte Aktionen wie Produkteinführungen und Events. Immer dann, wenn eine allgemeine Startseite zu breit wäre und zu wenig auf das konkrete Angebot einzahlt.",
  },
  {
    q: "Was gehört auf eine gute Landingpage?",
    a: "Ein klares Versprechen im Hero, ein konkreter Nutzenblock, glaubwürdige Belege (Referenzen, Auszeichnungen, Testimonials), ein sauberes Anfrage- oder Buchungsformular und ein einziger, klar sichtbarer Handlungsaufruf.",
  },
  {
    q: "Wird die Landingpage bei Google gefunden?",
    a: "Landingpages werden meist über bezahlte Anzeigen aufgerufen, nicht über organische Suche. Für organische Sichtbarkeit sind eigene Themenseiten der bessere Platz. Beides lässt sich kombinieren.",
  },
  {
    q: "Wie wird die Landingpage gemessen?",
    a: "Wir richten Conversion-Tracking sauber ein: was zählt als Conversion, wie wird sie ausgelöst, welche Ereignisse an welchen Werbekanal zurückgemeldet. Ohne saubere Messung ist Optimierung Ratespiel.",
  },
];

const anwendungen = [
  "Google Ads Kampagnen",
  "Meta Ads (Facebook & Instagram)",
  "LinkedIn Ads",
  "Newsletter-Aktionen",
  "Produkt- und Feature-Launches",
  "Event-Anmeldungen",
  "Whitepaper- und Download-Seiten",
  "Kampagnen mit klarem Aktions-Fenster",
];

export default function LandingpageErstellenLassenPage() {
  return (
    <main>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              {
                "@type": "ListItem",
                position: 2,
                name: "Landingpage erstellen lassen",
                item: URL,
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
            "@type": "Service",
            "@id": `${URL}#service`,
            name: "Landingpage erstellen lassen",
            alternateName: [
              "Landingpage Agentur",
              "Landing Page erstellen lassen",
              "Conversion Landingpage",
            ],
            serviceType: "Landingpage-Erstellung",
            description:
              "Fokussierte Conversion-Landingpages für Google Ads, Meta Ads und Kampagnen. Klare Struktur, saubere Messung, planbarer Aufbau.",
            provider: { "@id": `${SITE}/#organization` },
            areaServed: [
              { "@type": "State", name: "Saarland" },
              { "@type": "Country", name: "Deutschland" },
            ],
            url: URL,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "de-DE",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "[data-speakable]"],
            },
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-sm text-stone-500">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 font-medium">
              Landingpage erstellen lassen
            </span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Landingpages</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Landingpage erstellen lassen,{" "}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                die eine Sache richtig gut macht.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p
              data-speakable
              className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl"
            >
              Fokussierte Landingpages für Google Ads, Meta Ads und
              Kampagnen. Klare Struktur, ein einziges Ziel pro Seite, saubere
              Messung. Aus Saarlouis für Unternehmen im Saarland und
              deutschlandweit.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/buchen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                <span>Vorgespräch buchen</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/google-ads-saarland"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Google Ads Betreuung</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Warum überhaupt eine eigene Landingpage
          </h2>
          <div className="prose prose-lg prose-stone max-w-none">
            <p>
              Wer Werbebudget auf eine allgemeine Startseite schickt, verliert
              Aufmerksamkeit an Menü, Serviceübersicht und Nebeninhalte. Eine
              Landingpage hat einen einzigen Zweck: die Absicht aus der
              Anzeige in eine Anfrage, eine Buchung oder einen Kauf zu
              überführen. Alles auf der Seite dient diesem Zweck.
            </p>
            <p>
              Landingpages sind planbar. Botschaft, Angebot, Formular und
              Handlungsaufruf sind klar. Werbebudget wird nicht mehr für den
              Zufall bezahlt, sondern für eine Struktur, die belastbar
              gemessen werden kann. Ergänzend zur{" "}
              <Link
                href="/google-ads-saarland"
                className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline"
              >
                Google Ads Betreuung
              </Link>{" "}
              wird die Landingpage zum eigentlichen Hebel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Was eine gute Landingpage ausmacht
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Ein Versprechen im Hero",
                text: "Der Nutzen ist im ersten Sichtbereich klar. Nicht die Marke oder das Menü sind der Star, sondern das Ergebnis, das die Seite anbietet.",
              },
              {
                title: "Ein einziges Ziel",
                text: "Anfrage, Buchung, Kauf oder Download. Mehrere Ziele auf einer Seite konkurrieren miteinander und schwächen sich gegenseitig.",
              },
              {
                title: "Glaubwürdige Belege",
                text: "Referenzen, Auszeichnungen, Zahlen aus der eigenen Arbeit, Testimonials. Belege dort platzieren, wo der Leser gerade zweifelt.",
              },
              {
                title: "Ein sauberes Formular",
                text: "Nur die Felder, die für die nächste Stufe wirklich gebraucht werden. Jedes zusätzliche Feld senkt die Anfragequote.",
              },
              {
                title: "Saubere Messung",
                text: "Conversion-Tracking, Event-Definition, Rückmeldung an die Werbekonten. Ohne saubere Messung ist Optimierung Ratespiel.",
              },
              {
                title: "Konsistenz zur Anzeige",
                text: "Botschaft, Sprache und Bilder der Anzeige und der Landingpage passen zusammen. Sonst geht der Vertrauensvorschuss aus der Anzeige verloren.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Anwendungsfälle
          </h2>
          <div className="flex flex-wrap gap-3">
            {anwendungen.map((a, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Häufige Fragen
          </h2>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{f.q}</h3>
                <p className="text-stone-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Landingpage anfragen
          </h2>
          <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
            Ein kurzes Vorgespräch klärt Ziel, Kanal und Rahmen. Danach wissen
            Sie, welche Struktur zur Kampagne passt und wie die Messung
            aufgebaut wird.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/buchen"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
            >
              <span>Termin buchen</span>
              <span className="text-cyan-400">→</span>
            </Link>
            <Link
              href="/website-erstellen-lassen"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
            >
              <span>Komplette Website erstellen lassen</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
