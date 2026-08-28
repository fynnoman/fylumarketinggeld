"use client";

import { useState } from "react";
import Link from "next/link";
import type { SeoCheckResponse } from "@/app/api/tools/seo-check/route";

type Severity = "critical" | "warning" | "good";

type Check = SeoCheckResponse["checks"][number];

type ViewState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "done"; data: SeoCheckResponse };

type LeadState = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export default function SeoCheckForm() {
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
      const res = await fetch("/api/tools/seo-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok || "error" in data) {
        setView({ status: "error", message: data.message ?? "Analyse fehlgeschlagen." });
        return;
      }
      setView({ status: "done", data: data as SeoCheckResponse });
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
          tool: "seo-check",
          subject: `SEO-Check-Report angefragt · Score ${view.data.seoScore}`,
          summary:
            `URL: ${view.data.finalUrl}\n` +
            `SEO-Score: ${view.data.seoScore}/100\n` +
            `Kritisch: ${view.data.totals.critical} · Warnung: ${view.data.totals.warning} · Gut: ${view.data.totals.good}`,
          details: view.data.checks
            .map(
              (c) =>
                `[${c.severity.toUpperCase()}] ${c.label}\n${c.detail}` +
                (c.recommendation ? `\n→ ${c.recommendation}` : ""),
            )
            .join("\n\n"),
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
          <label htmlFor="seo-url" className="text-sm font-medium text-stone-800 mb-3 block">
            Welche Domain soll geprüft werden?
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="seo-url"
              type="text"
              inputMode="url"
              required
              placeholder="ihre-domain.de"
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
                {view.status === "loading" ? "Prüfe …" : "SEO-Check starten"}
              </span>
              <span className="relative text-cyan-300">→</span>
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-3">
            Nur öffentliche URLs. Ergebnisse werden nicht gespeichert.
          </p>
        </div>
      </form>

      {view.status === "loading" && <LoadingSkeleton />}

      {view.status === "error" && (
        <div className="rounded-3xl border border-red-200 bg-red-50/60 p-6">
          <div className="text-[11px] uppercase tracking-[0.32em] text-red-700 font-medium mb-2">
            SEO-Check nicht möglich
          </div>
          <p className="text-stone-800">{view.message}</p>
        </div>
      )}

      {view.status === "done" && (
        <ResultView
          data={view.data}
          email={email}
          setEmail={setEmail}
          lead={lead}
          onSubmit={submitLead}
        />
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
        <div className="space-y-3">
          <div className="h-24 bg-stone-100 rounded-2xl" />
          <div className="h-24 bg-stone-100 rounded-2xl" />
          <div className="h-24 bg-stone-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

function ResultView({
  data,
  email,
  setEmail,
  lead,
  onSubmit,
}: {
  data: SeoCheckResponse;
  email: string;
  setEmail: (v: string) => void;
  lead: LeadState;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const priority: Check[] = [
    ...data.checks.filter((c) => c.severity === "critical"),
    ...data.checks.filter((c) => c.severity === "warning"),
  ];
  const goods = data.checks.filter((c) => c.severity === "good");

  return (
    <div className="space-y-6">
      <ScoreCard data={data} />

      {priority.length > 0 ? (
        <div className="space-y-3">
          <div className="mb-2 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
              §
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Prioritätenliste
            </span>
          </div>
          <ol className="space-y-3">
            {priority.map((c, i) => (
              <PriorityItem key={c.id} index={i + 1} check={c} />
            ))}
          </ol>
        </div>
      ) : (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 md:p-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-800 font-medium mb-2">
            Sauber
          </div>
          <p className="text-stone-800 font-medium">
            Keine kritischen oder warnungswürdigen SEO-Findings. Die geprüften Signale stimmen.
          </p>
        </div>
      )}

      {goods.length > 0 && (
        <details className="relative glass rounded-3xl overflow-hidden group">
          <summary className="cursor-pointer list-none px-6 md:px-8 py-5 flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-semibold text-[var(--ink)]">
                Signale, die bereits stimmen
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5 font-semibold">
                {goods.length}
              </span>
            </div>
            <span className="text-[var(--cyan-deep)] transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-stone-200/60">
            <ul className="pt-4 space-y-2">
              {goods.map((c) => (
                <li key={c.id} className="text-sm">
                  <span className="font-semibold text-emerald-700">{c.label}: </span>
                  <span className="text-stone-600">{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      )}

      {/* Lead Gate */}
      {lead.status !== "sent" && (
        <div className="rounded-3xl border border-dashed border-stone-300 p-6 md:p-8 bg-white/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
                Optional
              </div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1.5">
                Vollständigen Report per E-Mail erhalten.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Wir schicken Ihnen die Prioritätenliste inkl. Handlungsempfehlungen als PDF —
                praktisch, um sie intern zu teilen. Nur Ihre E-Mail wird übermittelt.
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
          {lead.status === "error" && <p className="text-sm text-red-600 mt-3">{lead.message}</p>}
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
          Persönliche SEO-Analyse buchen
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

function ScoreCard({ data }: { data: SeoCheckResponse }) {
  const scoreColor =
    data.seoScore >= 80
      ? "text-emerald-700"
      : data.seoScore >= 60
        ? "text-amber-600"
        : "text-red-600";
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 md:p-8 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]">
      <div
        aria-hidden
        className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-50 pointer-events-none"
      />
      <div className="relative flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
        <div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
            SEO-Score
          </div>
          <div className="flex items-baseline gap-3">
            <span
              className={`text-6xl md:text-7xl font-semibold tracking-[-0.03em] tabular-nums ${scoreColor}`}
            >
              {data.seoScore}
            </span>
            <span className="text-stone-400 text-xl font-medium tabular-nums">/ 100</span>
          </div>
          <div className="mt-3 text-sm text-stone-500 break-all">
            Geprüft:{" "}
            <a
              href={data.finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan-deep)] hover:underline"
            >
              {data.finalUrl}
            </a>
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

function PriorityItem({ index, check }: { index: number; check: Check }) {
  const badge: Record<Severity, string> = {
    critical: "bg-red-100 text-red-700",
    warning: "bg-amber-100 text-amber-700",
    good: "bg-emerald-100 text-emerald-700",
  };
  const badgeLabel: Record<Severity, string> = {
    critical: "Kritisch",
    warning: "Warnung",
    good: "Gut",
  };
  return (
    <li className="relative glass rounded-3xl p-6 overflow-hidden">
      <span className="glass-edge" aria-hidden />
      <div className="relative flex gap-5">
        <div className="flex-shrink-0">
          <span className="font-display italic text-[var(--cyan-deep)] text-3xl leading-none tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
            <h3 className="text-base font-semibold text-[var(--ink)] leading-tight">
              {check.label}
            </h3>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] font-semibold ${badge[check.severity]}`}
            >
              {badgeLabel[check.severity]}
            </span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed mb-3 break-words">
            {check.detail}
          </p>
          {check.recommendation && (
            <div className="border-l-2 border-[var(--cyan-deep)] pl-3 py-1">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--cyan-deep)] font-semibold mb-1">
                So beheben
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">{check.recommendation}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
