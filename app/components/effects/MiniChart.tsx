"use client";

import { ACCENT } from "../../lib/constants";

interface MiniChartProps {
  data: number[];
  color?: string;
  id?: string;
}

export default function MiniChart({ data, color = ACCENT, id = "default" }: MiniChartProps) {
  const max = Math.max(...data, 1);
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${50 - (v / max) * 45}`)
    .join(" ");

  return (
    <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <pattern id={`grid-${id}`} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100" height="50" fill={`url(#grid-${id})`} />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        points={`${pts} 100,50 0,50`}
        fill={color}
        fillOpacity="0.12"
      />
    </svg>
  );
}
