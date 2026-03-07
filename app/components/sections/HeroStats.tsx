"use client";

import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

export default function HeroStats() {
  return (
    <div className="absolute bottom-28 left-8 z-10 flex gap-4">
      {profile.stats.map((s) => (
        <div
          key={s.label}
          className="bg-black/60 border border-[#333] px-4 py-3 rounded-lg backdrop-blur-sm hover:border-[#ccff00]/50 transition-all duration-300 group"
        >
          <div className="font-mono text-2xl font-black text-white group-hover:text-[#ccff00] transition-colors">
            {s.value}
          </div>
          <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
