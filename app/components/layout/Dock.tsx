"use client";

import { ACCENT } from "../../lib/constants";

const DOCK_ITEMS = [
  { id: "home", icon: "⌂", label: "Home" },
  { id: "terminal", icon: ">_", label: "Terminal" },
  { id: "projects", icon: "◈", label: "Projects" },
  { id: "contact", icon: "✉", label: "Contact" },
];

interface DockProps {
  active: string;
  setActive: (id: string) => void;
}

export default function Dock({ active, setActive }: DockProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center gap-5 shadow-2xl">
        {DOCK_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative group flex flex-col items-center gap-1"
            title={item.label}
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center font-mono text-sm transition-all duration-300"
              style={
                active === item.id
                  ? {
                      background: ACCENT,
                      color: "#000",
                      boxShadow: `0 0 20px ${ACCENT}55`,
                    }
                  : { background: "rgba(255,255,255,0.05)", color: "#888" }
              }
            >
              {item.icon}
            </div>
            {active === item.id && (
              <div
                className="w-1 h-1 rounded-full absolute -bottom-1"
                style={{ background: ACCENT }}
              />
            )}
            <span className="absolute -top-8 text-[10px] font-mono bg-black/80 px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
