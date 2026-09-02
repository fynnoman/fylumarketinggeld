import { scoreBand } from "@/lib/digital-index";

type Props = {
  score: number;
  size?: "sm" | "md" | "lg";
};

const SIZE_MAP = {
  sm: { box: 64, stroke: 6, font: "text-lg" },
  md: { box: 120, stroke: 10, font: "text-3xl" },
  lg: { box: 180, stroke: 12, font: "text-5xl" },
} as const;

const TONE_MAP = {
  high: "#16a34a",
  mid: "#d97706",
  low: "#dc2626",
} as const;

export default function ScoreGauge({ score, size = "md" }: Props) {
  const { box, stroke, font } = SIZE_MAP[size];
  const { tone, label } = scoreBand(score);
  const color = TONE_MAP[tone];

  const radius = (box - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const dash = (clamped / 100) * circumference;

  return (
    <div
      className="relative inline-flex flex-col items-center justify-center"
      style={{ width: box, height: box }}
      role="img"
      aria-label={`Digital Score ${clamped} von 100, Kategorie ${label}`}
    >
      <svg width={box} height={box} className="-rotate-90">
        <circle
          cx={box / 2}
          cy={box / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={box / 2}
          cy={box / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-[var(--font-fraunces)] font-medium ${font}`}>
          {clamped}
        </span>
        {size !== "sm" ? (
          <span className="mt-1 text-[10px] tracking-[0.14em] uppercase text-neutral-500">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
