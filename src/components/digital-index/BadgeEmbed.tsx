"use client";

import { useState } from "react";

type Props = {
  companySlug: string;
  categorySlug: string;
  companyName: string;
  categoryLabel: string;
  score: number;
};

const SITE = "https://www.fylumarketing.de";

export default function BadgeEmbed({
  companySlug,
  categorySlug,
  companyName,
  categoryLabel,
  score,
}: Props) {
  const badgeUrl = `${SITE}/api/badge/${companySlug}.svg`;
  const linkUrl = `${SITE}/digital-index/${categorySlug}/${companySlug}`;
  const snippet = `<a href="${linkUrl}" target="_blank" rel="noopener">
  <img src="${badgeUrl}" alt="Fylu Digital Index Score ${score} von 100 für ${companyName}" width="220" height="90" />
</a>`;

  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // stiller Fallback, Snippet ist ohnehin sichtbar
    }
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <p className="font-[var(--font-fraunces)] text-lg text-neutral-900">
        Badge für die eigene Website
      </p>
      <p className="mt-1 text-sm text-neutral-600">
        {companyName} darf dieses Badge auf der eigenen Website einbinden. Es
        verlinkt zurück auf das Profil im Fylu Digital Index.
      </p>

      <div className="mt-4 flex items-center gap-4 rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={badgeUrl}
          alt={`Fylu Digital Index Badge, Score ${score} für ${companyName}`}
          width={220}
          height={90}
        />
        <div className="text-xs text-neutral-500">
          Kategorie: {categoryLabel}
        </div>
      </div>

      <pre className="mt-4 max-h-56 overflow-auto rounded-md bg-neutral-950 p-4 text-xs text-neutral-100">
        <code>{snippet}</code>
      </pre>

      <button
        type="button"
        onClick={copy}
        className="mt-3 inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        {copied ? "Kopiert" : "Snippet kopieren"}
      </button>
    </div>
  );
}
