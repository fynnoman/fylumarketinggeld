"use client";

import { motion } from "framer-motion";
import { getCompanyScore, type Company } from "@/lib/digital-index";

type Props = {
  companies: Company[];
  highlightSlug?: string | null;
  onSelect?: (slug: string) => void;
};

// Deterministische y-Streuung damit sich die Punkte bei ähnlichen Scores
// nicht überlagern.
function jitter(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) & 0xffff;
  return (h % 100) / 100; // 0..1
}

const W = 800;
const H = 120;
const PAD_X = 40;
const AXIS_Y = 92;

export default function ScoreSpectrum({ companies, highlightSlug, onSelect }: Props) {
  const trackW = W - PAD_X * 2;

  const scored = companies.map((c) => ({
    company: c,
    score: getCompanyScore(c),
    jitter: jitter(c.slug),
  }));

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Score-Spektrum aller Unternehmen"
      >
        <defs>
          <linearGradient id="axisGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="50%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        {/* Achse */}
        <line
          x1={PAD_X}
          x2={W - PAD_X}
          y1={AXIS_Y}
          y2={AXIS_Y}
          stroke="url(#axisGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Ticks */}
        {[0, 20, 40, 60, 80, 100].map((t) => {
          const x = PAD_X + (t / 100) * trackW;
          return (
            <g key={t}>
              <line
                x1={x}
                x2={x}
                y1={AXIS_Y - 4}
                y2={AXIS_Y + 4}
                stroke="rgba(12,14,16,0.35)"
                strokeWidth="1"
              />
              <text
                x={x}
                y={AXIS_Y + 20}
                fontSize="10"
                textAnchor="middle"
                fill="rgba(12,14,16,0.55)"
                style={{ letterSpacing: "0.08em" }}
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* Punkte */}
        {scored.map(({ company, score, jitter }, i) => {
          const x = PAD_X + (score / 100) * trackW;
          const y = 30 + jitter * 40; // gestreute Position oberhalb der Achse
          const isHigh = highlightSlug === company.slug;
          const color =
            score >= 80 ? "#15803d" : score >= 60 ? "#b45309" : "#b91c1c";
          return (
            <g key={company.slug}>
              <line
                x1={x}
                x2={x}
                y1={y + 8}
                y2={AXIS_Y}
                stroke={color}
                strokeOpacity="0.28"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <motion.circle
                cx={x}
                cy={y}
                r={isHigh ? 8 : 6}
                fill={color}
                stroke={isHigh ? "#0c0e10" : "rgba(12,14,16,0.15)"}
                strokeWidth={isHigh ? 2 : 1}
                style={{ cursor: onSelect ? "pointer" : "default" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.1 + i * 0.04,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.4 }}
                onClick={() => onSelect?.(company.slug)}
              >
                <title>{`${company.name}, Score ${score}`}</title>
              </motion.circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
