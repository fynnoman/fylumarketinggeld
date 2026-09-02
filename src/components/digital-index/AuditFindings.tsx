import type { AnalyzerError, AnalyzerResult } from "@/lib/analyzer";

type Props = {
  audit: AnalyzerResult | AnalyzerError | null;
};

type FindingStatus = "good" | "warning" | "critical" | "info";

type Finding = {
  label: string;
  value: string;
  status: FindingStatus;
  hint?: string;
};

type Group = {
  title: string;
  findings: Finding[];
};

function isError(audit: AnalyzerResult | AnalyzerError): audit is AnalyzerError {
  return "code" in audit;
}

function toGroups(r: AnalyzerResult): Group[] {
  const meta: Finding[] = [];
  const tech: Finding[] = [];
  const structured: Finding[] = [];
  const content: Finding[] = [];

  // Technisch
  tech.push({
    label: "HTTPS",
    value: r.technical.isHttps ? "aktiv" : "fehlt",
    status: r.technical.isHttps ? "good" : "critical",
  });
  tech.push({
    label: "Ladezeit",
    value: `${r.technical.responseMs} ms`,
    status:
      r.technical.responseMs < 800
        ? "good"
        : r.technical.responseMs < 2500
          ? "warning"
          : "critical",
  });
  tech.push({
    label: "HTML-Gewicht",
    value: `${Math.round(r.technical.htmlBytes / 1024)} KB`,
    status:
      r.technical.htmlBytes < 200_000
        ? "good"
        : r.technical.htmlBytes < 700_000
          ? "warning"
          : "critical",
  });
  tech.push({
    label: "Mobile Viewport",
    value: r.meta.viewport ? "gesetzt" : "fehlt",
    status: r.meta.viewport ? "good" : "critical",
  });
  tech.push({
    label: "Sprach-Attribut",
    value: r.meta.lang ?? "fehlt",
    status: r.meta.lang ? "good" : "warning",
  });
  tech.push({
    label: "Favicon",
    value: r.technical.hasFavicon ? "vorhanden" : "fehlt",
    status: r.technical.hasFavicon ? "good" : "warning",
  });

  // Meta & Struktur
  meta.push({
    label: "Title-Tag",
    value: r.meta.title ? `${r.meta.titleLength} Zeichen` : "fehlt",
    status:
      !r.meta.title
        ? "critical"
        : r.meta.titleLength >= 30 && r.meta.titleLength <= 65
          ? "good"
          : "warning",
  });
  meta.push({
    label: "Meta-Description",
    value: r.meta.description
      ? `${r.meta.descriptionLength} Zeichen`
      : "fehlt",
    status:
      !r.meta.description
        ? "critical"
        : r.meta.descriptionLength >= 100 && r.meta.descriptionLength <= 165
          ? "good"
          : "warning",
  });
  meta.push({
    label: "Canonical",
    value: r.meta.canonical ? "gesetzt" : "fehlt",
    status: r.meta.canonical ? "good" : "warning",
  });
  meta.push({
    label: "H1",
    value:
      r.headings.h1Count === 0
        ? "fehlt"
        : r.headings.h1Count === 1
          ? "eindeutig"
          : `${r.headings.h1Count} vorhanden`,
    status:
      r.headings.h1Count === 0
        ? "critical"
        : r.headings.h1Count === 1
          ? "good"
          : "warning",
  });
  meta.push({
    label: "Open Graph",
    value: r.meta.ogTitle && r.meta.ogImage ? "komplett" : "unvollständig",
    status: r.meta.ogTitle && r.meta.ogImage ? "good" : "warning",
  });
  meta.push({
    label: "Robots-Meta",
    value: r.technical.noindex ? "noindex gesetzt" : "indexierbar",
    status: r.technical.noindex ? "critical" : "good",
  });

  // Structured Data
  structured.push({
    label: "Schema.org",
    value: r.technical.hasSchemaOrg ? "vorhanden" : "fehlt",
    status: r.technical.hasSchemaOrg ? "good" : "critical",
  });
  structured.push({
    label: "LocalBusiness",
    value: r.local.hasLocalBusiness ? "vorhanden" : "fehlt",
    status: r.local.hasLocalBusiness ? "good" : "critical",
  });
  structured.push({
    label: "Schema-Typen",
    value:
      r.technical.schemaTypes.length > 0
        ? r.technical.schemaTypes.slice(0, 4).join(", ") +
          (r.technical.schemaTypes.length > 4 ? " …" : "")
        : "keine",
    status: r.technical.schemaTypes.length > 0 ? "info" : "warning",
  });
  structured.push({
    label: "hreflang",
    value:
      r.meta.hreflangCount > 0
        ? `${r.meta.hreflangCount} Sprachversion${r.meta.hreflangCount === 1 ? "" : "en"}`
        : "keine",
    status: "info",
  });

  // Content
  content.push({
    label: "Wortzahl",
    value: `${r.content.wordCount} Wörter`,
    status:
      r.content.wordCount > 400
        ? "good"
        : r.content.wordCount > 150
          ? "warning"
          : "critical",
  });
  content.push({
    label: "Bilder ohne Alt",
    value:
      r.images.total === 0
        ? "keine Bilder"
        : `${r.images.missingAlt} von ${r.images.total}`,
    status:
      r.images.total === 0
        ? "info"
        : r.images.missingAlt === 0
          ? "good"
          : r.images.missingAlt < r.images.total * 0.2
            ? "warning"
            : "critical",
  });
  content.push({
    label: "CTA-Erwähnungen",
    value: `${r.content.ctaCount}`,
    status:
      r.content.ctaCount === 0
        ? "critical"
        : r.content.ctaCount < 3
          ? "warning"
          : "good",
  });
  content.push({
    label: "Lokale Erwähnung",
    value: r.local.mentionsCity ? "vorhanden" : "fehlt",
    status: r.local.mentionsCity ? "good" : "warning",
  });
  content.push({
    label: "Interne Links",
    value: `${r.links.internal}`,
    status:
      r.links.internal >= 10 ? "good" : r.links.internal >= 3 ? "warning" : "critical",
  });

  return [
    { title: "Technisch", findings: tech },
    { title: "Meta & Struktur", findings: meta },
    { title: "Structured Data", findings: structured },
    { title: "Content", findings: content },
  ];
}

