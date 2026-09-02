"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  CATEGORIES,
  SCORE_CRITERIA,
  getCompanyScore,
  scoreBand,
  sortByScoreDesc,
  type Category,
  type Company,
} from "@/lib/digital-index";
import RadarChart from "./RadarChart";
import ScoreSpectrum from "./ScoreSpectrum";
import DistributionChart from "./DistributionChart";
import SelfCheck from "./SelfCheck";

type Props = {
  companies: Company[];
};

type SortMode = "score" | "name" | "city";

const SORT_LABELS: Record<SortMode, string> = {
  score: "Score",
  name: "Name",
  city: "Stadt",
};

const TONE_TEXT = {
  high: "text-green-700",
  mid: "text-amber-700",
  low: "text-red-700",
} as const;

const TONE_BG = {
  high: "bg-green-50 border-green-200",
  mid: "bg-amber-50 border-amber-200",
  low: "bg-red-50 border-red-200",
} as const;

function CountUp({ value, duration = 900 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref}>{n}</span>;
}

export default function IndexExperience({ companies }: Props) {
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("score");
  const [expanded, setExpanded] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    let items = companies;
    if (q) {
      items = items.filter((c) => {
        const cat = CATEGORIES.find((k) => k.slug === c.categorySlug);
        const hay = [
          c.name,
          c.city,
          c.shortDescription,
          cat?.industry ?? "",
          cat?.region ?? "",
          cat?.label ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }
    if (sortMode === "score") return sortByScoreDesc(items);
    if (sortMode === "name")
      return [...items].sort((a, b) => a.name.localeCompare(b.name, "de"));
    return [...items].sort((a, b) => a.city.localeCompare(b.city, "de"));
  }, [companies, q, sortMode]);

  const avgScore = useMemo(() => {
    if (companies.length === 0) return 0;
    const total = companies.reduce((s, c) => s + getCompanyScore(c), 0);
    return Math.round(total / companies.length);
  }, [companies]);

  const topScore = useMemo(() => {
    if (companies.length === 0) return 0;
    return Math.max(...companies.map((c) => getCompanyScore(c)));
  }, [companies]);

  function toggleExpand(slug: string) {
    setExpanded((prev) => (prev === slug ? null : slug));
  }

  function focusCompany(slug: string) {
    setExpanded(slug);
    requestAnimationFrame(() => {
      const el = document.getElementById(`company-${slug}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  return (
    <div className="relative bg-[color:var(--background-warm)] text-[color:var(--ink)]">
      {/* Sanftes Papier-Raster oben */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(1200px 500px at 50% -80px, rgba(6,182,212,0.10), transparent 60%), radial-gradient(900px 380px at 80% 60px, rgba(194,65,12,0.06), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,14,16,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(12,14,16,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
            Fylu Digital Index
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-[color:var(--ink)] sm:text-7xl">
            Wer ist im Netz{" "}
            <span className="italic text-cyan-700">wirklich</span> sichtbar.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-[color:var(--ink-soft)] sm:text-lg">
            Ein transparentes Ranking regionaler Unternehmen. Zwölf Kriterien,
            manuell geprüft, deterministisch berechnet. Für jede Branche ein
            eigener Digital Score.
          </p>
        </motion.header>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <label className="group relative block">
            <span className="sr-only">Nach Branche oder Firma suchen</span>
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-stone-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M20 20l-3.2-3.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nach Branche, Stadt oder Firma suchen"
              className="w-full rounded-full border border-stone-200 bg-white/80 py-4 pl-12 pr-5 text-base text-[color:var(--ink)] shadow-sm placeholder:text-stone-400 backdrop-blur-md transition-all focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-xs text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800"
              >
                Löschen
              </button>
            ) : null}
          </label>

        </motion.div>

        {/* Stats row */}
        <section className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCell
            label="Unternehmen"
            value={companies.length}
            suffix=""
            tone="ink"
          />
          <StatCell
            label="Kategorien"
            value={CATEGORIES.length}
            suffix=""
            tone="ink"
          />
          <StatCell
            label="Ø Digital Score"
            value={avgScore}
            suffix="/100"
            tone="cyan"
          />
          <StatCell
            label="Top Score"
            value={topScore}
            suffix="/100"
            tone="green"
          />
        </section>

        {/* Self-Check: URL eingeben und sofort Score bekommen */}
        <SelfCheck />

        {/* Score spectrum + distribution */}
        <section className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                  Score-Spektrum
                </p>
                <h2 className="mt-1 font-display text-xl text-[color:var(--ink)]">
                  Alle Unternehmen auf einen Blick
                </h2>
              </div>
              <p className="text-xs text-stone-500">Klick auf einen Punkt</p>
            </div>
            <div className="mt-5">
              <ScoreSpectrum
                companies={filtered.length > 0 ? filtered : companies}
                highlightSlug={expanded}
                onSelect={focusCompany}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Verteilung
            </p>
            <h2 className="mt-1 font-display text-xl text-[color:var(--ink)]">
              Score-Bänder
            </h2>
            <div className="mt-6">
              <DistributionChart
                companies={filtered.length > 0 ? filtered : companies}
              />
            </div>
          </div>
        </section>

        {/* Ranking header */}
        <section className="mt-20" ref={listRef}>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Ranking
              </p>
              <h2 className="mt-1 font-display text-3xl text-[color:var(--ink)] sm:text-4xl">
                {filtered.length}{" "}
                {filtered.length === 1 ? "Ergebnis" : "Ergebnisse"}
              </h2>
            </div>

            {/* Sort */}
            <div className="inline-flex rounded-full border border-stone-200 bg-white p-1 shadow-sm">
              {(["score", "name", "city"] as SortMode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSortMode(m)}
                  className={`rounded-full px-4 py-1.5 text-xs transition-colors ${
                    sortMode === m
                      ? "bg-[color:var(--ink)] text-white"
                      : "text-stone-600 hover:text-[color:var(--ink)]"
                  }`}
                >
                  {SORT_LABELS[m]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm">
                <p className="font-display text-xl text-[color:var(--ink)]">
                  Keine Treffer.
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  Suche anpassen oder zurücksetzen.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 inline-flex rounded-full border border-stone-300 px-4 py-1.5 text-xs text-[color:var(--ink)] transition-colors hover:bg-stone-100"
                >
                  Suche zurücksetzen
                </button>
              </div>
            ) : (
              filtered.map((co, idx) => {
                const score = getCompanyScore(co);
                const band = scoreBand(score);
                const cat = CATEGORIES.find((c) => c.slug === co.categorySlug);
                const isOpen = expanded === co.slug;
                return (
                  <motion.article
                    key={co.slug}
                    id={`company-${co.slug}`}
                    layout
                    transition={{
                      layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors ${
                      isOpen
                        ? "border-cyan-400/70 ring-2 ring-cyan-500/10"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleExpand(co.slug)}
                      className="flex w-full items-center gap-4 px-4 py-5 text-left sm:gap-6 sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className="w-10 shrink-0 text-right font-display text-2xl text-stone-400 tabular-nums sm:text-3xl">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <ScoreDial score={score} />

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-xl text-[color:var(--ink)] sm:text-2xl">
                          {co.name}
                        </p>
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-600">
                          <span>{co.city}</span>
                          <span className="text-stone-300">·</span>
                          <span>{cat?.industry ?? "Branche"}</span>
                          <span
                            className={`ml-1 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] ${TONE_BG[band.tone]} ${TONE_TEXT[band.tone]}`}
                          >
                            {band.label}
                          </span>
                        </p>
                      </div>

                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-stone-500"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-stone-200 bg-[color:var(--background-warm)] px-4 py-6 sm:px-6 sm:py-8">
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
                              {/* Radar + short */}
                              <div>
                                <div className="rounded-xl border border-stone-200 bg-white p-4">
                                  <RadarChart subScores={co.subScores} />
                                </div>
                                <p className="mt-4 text-sm text-[color:var(--ink-soft)]">
                                  {co.shortDescription}
                                </p>

                                {co.website ? (
                                  <a
                                    href={co.website}
                                    target="_blank"
                                    rel="noopener nofollow"
                                    className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-700 underline underline-offset-4 hover:text-cyan-900"
                                  >
                                    Zur Website
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M7 17L17 7M17 7H8M17 7v9"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </a>
                                ) : null}
                              </div>

                              {/* Breakdown */}
                              <div>
                                <div className="flex items-baseline justify-between">
                                  <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                                    Score-Aufschlüsselung
                                  </p>
                                  <span className="text-xs text-stone-500">
                                    12 Kriterien
                                  </span>
                                </div>
                                <div className="mt-3">
                                  <LightBreakdown subScores={co.subScores} />
                                </div>
                              </div>
                            </div>

                            {co.analysisNotes && co.analysisNotes.length > 0 ? (
                              <div className="mt-8 rounded-xl border border-stone-200 bg-white p-5">
                                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                                  Beobachtungen
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-[color:var(--ink-soft)]">
                                  {co.analysisNotes.map((n, i) => (
                                    <li key={i} className="flex gap-3">
                                      <span className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-cyan-500/70" />
                                      <span>{n}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-white p-5">
                              <div>
                                <p className="font-display text-lg text-[color:var(--ink)]">
                                  Score verbessern.
                                </p>
                                <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
                                  Kostenlose Digitalanalyse mit konkreten
                                  Schritten.
                                </p>
                              </div>
                              <Link
                                href="/tools/website-check"
                                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
                              >
                                Fylu-Digitalanalyse
                              </Link>
                            </div>

                            <p className="mt-4 text-xs text-stone-500">
                              Stand:{" "}
                              {new Date(co.updatedAt).toLocaleDateString("de-DE")}
                              . Detail-URL:{" "}
                              <Link
                                href={`/digital-index/${co.categorySlug}/${co.slug}`}
                                className="underline underline-offset-2 hover:text-[color:var(--ink)]"
                              >
                                Direktlink
                              </Link>
                            </p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                );
              })
            )}
          </div>
        </section>

        {/* Methodik section */}
        <MethodikSection categories={CATEGORIES} />

        {/* Bottom CTA */}
        <section className="mt-20 overflow-hidden rounded-3xl border border-stone-200 bg-white p-10 shadow-sm sm:p-14">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
            Digitalanalyse
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-5xl">
            Ihr Unternehmen im Fylu Digital Index.
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--ink-soft)]">
            Fylu analysiert Ihre Website, das Google-Unternehmensprofil und die
            technische Grundlage. Ergebnis: ein Score von 0 bis 100 mit
            konkreten Handlungsempfehlungen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tools/website-check"
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
            >
              Kostenlose Digitalanalyse
            </Link>
            <Link
              href="/buchen"
              className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-stone-100"
            >
              Termin vereinbaren
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ------------------------------ Sub-Komponenten ------------------------------ */

function StatCell({
  label,
  value,
  suffix,
  tone,
}: {
  label: string;
  value: number;
  suffix: string;
  tone: "ink" | "cyan" | "green";
}) {
  const color =
    tone === "cyan"
      ? "text-cyan-700"
      : tone === "green"
        ? "text-green-700"
        : "text-[color:var(--ink)]";
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <p className="text-[10px] uppercase tracking-[0.16em] text-stone-500">
        {label}
      </p>
      <p className={`mt-2 font-display text-3xl ${color}`}>
        <CountUp value={value} />
        <span className="ml-1 text-sm text-stone-400">{suffix}</span>
      </p>
    </div>
  );
}

function ScoreDial({ score }: { score: number }) {
  const size = 68;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (Math.max(0, Math.min(100, score)) / 100) * c;
  const color =
    score >= 80 ? "#15803d" : score >= 60 ? "#b45309" : "#b91c1c";
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#e7e5e4"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: `0 ${c}` }}
          animate={{ strokeDasharray: `${dash} ${c}` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-display text-lg text-[color:var(--ink)] tabular-nums">
        {score}
      </div>
    </div>
  );
}

function LightBreakdown({ subScores }: { subScores: Company["subScores"] }) {
  return (
    <ul className="space-y-2.5">
      {SCORE_CRITERIA.map((c, i) => {
        const raw = subScores[c.key];
        const v = typeof raw === "number" ? Math.max(0, Math.min(100, raw)) : 0;
        const color =
          v >= 80 ? "bg-green-600" : v >= 60 ? "bg-amber-600" : "bg-red-600";
        return (
          <li key={c.key} className="grid grid-cols-[110px_1fr_36px] items-center gap-3">
            <span className="truncate text-xs text-stone-600">{c.label}</span>
            <div className="h-1.5 overflow-hidden rounded-full bg-stone-100">
              <motion.div
                className={`h-full ${color}`}
                initial={{ width: 0 }}
                animate={{ width: `${v}%` }}
                transition={{
                  delay: 0.1 + i * 0.03,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
            <span className="text-right text-xs text-[color:var(--ink)] tabular-nums">
              {v}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function MethodikSection({ categories }: { categories: Category[] }) {
  return (
    <section className="mt-24 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
            Methodik
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
            Deterministisch, transparent, nachvollziehbar.
          </h2>
          <p className="mt-4 text-[color:var(--ink-soft)]">
            Zwölf Kriterien mit festen Gewichten. Jeder Sub-Wert liegt zwischen
            0 und 100. Der Gesamt-Score ergibt sich als gewichteter
            Durchschnitt.
          </p>
          <pre className="mt-5 overflow-auto rounded-lg border border-stone-200 bg-[color:var(--background-warm)] p-4 text-xs text-[color:var(--ink)]">
            <code>{`Score = Σ (kriterium_wert × kriterium_gewicht) / 100`}</code>
          </pre>
          <p className="mt-4 text-xs text-stone-500">
            {categories.length}{" "}
            {categories.length === 1 ? "Kategorie" : "Kategorien"} aktuell im
            Index. Bewertungen werden manuell vergeben und jährlich neu
            geprüft.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SCORE_CRITERIA.map((c, i) => (
            <li
              key={c.key}
              className="rounded-lg border border-stone-200 bg-[color:var(--background-warm)] p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display text-sm text-[color:var(--ink)]">
                  {String(i + 1).padStart(2, "0")}. {c.label}
                </p>
                <span className="shrink-0 text-[10px] uppercase tracking-[0.12em] text-cyan-700">
                  {c.weight}%
                </span>
              </div>
              <p className="mt-1 text-xs text-stone-600">{c.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
