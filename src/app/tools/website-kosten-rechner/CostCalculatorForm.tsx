"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculate, formatEur, type CalculatorInput } from "@/lib/pricing";

const BRANCHEN = [
  "Kanzlei / Anwalt",
  "Steuerberater",
  "Zahnarzt / Arzt / Praxis",
  "Immobilienmakler",
  "Elektriker / SHK / Dachdecker",
  "Photovoltaik / Energie",
  "B2B-Dienstleister",
  "Beratung / Coaching (B2B)",
  "Andere",
];

const DEFAULTS: CalculatorInput = {
  branche: "",
  seiten: "6-10",
  designLevel: "premium",
  cms: "basic",
  blog: false,
  seo: "basic",
  mehrsprachig: "no",
  formulare: "simple",
  integrationen: "none",
  shop: "none",
  customFunctions: "none",
};

type FieldGroupProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function FieldGroup({ eyebrow, title, children }: FieldGroupProps) {
  return (
    <div className="border-t border-stone-200/70 pt-8 mt-8 first:border-none first:pt-0 first:mt-0">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
          {eyebrow}
        </span>
        <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
          {title}
        </span>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

type SegmentedProps<T extends string> = {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string; description?: string }[];
};

function Segmented<T extends string>({ label, value, onChange, options }: SegmentedProps<T>) {
  return (
    <div>
      <div className="text-sm font-medium text-stone-800 mb-3">{label}</div>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`text-left rounded-2xl px-4 py-3 border transition-all ${
                active
                  ? "border-cyan-500/70 bg-white shadow-[0_4px_20px_rgba(6,182,212,0.12)]"
                  : "border-stone-200 bg-white/60 hover:border-stone-300"
              }`}
              aria-pressed={active}
            >
              <div className={`text-sm font-semibold ${active ? "text-[var(--ink)]" : "text-stone-700"}`}>
                {opt.label}
              </div>
              {opt.description && (
                <div className="text-xs text-stone-500 mt-0.5 leading-relaxed">{opt.description}</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
  description,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  description?: string;
}) {
  return (
    <div>
      <div className="text-sm font-medium text-stone-800 mb-3">{label}</div>
      <div className="grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`text-left rounded-2xl px-4 py-3 border transition-all ${
            value
              ? "border-cyan-500/70 bg-white shadow-[0_4px_20px_rgba(6,182,212,0.12)]"
              : "border-stone-200 bg-white/60 hover:border-stone-300"
          }`}
          aria-pressed={value}
        >
          <div className={`text-sm font-semibold ${value ? "text-[var(--ink)]" : "text-stone-700"}`}>
            Ja
          </div>
          {description && <div className="text-xs text-stone-500 mt-0.5">{description}</div>}
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`text-left rounded-2xl px-4 py-3 border transition-all ${
            !value
              ? "border-cyan-500/70 bg-white shadow-[0_4px_20px_rgba(6,182,212,0.12)]"
              : "border-stone-200 bg-white/60 hover:border-stone-300"
          }`}
          aria-pressed={!value}
        >
          <div className={`text-sm font-semibold ${!value ? "text-[var(--ink)]" : "text-stone-700"}`}>
            Nein
          </div>
        </button>
      </div>
    </div>
  );
}

type LeadState = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export default function CostCalculatorForm() {
  const [input, setInput] = useState<CalculatorInput>(DEFAULTS);
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState<LeadState>({ status: "idle" });

  const result = useMemo(() => calculate(input), [input]);
  const branchePicked = input.branche.trim().length > 0;

  const patch = <K extends keyof CalculatorInput>(key: K, value: CalculatorInput[K]) =>
    setInput((prev) => ({ ...prev, [key]: value }));

  async function submitLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          tool: "website-kosten-rechner",
          subject: `Kosten-Rechner-Report angefragt · ${result.projectClassLabel}`,
          summary:
            `Projektklasse: ${result.projectClassLabel}\n` +
            `Investitions-Spanne: ${formatEur(result.investment.from)} – ${formatEur(result.investment.to)}\n` +
            `Zeitplan: ${result.timelineWeeks.from}–${result.timelineWeeks.to} Wochen\n` +
            `Branche: ${input.branche || "unspezifiziert"}`,
          details: JSON.stringify(input, null, 2),
        }),
      });
      if (!res.ok) throw new Error("Server-Antwort nicht ok");
      setLead({ status: "sent" });
    } catch {
      setLead({
        status: "error",
        message: "Etwas ist schiefgelaufen. Bitte später erneut versuchen oder direkt per E-Mail melden.",
      });
    }
  }

  return (
    <div className="relative glass rounded-3xl p-6 md:p-10 overflow-hidden">
      <span className="glass-edge" aria-hidden />
      <div className="relative">
        <FieldGroup eyebrow="§a" title="Ihr Vorhaben">
          <div>
            <label htmlFor="branche" className="text-sm font-medium text-stone-800 mb-3 block">
              Branche
            </label>
            <select
              id="branche"
              value={input.branche}
              onChange={(e) => patch("branche", e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-800 focus:border-cyan-500/70 focus:outline-none"
            >
              <option value="">Bitte wählen</option>
              {BRANCHEN.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <Segmented
            label="Ungefährer Umfang"
            value={input.seiten}
            onChange={(v) => patch("seiten", v)}
            options={[
              { value: "3-5", label: "3 – 5 Seiten", description: "Kompakter Auftritt" },
              { value: "6-10", label: "6 – 10 Seiten", description: "Vollständige Website" },
              { value: "11-20", label: "11 – 20 Seiten", description: "Erweiterte Struktur" },
              { value: "20+", label: "20+ Seiten", description: "Umfangreiche Site" },
            ]}
          />
        </FieldGroup>

        <FieldGroup eyebrow="§b" title="Gestaltung">
          <Segmented
            label="Design-Tiefe"
            value={input.designLevel}
            onChange={(v) => patch("designLevel", v)}
            options={[
              { value: "standard", label: "Standard", description: "Sauber, funktional" },
              { value: "premium", label: "Premium", description: "Erweiterte Layout-Studien" },
              { value: "signature", label: "Signature", description: "Editorial, individuell" },
            ]}
          />

          <Segmented
            label="Redaktionelles System"
            value={input.cms}
            onChange={(v) => patch("cms", v)}
            options={[
              { value: "none", label: "Kein CMS", description: "Statischer Auftritt" },
              { value: "basic", label: "Einfaches CMS", description: "Redaktion selbst pflegbar" },
              { value: "headless", label: "Headless-CMS", description: "Sanity, Contentful o. ä." },
            ]}
          />

          <Toggle
            label="Blog / Ratgeber?"
            value={input.blog}
            onChange={(v) => patch("blog", v)}
            description="Für SEO und Reichweite"
          />
        </FieldGroup>

        <FieldGroup eyebrow="§c" title="Funktionalität">
          <Segmented
            label="Formulare"
            value={input.formulare}
            onChange={(v) => patch("formulare", v)}
            options={[
              { value: "simple", label: "Einfach", description: "Kontakt, Anfrage" },
              { value: "multistep", label: "Mehrstufig", description: "Guided Flow" },
              { value: "logic", label: "Mit Logik", description: "Vorqualifikation, Verzweigung" },
            ]}
          />

          <Segmented
            label="Externe Integrationen"
            value={input.integrationen}
            onChange={(v) => patch("integrationen", v)}
            options={[
              { value: "none", label: "Keine", description: "Standard-Formulare reichen" },
              { value: "few", label: "Wenige", description: "CRM, Kalender, Zahlung" },
              { value: "many", label: "Viele", description: "Mehrere Schnittstellen" },
            ]}
          />

          <Segmented
            label="Individuelle Funktionen"
            value={input.customFunctions}
            onChange={(v) => patch("customFunctions", v)}
            options={[
              { value: "none", label: "Keine", description: "Standard-Funktionen genügen" },
              { value: "some", label: "Einige", description: "Rechner, Konfigurator, Portal" },
              { value: "many", label: "Umfangreich", description: "Sonderentwicklungen" },
            ]}
          />
        </FieldGroup>

        <FieldGroup eyebrow="§d" title="Reichweite & Shop">
          <Segmented
            label="SEO"
            value={input.seo}
            onChange={(v) => patch("seo", v)}
            options={[
              { value: "none", label: "Keine SEO", description: "Nur Basis-Struktur" },
              { value: "basic", label: "SEO-Foundation", description: "Meta, Schema, Local SEO" },
              { value: "advanced", label: "Erweitert", description: "Content-Aufbau inkl." },
            ]}
          />

          <Segmented
            label="Sprachen"
            value={input.mehrsprachig}
            onChange={(v) => patch("mehrsprachig", v)}
            options={[
              { value: "no", label: "Nur Deutsch", description: "Standard" },
              { value: "two", label: "Zwei Sprachen", description: "DE + EN o. ä." },
              { value: "three_plus", label: "Drei oder mehr", description: "Mehrsprachig" },
            ]}
          />

          <Segmented
            label="Shop-Bereich"
            value={input.shop}
            onChange={(v) => patch("shop", v)}
            options={[
              { value: "none", label: "Kein Shop", description: "Nur Website" },
              { value: "small", label: "Klein", description: "Bis 50 Produkte" },
              { value: "medium", label: "Mittel", description: "Vollständiger Shop" },
              { value: "large", label: "Groß", description: "Sonderfunktionen" },
            ]}
          />
        </FieldGroup>

        {/* Result */}
        <div className="mt-10 border-t border-stone-200/70 pt-8">
          {!branchePicked ? (
            <div className="rounded-2xl bg-white/60 border border-stone-200 p-6 text-center text-stone-500 text-sm">
              Wählen Sie oben eine Branche, um Ihre erste Einschätzung zu sehen.
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 md:p-8 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]">
              <div
                aria-hidden
                className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-50 pointer-events-none"
              />
              <div className="relative">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
                      Projektklasse
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display italic text-[var(--cyan-deep)] text-3xl md:text-4xl leading-none">
                        {result.projectClassLabel}
                      </span>
                      <span className="text-stone-400 text-sm">
                        {result.timelineWeeks.from}–{result.timelineWeeks.to} Wochen
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
                      Investitions-Spanne
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tabular-nums tracking-tight">
                      {formatEur(result.investment.from)} –{" "}
                      {formatEur(result.investment.to)}
                    </div>
                    <div className="text-xs text-stone-500 mt-1">netto, unverbindlich</div>
                  </div>
                </div>

                <p className="text-stone-700 leading-relaxed mb-6">{result.scopeDescription}</p>

                {result.drivers.length > 0 && (
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-3">
                      Preistreiber
                    </div>
                    <ul className="space-y-1.5 text-sm text-stone-700">
                      {result.drivers.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="font-display italic text-[var(--cyan-deep)] mt-0.5">
                            →
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/buchen"
                    className="inline-flex items-center justify-center gap-2 btn-glass-ink px-5 py-3 rounded-full text-[13px] font-semibold relative overflow-hidden"
                  >
                    <span className="btn-glass-shine" aria-hidden />
                    <span className="relative">Individuelles Angebot anfragen</span>
                    <span className="relative text-cyan-300">→</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setInput(DEFAULTS)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Zurücksetzen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lead-Gate: optional PDF via E-Mail */}
        {branchePicked && lead.status !== "sent" && (
          <div className="mt-6 rounded-3xl border border-dashed border-stone-300 p-6 md:p-8 bg-white/40">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-md">
                <div className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium mb-2">
                  Optional
                </div>
                <h3 className="text-lg font-semibold text-[var(--ink)] mb-1.5">
                  Diese Einschätzung als PDF erhalten.
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Wir schicken Ihnen die Einschätzung als aufgeräumten PDF-Report zu — inklusive der
                  Preistreiber, damit Sie sie intern teilen können.
                </p>
              </div>
              <form onSubmit={submitLead} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
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
          <div className="mt-6 rounded-3xl border border-cyan-200 bg-cyan-50/60 p-6 md:p-8 text-center">
            <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-800 font-medium mb-2">
              Erhalten
            </div>
            <p className="text-stone-800 font-medium">
              Danke — der Report ist unterwegs. Wir melden uns innerhalb eines Werktags.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
