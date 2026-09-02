"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scoreBand } from "@/lib/digital-index";

type CheckResponse =
  | {
      ok: true;
      url: string;
      finalUrl: string;
      score: number;
      subScores: {
        technical_seo: number;
        structured_data: number;
        content_quality: number;
        mobile_ux: number;
      };
      totals: { critical: number; warning: number; good: number };
      findings: Array<{
        severity: "critical" | "warning" | "good";
        label: string;
        detail: string;
        recommendation?: string;
      }>;
      fetchedAt: string;
    }
  | { ok: false; error: string };

const SUB_LABELS: Record<string, string> = {
  technical_seo: "Technische SEO",
  structured_data: "Structured Data",
  content_quality: "Contentqualität",
  mobile_ux: "Mobile UX",
};

function toneClass(v: number): string {
  if (v >= 80) return "bg-green-600";
  if (v >= 60) return "bg-amber-600";
  return "bg-red-600";
}

function ScoreRing({ score }: { score: number }) {
  const size = 140;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (Math.max(0, Math.min(100, score)) / 100) * c;
  const color =
    score >= 80 ? "#15803d" : score >= 60 ? "#b45309" : "#b91c1c";
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#e7e5e4" strokeWidth={stroke} fill="none" />
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
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-4xl text-[color:var(--ink)] tabular-nums">
          {score}
        </span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500">
          von 100
        </span>
      </div>
    </div>
  );
}

export default function SelfCheck() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [result, setResult] = useState<CheckResponse | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setState("loading");
    setResult(null);
    try {
      const res = await fetch("/api/digital-index/check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = (await res.json()) as CheckResponse;
      setResult(data);
      setState("done");
    } catch {
      setResult({ ok: false, error: "Netzwerkfehler. Bitte erneut versuchen." });
      setState("done");
    }
  }

  return (
    <section className="mt-20 overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
            Self-Check
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
            Ihr Fylu Digital Score in 15 Sekunden.
          </h2>
          <p className="mt-3 max-w-xl text-[color:var(--ink-soft)]">
            URL eingeben, Fylu prüft Ihre Website serverseitig und liefert
            direkt einen Score von 0 bis 100 plus die vier wichtigsten
            technischen Sub-Werte. Ohne Registrierung, ohne Speicherung.
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Website-URL</span>
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://ihre-website.de"
            className="w-full rounded-full border border-stone-200 bg-white py-4 pl-10 pr-5 text-base text-[color:var(--ink)] placeholder:text-stone-400 shadow-sm transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
            disabled={state === "loading"}
          />
        </label>
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "loading" ? (
            <>
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60 40" />
              </svg>
              Prüfe …
            </>
          ) : (
            "Score berechnen"
          )}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {state === "done" && result ? (
          <motion.div
            key={result.ok ? "ok" : "err"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            {result.ok ? (
              <div className="rounded-2xl border border-stone-200 bg-[color:var(--background-warm)] p-6 sm:p-8">
                <div className="flex flex-col items-start gap-6 sm:flex-row">
                  <ScoreRing score={result.score} />

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-stone-500">
                      Fylu Digital Score
                    </p>
                    <p className="mt-1 font-display text-xl text-[color:var(--ink)]">
                      {scoreBand(result.score).label}
                    </p>
                    <p className="mt-2 truncate text-sm text-stone-500">
                      Gemessen an {new URL(result.finalUrl).hostname}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {(
                        [
                          "technical_seo",
                          "structured_data",
                          "content_quality",
                          "mobile_ux",
                        ] as const
                      ).map((key) => {
                        const v = result.subScores[key];
                        return (
                          <div key={key}>
                            <div className="flex items-baseline justify-between text-xs">
                              <span className="text-stone-600">
                                {SUB_LABELS[key]}
                              </span>
                              <span className="text-[color:var(--ink)] tabular-nums">
                                {v}
                              </span>
                            </div>
                            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-stone-100">
                              <motion.div
                                className={`h-full ${toneClass(v)}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${v}%` }}
                                transition={{
                                  duration: 0.7,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {result.findings.length > 0 ? (
                  <div className="mt-8">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-stone-500">
                      Prioritäre Findings
                    </p>
                    <ul className="mt-3 divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
                      {result.findings.map((f, i) => (
                        <li key={i} className="flex gap-3 px-4 py-3">
                          <span
                            aria-hidden="true"
                            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                              f.severity === "critical"
                                ? "bg-red-500"
                                : "bg-amber-500"
                            }`}
                          />
                          <div className="min-w-0">
                            <p className="font-display text-sm text-[color:var(--ink)]">
                              {f.label}
                            </p>
                            <p className="mt-0.5 text-sm text-stone-600">
                              {f.detail}
                            </p>
                            {f.recommendation ? (
                              <p className="mt-1 text-xs text-cyan-700">
                                {f.recommendation}
                              </p>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-8 rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-white p-5 sm:p-6">
                  <p className="font-display text-lg text-[color:var(--ink)]">
                    Score verbessern.
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
                    15 Minuten Vorgespräch reichen um zu klären, welche Punkte
                    Ihren Score real anheben. Persönlich, unverbindlich,
                    kostenfrei.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="/buchen"
                      className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
                    >
                      Termin buchen
                    </a>
                    <a
                      href="/tools/website-check"
                      className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-stone-100"
                    >
                      Ausführliche Digitalanalyse
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-xs text-stone-500">
                  Gemessen am{" "}
                  {new Date(result.fetchedAt).toLocaleString("de-DE")}. Keine
                  Speicherung, keine Weitergabe.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <p className="font-display text-lg text-[color:var(--ink)]">
                  Prüfung nicht möglich.
                </p>
                <p className="mt-2 text-sm text-red-800">{result.error}</p>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
