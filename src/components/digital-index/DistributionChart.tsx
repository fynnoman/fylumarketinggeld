"use client";

import { motion } from "framer-motion";
import { getCompanyScore, type Company } from "@/lib/digital-index";

type Props = {
  companies: Company[];
};

const BANDS = [
  { min: 0, max: 20, label: "0 – 19", color: "#b91c1c" },
  { min: 20, max: 40, label: "20 – 39", color: "#c2410c" },
  { min: 40, max: 60, label: "40 – 59", color: "#b45309" },
  { min: 60, max: 80, label: "60 – 79", color: "#4d7c0f" },
  { min: 80, max: 101, label: "80 – 100", color: "#15803d" },
];

export default function DistributionChart({ companies }: Props) {
  const counts = BANDS.map((b) => {
    const c = companies.filter((co) => {
      const s = getCompanyScore(co);
      return s >= b.min && s < b.max;
    }).length;
    return { ...b, count: c };
  });
  const max = Math.max(1, ...counts.map((c) => c.count));

  return (
    <div className="grid grid-cols-5 gap-3 sm:gap-4">
      {counts.map((b, i) => {
        const heightPct = (b.count / max) * 100;
        return (
          <div key={b.label} className="flex flex-col items-center">
            <div className="relative flex h-40 w-full items-end overflow-hidden rounded-md bg-stone-100">
              <motion.div
                className="w-full rounded-md"
                style={{ background: b.color }}
                initial={{ height: 0 }}
                animate={{ height: `${Math.max(heightPct, b.count > 0 ? 8 : 0)}%` }}
                transition={{
                  delay: 0.15 + i * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 top-2 text-center font-display text-lg text-[color:var(--ink)] tabular-nums">
                {b.count}
              </div>
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.12em] text-stone-500">
              {b.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
