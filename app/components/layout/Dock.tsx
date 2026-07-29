"use client";

import { ACCENT } from "../../lib/constants";
import { useWindowStore } from "../../store/windowStore";

const NAV_ITEMS = [
  { id: "home", icon: "H", label: "Inicio" },
  { id: "terminal", icon: ">_", label: "Terminal" },
  { id: "about", icon: "ID", label: "Acerca" },
  { id: "projects", icon: "PR", label: "Proyectos" },
  { id: "cv", icon: "CV", label: "CV" },
  { id: "contact", icon: "@", label: "Contacto" },
];

const WINDOW_ICONS: Record<string, string> = {
  terminal: ">_",
  task: "TS",
  monitor: "MN",
};

interface DockProps {
  active: string;
  setActive: (id: string) => void;
}

export default function Dock({ active, setActive }: DockProps) {
  const { windows, toggleMinimize } = useWindowStore();
  const minimized = windows.filter((w) => w.minimized);

  const navigate = (id: string) => {
    setActive(id);
    if (id !== "terminal") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-3 shadow-2xl backdrop-blur-xl sm:gap-5 sm:px-5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className="relative group flex flex-col items-center gap-1"
            title={item.label}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-2xl font-mono text-xs transition-all duration-300 sm:h-11 sm:w-11 sm:text-sm"
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
                className="absolute -bottom-1 h-1 w-1 rounded-full"
                style={{ background: ACCENT }}
              />
            )}
            <span className="absolute -top-8 whitespace-nowrap rounded border border-white/10 bg-black/80 px-2 py-1 font-mono text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </button>
        ))}

        {minimized.length > 0 && (
          <>
            <div className="h-8 w-px bg-white/10" />
            {minimized.map((win) => (
              <button
                key={win.id}
                onClick={() => toggleMinimize(win.id)}
                className="relative group flex flex-col items-center gap-1"
                title={`Restaurar: ${win.title}`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border font-mono text-xs transition-all duration-300 sm:h-11 sm:w-11 sm:text-sm"
                  style={{
                    background: "rgba(204,255,0,0.05)",
                    color: ACCENT,
                    borderColor: `${ACCENT}33`,
                  }}
                >
                  {WINDOW_ICONS[win.id] ?? "[]"}
                </div>
                <div
                  className="absolute -bottom-1 h-1 w-1 rounded-full"
                  style={{ background: ACCENT }}
                />
                <span className="absolute -top-8 whitespace-nowrap rounded border border-white/10 bg-black/80 px-2 py-1 font-mono text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                  {win.title}
                </span>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
