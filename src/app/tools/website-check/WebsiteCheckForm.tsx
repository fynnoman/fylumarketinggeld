"use client";

import { useState } from "react";
import Link from "next/link";
import type { AnalyzerResult, CheckResult, Severity } from "@/lib/analyzer";

type ApiResponse =
  | AnalyzerResult
  | { error: string; message: string };

type ViewState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "done"; data: AnalyzerResult };

type LeadState = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export default function WebsiteCheckForm() {
  const [url, setUrl] = useState("");
  const [view, setView] = useState<ViewState>({ status: "idle" });
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState<LeadState>({ status: "idle" });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!url.trim()) return;
    setView({ status: "loading" });
    setLead({ status: "idle" });
    try {
      const res = await fetch("/api/tools/website-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = (await res.json()) as ApiResponse;
      if (!res.ok || "error" in data) {
        const msg = "message" in data ? data.message : "Analyse fehlgeschlagen.";
        setView({ status: "error", message: msg });
        return;
      }
      setView({ status: "done", data });
    } catch {
      setView({ status: "error", message: "Verbindung zum Server gescheitert." });
    }
  }

  async function submitLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (view.status !== "done") return;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setLead({ status: "error", message: "Bitte gültige E-Mail-Adresse angeben." });
      return;
    }
    setLead({ status: "sending" });
    try {
      const res = await fetch("/api/tools/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          tool: "website-check",
          subject: `Website-Analyse-Report angefragt · Score ${view.data.score}`,
          summary:
            `URL: ${view.data.finalUrl}\n` +
            `Score: ${view.data.score}/100\n` +
            `Kritisch: ${view.data.totals.critical} · Warnung: ${view.data.totals.warning} · Gut: ${view.data.totals.good}`,
          details: view.data.checks
            .map((c) => `[${c.severity.toUpperCase()}] ${c.label}: ${c.detail}`)
            .join("\n"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setLead({ status: "sent" });
    } catch {
      setLead({
        status: "error",
        message: "Etwas ist schiefgelaufen. Bitte später erneut versuchen.",
      });
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={submit} className="relative glass rounded-3xl p-6 md:p-8 overflow-hidden">
        <span className="glass-edge" aria-hidden />
        <div className="relative">
          <label htmlFor="url" className="text-sm font-medium text-stone-800 mb-3 block">
            Welche Website soll analysiert werden?
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="url"
              type="text"
              inputMode="url"
              required
              placeholder="ihre-website.de"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-800 focus:border-cyan-500/70 focus:outline-none"
            />
            <button
              type="submit"
              disabled={view.status === "loading"}
              className="inline-flex items-center justify-center gap-2 btn-glass-ink px-6 py-3 rounded-2xl text-[13px] font-semibold relative overflow-hidden disabled:opacity-60"
            >
              <span className="btn-glass-shine" aria-hidden />
              <span className="relative">
                {view.status === "loading" ? "Analysiere …" : "Analyse starten"}
              </span>
              <span className="relative text-cyan-300">→</span>
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-3">
            Nur öffentliche URLs. Die Analyse dauert typischerweise 5–12 Sekunden.
          </p>
        </div>
      </form>

      {view.status === "loading" && <LoadingSkeleton />}

      {view.status === "error" && (
        <div className="rounded-3xl border border-red-200 bg-red-50/60 p-6">
          <div className="text-[11px] uppercase tracking-[0.32em] text-red-700 font-medium mb-2">
            Analyse nicht möglich
          </div>
          <p className="text-stone-800">{view.message}</p>
        </div>
      )}

      {view.status === "done" && (
        <ResultView data={view.data} email={email} setEmail={setEmail} lead={lead} onSubmit={submitLead} />
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="relative glass rounded-3xl p-8 overflow-hidden animate-pulse">
      <span className="glass-edge" aria-hidden />
      <div className="relative">
        <div className="h-4 w-32 bg-stone-200 rounded mb-4" />
        <div className="h-10 w-48 bg-stone-200 rounded mb-6" />
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="h-16 bg-stone-100 rounded-2xl" />
          <div className="h-16 bg-stone-100 rounded-2xl" />
          <div className="h-16 bg-stone-100 rounded-2xl" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-stone-100 rounded w-full" />
          <div className="h-4 bg-stone-100 rounded w-11/12" />
          <div className="h-4 bg-stone-100 rounded w-9/12" />
        </div>
      </div>
    </div>
  );
}

type ResultViewProps = {
  data: AnalyzerResult;
  email: string;
  setEmail: (v: string) => void;
  lead: LeadState;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function ResultView({ data, email, setEmail, lead, onSubmit }: ResultViewProps) {
  const criticals = data.checks.filter((c) => c.severity === "critical");
  const warnings = data.checks.filter((c) => c.severity === "warning");
  const goods = data.checks.filter((c) => c.severity === "good");

  return (
    <div className="space-y-6">
      <ScoreCard data={data} />

      {criticals.length > 0 && (
        <CheckGroup
          title="Kritisch"
          subtitle="Bitte zuerst beheben"
          accent="text-red-700"
          badgeClass="bg-red-100 text-red-700"
          items={criticals}
        />
      )}
      {warnings.length > 0 && (
        <CheckGroup
          title="Verbesserungspotenzial"
          subtitle="Sinnvoll zu adressieren"
          accent="text-amber-700"
          badgeClass="bg-amber-100 text-amber-700"
          items={warnings}
        />
      )}
      {goods.length > 0 && (
        <CheckGroup
          title="Gut"
          subtitle="Signale, die bereits stimmen"
          accent="text-emerald-700"
          badgeClass="bg-emerald-100 text-emerald-700"
          items={goods}
        />
      )}

      <MetaCard data={data} />

      {/* Lead Gate */}
      {lead.status !== "sent" && (
        <div className="rounded-3xl border border-dashed border-stone-300 p-6 md:p-8 bg-white/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
                Optional
              </div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1.5">
                Ergebnis als PDF-Report erhalten.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Wir schicken Ihnen den Report per E-Mail — inklusive Handlungsempfehlungen zu den
                wichtigsten Problemen. Nur Ihre E-Mail wird übermittelt.
              </p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="ihre.email@firma.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 focus:border-cyan-500/70 focus:outline-none min-w-[240px]"
              />
              <button
                type="submit"
                disabled={lead.status === "sending"}
                className="inline-flex items-center justify-center gap-2 btn-glass-cyan px-5 py-3 rounded-full text-[13px] font-semibold relative overflow-hidden disabled:opacity-60"
              >
                <span className="btn-glass-shine" aria-hidden />
                <span className="relative">
                  {lead.status === "sending" ? "Wird gesendet …" : "Report anfragen"}
                </span>
              </button>
            </form>
          </div>
          {lead.status === "error" && (
            <p className="text-sm text-red-600 mt-3">{lead.message}</p>
          )}
        </div>
      )}

      {lead.status === "sent" && (
        <div className="rounded-3xl border border-cyan-200 bg-cyan-50/60 p-6 md:p-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-800 font-medium mb-2">
            Erhalten
          </div>
          <p className="text-stone-800 font-medium">
            Danke — der Report ist unterwegs. Wir melden uns innerhalb eines Werktags.
          </p>
        </div>
      )}

      <div className="text-center pt-4">
        <Link
          href="/buchen"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan-deep)] hover:underline underline-offset-4"
        >
          Persönliche Website-Analyse buchen
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

function ScoreCard({ data }: { data: AnalyzerResult }) {
  const scoreColor =
    data.score >= 80 ? "text-emerald-700" : data.score >= 60 ? "text-amber-600" : "text-red-600";
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 md:p-8 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]">
      <div
        aria-hidden
        className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-50 pointer-events-none"
      />
      <div className="relative flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
        <div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
            Website-Score
          </div>
          <div className="flex items-baseline gap-3">
            <span className={`text-6xl md:text-7xl font-semibold tracking-[-0.03em] tabular-nums ${scoreColor}`}>
              {data.score}
            </span>
            <span className="text-stone-400 text-xl font-medium tabular-nums">/ 100</span>
          </div>
          <div className="mt-3 text-sm text-stone-500 break-all">
            Analysiert: <a href={data.finalUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--cyan-deep)] hover:underline">{data.finalUrl}</a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 md:min-w-[320px]">
          <StatBox label="Kritisch" value={data.totals.critical} tone="critical" />
          <StatBox label="Warnung" value={data.totals.warning} tone="warning" />
          <StatBox label="Gut" value={data.totals.good} tone="good" />
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, tone }: { label: string; value: number; tone: Severity }) {
  const toneMap: Record<Severity, string> = {
    critical: "text-red-700 bg-red-50 border-red-100",
    warning: "text-amber-700 bg-amber-50 border-amber-100",
    good: "text-emerald-700 bg-emerald-50 border-emerald-100",
  };
  return (
    <div className={`rounded-2xl border p-3 text-center ${toneMap[tone]}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] font-medium opacity-80">{label}</div>
      <div className="text-2xl font-semibold tabular-nums mt-1">{value}</div>
    </div>
  );
}

type CheckGroupProps = {
  title: string;
  subtitle: string;
  accent: string;
  badgeClass: string;
  items: CheckResult[];
};

function CheckGroup({ title, subtitle, accent, badgeClass, items }: CheckGroupProps) {
  return (
    <div className="relative glass rounded-3xl p-6 md:p-8 overflow-hidden">
      <span className="glass-edge" aria-hidden />
      <div className="relative">
        <div className="mb-5 flex items-baseline justify-between gap-3">
          <div>
            <h3 className={`text-xl font-semibold ${accent}`}>{title}</h3>
            <p className="text-xs text-stone-500 mt-0.5">{subtitle}</p>
          </div>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
            {items.length}
          </span>
        </div>
        <ul className="space-y-3">
          {items.map((c) => (
            <li key={c.id} className="rounded-2xl bg-white/60 border border-stone-200/60 p-4">
              <div className="text-sm font-semibold text-[var(--ink)]">{c.label}</div>
              <div className="text-sm text-stone-600 mt-1 leading-relaxed break-words">{c.detail}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MetaCard({ data }: { data: AnalyzerResult }) {
  const rows: [string, string | number | null][] = [
    ["Title", data.meta.title],
    ["Description", data.meta.description],
    ["Canonical", data.meta.canonical],
    ["Robots", data.meta.robots],
    ["Viewport", data.meta.viewport],
    ["Sprache", data.meta.lang],
    ["OG Title", data.meta.ogTitle],
    ["OG Image", data.meta.ogImage],
    ["Twitter Card", data.meta.twitterCard],
    ["Hreflang-Alternativen", data.meta.hreflangCount || null],
    ["H1", data.headings.firstH1],
    ["H1 · Anzahl", data.headings.h1Count],
    ["H2 · Anzahl", data.headings.h2Count],
    ["Wörter", data.content.wordCount],
    ["Bilder gesamt", data.images.total],
    ["Bilder ohne Alt", data.images.missingAlt],
    ["Interne Links", data.links.internal],
    ["Externe Links", data.links.external],
    ["Response-Zeit (ms)", data.technical.responseMs],
    ["HTML-Größe (KB)", Math.round(data.technical.htmlBytes / 1024)],
    ["Schema-Typen", data.technical.schemaTypes.length ? data.technical.schemaTypes.join(", ") : null],
  ];
  return (
    <details className="relative glass rounded-3xl overflow-hidden group">
      <summary className="cursor-pointer list-none px-6 md:px-8 py-5 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-[var(--ink)]">Alle gemessenen Werte im Detail</span>
        <span className="text-[var(--cyan-deep)] transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-stone-200/60">
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4 text-sm">
          {rows.map(([label, val]) => (
            <div key={label} className="flex gap-3">
              <dt className="w-40 flex-shrink-0 text-stone-500">{label}</dt>
              <dd className="flex-1 text-stone-800 break-all">{val ?? <span className="text-stone-400">—</span>}</dd>
            </div>
          ))}
        </dl>
      </div>
    </details>
  );
}
