import { SCORE_CRITERIA, type SubScores } from "@/lib/digital-index";

type Props = {
  subScores: SubScores;
};

function toneClass(v: number): string {
  if (v >= 80) return "bg-green-600";
  if (v >= 60) return "bg-amber-600";
  return "bg-red-600";
}

export default function ScoreBreakdown({ subScores }: Props) {
  return (
    <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
      {SCORE_CRITERIA.map((c) => {
        const raw = subScores[c.key];
        const v = typeof raw === "number" ? Math.max(0, Math.min(100, raw)) : 0;
        return (
          <li key={c.key} className="px-4 py-3 sm:px-6">
            <div className="flex items-baseline justify-between gap-4">
              <div className="min-w-0">
                <p className="font-[var(--font-fraunces)] text-base text-neutral-900">
                  {c.label}
                </p>
                <p className="mt-1 text-sm text-neutral-600">{c.description}</p>
              </div>
              <div className="flex shrink-0 items-baseline gap-2 tabular-nums">
                <span className="font-[var(--font-fraunces)] text-lg text-neutral-900">
                  {v}
                </span>
                <span className="text-xs text-neutral-500">/100</span>
              </div>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className={`h-full ${toneClass(v)}`}
                style={{ width: `${v}%` }}
                aria-hidden="true"
              />
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-neutral-500">
              Gewicht {c.weight} %
            </div>
          </li>
        );
      })}
    </ul>
  );
}
