import Link from "next/link";
import { getCompanyScore, scoreBand, type Company } from "@/lib/digital-index";
import ScoreGauge from "./ScoreGauge";

type Props = {
  rank: number;
  company: Company;
};

export default function CompanyRow({ rank, company }: Props) {
  const score = getCompanyScore(company);
  const { label } = scoreBand(score);
  const href = `/digital-index/${company.categorySlug}/${company.slug}`;

  return (
    <li className="group">
      <Link
        href={href}
        className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-neutral-50 sm:gap-6 sm:px-6"
      >
        <span className="w-8 shrink-0 text-right font-[var(--font-fraunces)] text-lg text-neutral-500 tabular-nums">
          {rank}
        </span>
        <div className="shrink-0">
          <ScoreGauge score={score} size="sm" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-[var(--font-fraunces)] text-lg text-neutral-900">
            {company.name}
          </p>
          <p className="mt-0.5 text-sm text-neutral-600">
            {company.city} · {label}
          </p>
        </div>
        <span
          className="hidden shrink-0 text-sm text-neutral-500 group-hover:text-neutral-900 sm:inline"
          aria-hidden="true"
        >
          Profil ansehen
        </span>
      </Link>
    </li>
  );
}