function DotIcon({ status }: { status: FindingStatus }) {
  const color =
    status === "good"
      ? "bg-green-500"
      : status === "warning"
        ? "bg-amber-500"
        : status === "critical"
          ? "bg-red-500"
          : "bg-stone-400";
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 shrink-0 rounded-full ${color}`}
    />
  );
}

export default function AuditFindings({ audit }: Props) {
  if (!audit) {
    return null;
  }

  if (isError(audit)) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
          Automatischer Audit
        </p>
        <p className="mt-2 font-display text-lg text-[color:var(--ink)]">
          Website konnte nicht analysiert werden.
        </p>
        <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
          {audit.message}
        </p>
      </div>
    );
  }

  const groups = toGroups(audit);
  const totalOk = audit.totals.good;
  const totalWarn = audit.totals.warning;
  const totalErr = audit.totals.critical;

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
            Automatischer Website-Audit
          </p>
          <p className="mt-1 font-display text-xl text-[color:var(--ink)]">
            Live gemessene Signale
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1 text-green-700">
            <DotIcon status="good" /> {totalOk}
          </span>
          <span className="inline-flex items-center gap-1 text-amber-700">
            <DotIcon status="warning" /> {totalWarn}
          </span>
          <span className="inline-flex items-center gap-1 text-red-700">
            <DotIcon status="critical" /> {totalErr}
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
              {g.title}
            </p>
            <dl className="mt-2 divide-y divide-stone-100 rounded-lg border border-stone-200">
              {g.findings.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 px-3 py-2"
                >
                  <dt className="flex min-w-0 items-center gap-2 text-sm text-stone-700">
                    <DotIcon status={f.status} />
                    <span className="truncate">{f.label}</span>
                  </dt>
                  <dd className="shrink-0 text-right text-sm text-[color:var(--ink)]">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-stone-500">
        Live abgerufen von {new URL(audit.finalUrl).hostname}. Zuletzt geprüft:{" "}
        {new Date(audit.fetchedAt).toLocaleString("de-DE")}. Der Audit wird alle
        sieben Tage automatisch aktualisiert.
      </p>
    </div>
  );
}
