"use client";

import { motion } from "framer-motion";
import { SCORE_CRITERIA, type SubScores } from "@/lib/digital-index";

type Props = {
  subScores: SubScores;
  size?: number;
};

export default function RadarChart({ subScores, size = 320 }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 44;
  const n = SCORE_CRITERIA.length;

  // Punkte auf dem Kreis für jedes Kriterium
  const points = SCORE_CRITERIA.map((c, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const raw = subScores[c.key];
    const v = typeof raw === "number" ? Math.max(0, Math.min(100, raw)) : 0;
    const r = (v / 100) * radius;
    return {
      key: c.key,
      label: c.short,
      angle,
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      labelX: cx + Math.cos(angle) * (radius + 22),
      labelY: cy + Math.sin(angle) * (radius + 22),
      gridX: cx + Math.cos(angle) * radius,
      gridY: cy + Math.sin(angle) * radius,
      value: v,
    };
  });

  const polygon = points.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-auto"
      role="img"
      aria-label="Radar-Diagramm der zwölf Score-Kriterien"
    >
      {/* Grid-Ringe */}
      {rings.map((r) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={radius * r}
          fill="none"
          stroke="rgba(12,14,16,0.10)"
          strokeWidth="1"
        />
      ))}

      {/* Achsen */}
      {points.map((p) => (
        <line
          key={`ax-${p.key}`}
          x1={cx}
          y1={cy}
          x2={p.gridX}
          y2={p.gridY}
          stroke="rgba(12,14,16,0.10)"
          strokeWidth="1"
        />
      ))}

      {/* gefüllte Fläche */}
      <motion.polygon
        points={polygon}
        fill="url(#radarFill)"
        stroke="rgb(14,116,144)"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Punkte */}
      {points.map((p, i) => (
        <motion.circle
          key={`pt-${p.key}`}
          cx={p.x}
          cy={p.y}
          r={3.5}
          fill="rgb(14,116,144)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.03, duration: 0.3 }}
        />
      ))}

      {/* Labels */}
      {points.map((p) => (
        <text
          key={`lb-${p.key}`}
          x={p.labelX}
          y={p.labelY}
          fontSize="10"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(42,45,49,0.72)"
          className="uppercase"
          style={{ letterSpacing: "0.08em" }}
        >
          {p.label}
        </text>
      ))}

      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.28)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.05)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
