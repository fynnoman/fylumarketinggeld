import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/animated/FadeInSection";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/webdesign-autoaufbereitung`;

const faqs = [
  {
    q: "Warum braucht ein Autoaufbereiter überhaupt eine Website?",
    a: "Wer eine Aufbereitung, eine Keramik-Versiegelung oder ein Detailing sucht, googelt zuerst. Die Website entscheidet in wenigen Sekunden, ob die Anfrage bei Ihnen oder bei einem Wettbewerber landet.",
  },
  {
    q: "Was gehört auf eine Website für Fahrzeugaufbereitung?",
    a: "Eine klare Leistungsstruktur (Innen- und Außenaufbereitung, Politur, Versiegelung, Lederpflege, Geruchsentfernung), aussagekräftige Vorher-Nachher-Bilder und die Möglichkeit, Termine mit wenigen Klicks anzufragen.",
  },
  {
    q: "Werde ich bei Google in meiner Region gefunden?",
    a: "Jede Fylu-Website enthält eine technische SEO-Basis. Für tiefere lokale Sichtbarkeit gibt es zusätzlich Local SEO und die Optimierung des Google-Unternehmensprofils als eigenständige Leistungen.",
  },
  {
    q: "Können auch Preise oder Pakete auf die Website?",
    a: "Auf Wunsch. Viele Aufbereiter arbeiten mit Rahmenpreisen oder Pakethinweisen, die eine erste Orientierung geben und trotzdem Spielraum für Fahrzeugzustand und Umfang lassen.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Ein kurzes Vorgespräch klärt Umfang, Ziele und Rahmen. Danach entwerfen wir die Struktur, setzen die Seite technisch sauber um und schalten sie live. Auf Wunsch folgt die laufende Betreuung.",
  },
];

const leistungen = [
  "Innen- und Außenaufbereitung",
  "Handwäsche und Handpolitur",
  "Keramik- und Lackversiegelung",
  "Lederreinigung und -pflege",
  "Motorwäsche",
  "Geruchsentfernung und Ozonbehandlung",
  "Scheinwerferaufbereitung",
  "Foliierung und PPF",
  "Detailing für Sammler- und Sportwagen",
];

export default function WebdesignAutoaufbereitungPage() {
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
                name: "Webdesign Autoaufbereitung",
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
            name: "Webdesign Autoaufbereitung",
            alternateName: [
              "Website für Autoaufbereiter",
              "Webdesign Fahrzeugaufbereitung",
              "Detailing Website",
            ],
            serviceType: "Webdesign",
            description:
              "Websites für Autoaufbereitung und Fahrzeugaufbereitung: klare Leistungsstruktur, aussagekräftige Referenzen und lokale Sichtbarkeit.",
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
              Webdesign Autoaufbereitung
            </span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Für die Fahrzeugaufbereitung</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Webdesign für Autoaufbereitung,{" "}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                die man auch online sieht.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p
              data-speakable
              className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl"
            >
              Fylu Marketing baut Websites für Betriebe in der Autoaufbereitung
              und Fahrzeugaufbereitung. Klare Leistungsstruktur, aussagekräftige
              Vorher-Nachher-Referenzen und eine technisch saubere Basis, damit
              qualifizierte Anfragen in der Region ankommen.
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
                href="/webdesign-saarland"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Webdesign Saarland</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Warum Aufbereiter online sichtbar sein sollten
          </h2>
          <div className="prose prose-lg prose-stone max-w-none">
            <p>
              Aufbereitung wird häufig regional gesucht. Wer nach einer
              Keramik-Versiegelung, einer Lederreinigung oder einem
              Show-Car-Detailing sucht, googelt die Umgebung und vergleicht die
              ersten sichtbaren Betriebe. Ohne eigene Website landet die
              Anfrage bei jemand anderem, unabhängig davon, wie gut die Arbeit
              im Betrieb ist.
            </p>
            <p>
              Eine Website muss keine Werbeschau sein. Sie muss zeigen, was
              gemacht wird, wie das Ergebnis aussieht und wie eine Anfrage
              schnell entstehen kann. Ergänzt durch{" "}
              <Link
                href="/local-seo-saarland"
                className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline"
              >
                Local SEO
              </Link>{" "}
              und ein gepflegtes Google-Unternehmensprofil ist sie das
              wichtigste Instrument, um regional gefunden zu werden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Was eine gute Website für Fahrzeugaufbereitung leistet
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Klare Leistungsstruktur",
                text: "Innen- und Außenaufbereitung, Politur, Versiegelung, Lederpflege, Geruchsentfernung und Detailing werden übersichtlich getrennt. Kunden erkennen sofort, was zu ihrem Fahrzeug passt.",
              },
              {
                title: "Aussagekräftige Referenzen",
                text: "Vorher-Nachher-Bilder, kurze Beschreibungen und die Nennung der eingesetzten Verfahren machen aus einer Galerie einen belastbaren Kompetenznachweis.",
              },
              {
                title: "Einfache Anfrage",
                text: "Ein sichtbarer Anruf-Button und ein schlankes Anfrageformular sorgen dafür, dass Interessenten ohne Umwege in Kontakt treten können.",
              },
              {
                title: "Lokale Sichtbarkeit",
                text: "Technisch saubere Basis, strukturierte Daten und die Anbindung an das Google-Unternehmensprofil unterstützen die lokale Auffindbarkeit.",
              },
              {
                title: "Mobile First",
                text: "Ein großer Teil der Suchen kommt vom Smartphone. Die Website wird für kleine Bildschirme konzipiert und für Tablet und Desktop erweitert.",
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
            Passende Leistungsbereiche
          </h2>
          <div className="flex flex-wrap gap-3">
            {leistungen.map((l, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 font-medium"
              >
                {l}
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
            Anfrage starten
          </h2>
          <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
            Ein kurzes Vorgespräch klärt Umfang, Ziele und Rahmen. Danach
            wissen Sie, was möglich ist und wie eine Website für Ihre
            Fahrzeugaufbereitung aussehen kann.
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
              <span>Website erstellen lassen</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
