import type { Metadata } from "next";
import Link from "next/link";
import { SCORE_CRITERIA } from "@/lib/digital-index";

const SITE = "https://www.fylumarketing.de";

export const metadata: Metadata = {
  title: "Methodik | Fylu Digital Index",
  description:
    "Wie der Fylu Digital Score berechnet wird: zwölf Kriterien mit festen Gewichten, manuelle Prüfung, transparente Aktualisierung.",
  alternates: { canonical: `${SITE}/digital-index/methodik` },
};

export default function MethodikPage() {
  const totalWeight = SCORE_CRITERIA.reduce((s, c) => s + c.weight, 0);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Link
        href="/digital-index"
        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        ← Zurück zum Index
      </Link>

      <h1 className="mt-6 font-[var(--font-fraunces)] text-4xl leading-tight text-neutral-900 sm:text-5xl">
        Methodik des Fylu Digital Score.
      </h1>

      <p className="mt-6 text-lg text-neutral-700">
        Der Fylu Digital Score bewertet die digitale Sichtbarkeit eines
        Unternehmens auf einer Skala von 0 bis 100. Er ist eine
        deterministische Kennzahl aus {SCORE_CRITERIA.length} Kriterien mit
        festen Gewichten. Gesamtgewicht: {totalWeight} Prozentpunkte.
      </p>

      <section className="mt-10">
        <h2 className="font-[var(--font-fraunces)] text-2xl text-neutral-900">
          Berechnung
        </h2>
        <p className="mt-3 text-neutral-700">
          Jedes Kriterium wird auf einer Skala von 0 bis 100 eingestuft. Der
          Gesamt-Score ergibt sich als gewichteter Durchschnitt aller
          Kriterien. Fehlt ein Wert, zählt er in der Berechnung als 0.
        </p>
        <pre className="mt-4 overflow-auto rounded-md bg-neutral-950 p-4 text-xs text-neutral-100">
          <code>{`Score = Σ (kriterium_wert × kriterium_gewicht) / 100`}</code>
        </pre>
      </section>

      <section className="mt-10">
        <h2 className="font-[var(--font-fraunces)] text-2xl text-neutral-900">
          Kriterien und Gewichte
        </h2>
        <ol className="mt-6 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
          {SCORE_CRITERIA.map((c, idx) => (
            <li key={c.key} className="px-4 py-4 sm:px-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-[var(--font-fraunces)] text-base text-neutral-900">
                  {idx + 1}. {c.label}
                </p>
                <p className="shrink-0 text-sm text-neutral-500 tabular-nums">
                  Gewicht {c.weight} %
                </p>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{c.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-[var(--font-fraunces)] text-2xl text-neutral-900">
          Aktualisierung
        </h2>
        <p className="mt-3 text-neutral-700">
          Bewertungen werden manuell durch Fylu vergeben und mindestens einmal
          jährlich überprüft. Wenn ein Unternehmen Änderungen an der Website,
          am Google-Unternehmensprofil oder an der technischen Grundlage
          umsetzt, wird der Score neu berechnet.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-[var(--font-fraunces)] text-2xl text-neutral-900">
          Datenquelle
        </h2>
        <p className="mt-3 text-neutral-700">
          Alle Bewertungen basieren auf öffentlich zugänglichen Signalen:
          Website, Google-Unternehmensprofil, öffentliche Verzeichnisse. Es
          werden keine internen Daten der Unternehmen ausgewertet.
        </p>
      </section>
    </main>
  );
}
