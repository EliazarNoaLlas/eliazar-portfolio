"use client";

import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

export default function HeroName() {
  return (
    <div className="absolute left-8 top-[12%] z-10 pointer-events-none select-none">
      <div className="relative">
        {/* First name */}
        <div
          className="block text-[7vw] font-black tracking-tighter leading-[0.85]"
          style={{ color: "#e0e0e0", mixBlendMode: "overlay", opacity: 0.85 }}
        >
          {profile.name.first}
        </div>
        {/* Second name */}
        <div
          className="block text-[7vw] font-black tracking-tighter leading-[0.85] ml-16"
          style={{
            color: "transparent",
            WebkitTextStroke: `2px ${ACCENT}`,
            opacity: 0.5,
          }}
        >
          {profile.name.second}
        </div>
        {/* Last name */}
        <div
          className="block text-[7vw] font-black tracking-tighter leading-[0.85]"
          style={{
            color: ACCENT,
            textShadow: `0 0 20px ${ACCENT}80`,
          }}
        >
          {profile.name.last}
        </div>

        {/* Identity card */}
        <div
          className="mt-6 ml-1 p-4 border-l-2 max-w-sm"
          style={{
            borderColor: ACCENT,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="font-mono text-sm font-bold mb-2" style={{ color: ACCENT }}>
            {profile.title}
          </div>
          <p className="font-mono text-xs text-gray-300 leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Corner accents */}
        <div
          className="absolute -right-6 top-0 w-16 h-16 border-t-4 border-r-4 opacity-40"
          style={{ borderColor: ACCENT }}
        />
        <div
          className="absolute -left-2 bottom-0 w-32 h-1 opacity-20"
          style={{ background: ACCENT }}
        />
      </div>
    </div>
  );
}
