"use client";

import { Boxes, BrainCircuit, Building2, Server } from "lucide-react";
import { profile } from "../../data/profile";

const ICONS = [Server, Boxes, Building2, BrainCircuit];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {profile.stats.map((s, index) => {
        const Icon = ICONS[index] ?? Server;

        return (
          <div
            key={s.label}
            className="group grid min-h-28 grid-rows-[auto_1fr] rounded-lg border border-white/15 bg-black/60 p-4 font-mono backdrop-blur-sm transition-all duration-300 hover:border-[#ccff00]/70 hover:bg-[#ccff00]/5"
          >
            <div className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3">
              <Icon className="h-6 w-6 text-[#ccff00]" strokeWidth={1.8} />
              <div className="text-3xl font-black leading-none text-white transition-colors group-hover:text-[#ccff00]">
                {s.value}
              </div>
            </div>
            <div className="mt-4 self-end text-[11px] uppercase leading-tight text-gray-400">
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
