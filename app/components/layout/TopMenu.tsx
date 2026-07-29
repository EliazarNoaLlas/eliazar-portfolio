"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ACCENT } from "../../lib/constants";

const NAV_ITEMS = [
  { id: "home", href: "#home", label: "Inicio" },
  { id: "about", href: "#about", label: "Acerca de mi" },
  { id: "projects", href: "#projects", label: "Proyectos" },
  { id: "cv", href: "#cv", label: "CV" },
  { id: "contact", href: "#contact", label: "Contacto" },
];

interface TopMenuProps {
  active: string;
  setActive: (id: string) => void;
}

export default function TopMenu({ active, setActive }: TopMenuProps) {
  const [open, setOpen] = useState(false);

  const select = (id: string) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed left-1/2 top-14 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-3 shadow-2xl backdrop-blur-xl">
          {NAV_ITEMS.map((item) => {
            const selected = active === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => select(item.id)}
                className="relative group flex flex-col items-center gap-1"
                title={item.label}
              >
                <div
                  className="min-w-28 rounded-2xl px-5 py-3 text-center font-mono text-sm font-black uppercase transition-all duration-300"
                  style={
                    selected
                      ? {
                          background: ACCENT,
                          color: "#000",
                          boxShadow: `0 0 20px ${ACCENT}55`,
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          color: "#888",
                        }
                  }
                >
                  {item.label}
                </div>
                {selected && (
                  <div
                    className="absolute -bottom-1 h-1 w-1 rounded-full"
                    style={{ background: ACCENT }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed right-5 top-14 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-[#ccff00] shadow-2xl backdrop-blur-xl md:hidden"
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-center bg-black/95 px-6 backdrop-blur-xl md:hidden">
          <div className="mb-10 font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#ccff00]">
            Navegacion
          </div>

          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => {
              const selected = active === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => select(item.id)}
                  className="flex min-h-24 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 font-mono text-3xl font-black uppercase text-white transition-colors"
                  style={
                    selected
                      ? {
                          borderColor: ACCENT,
                          color: ACCENT,
                          boxShadow: `0 0 24px ${ACCENT}25`,
                        }
                      : undefined
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-sm text-[#ccff00]">
                    0{index + 1}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
