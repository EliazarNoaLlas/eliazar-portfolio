"use client";

import { ACCENT } from "../../lib/constants";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Main grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Accent grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${ACCENT} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 3px) 0 0 / 100% 4px",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, #000 100%)",
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }}
      />
    </div>
  );
}
