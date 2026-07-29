"use client";

import { useState, useEffect, useRef } from "react";
import WindowShell from "./WindowShell";
import { ACCENT, TERMINAL_BOOT_LINES, TERMINAL_COMMANDS } from "../../lib/constants";
import type { TerminalLine } from "../../types";

interface TerminalWindowProps {
  windowId?: string;
  variant?: "floating" | "docked";
}

export default function TerminalWindow({
  windowId = "terminal",
  variant = "floating",
}: TerminalWindowProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const boot = () => {
      if (i < TERMINAL_BOOT_LINES.length) {
        setLines((l) => [...l, { type: "system", text: TERMINAL_BOOT_LINES[i] }]);
        i++;
        setTimeout(boot, 260);
      } else {
        setBooted(true);
      }
    };
    setTimeout(boot, 350);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    setInput("");
    setLines((l) => [...l, { type: "input", text: `$ ${cmd}` }]);
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const fn = TERMINAL_COMMANDS[cmd];
    if (fn) {
      const out = fn();
      if (out) {
        setLines((l) => [
          ...l,
          ...out.map((t) => ({ type: "output" as const, text: t })),
        ]);
      }
    } else {
      setLines((l) => [
        ...l,
        { type: "error", text: `comando no encontrado: ${cmd}. Escribe 'help'` },
      ]);
    }
  };

  return (
    <WindowShell windowId={windowId} variant={variant}>
      <div
        className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-sm space-y-1 no-drag"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}
      >
        <div className="mb-3 text-[#ccff00]">$ arch-os init portfolio</div>
        {lines.map((l, i) => (
          <div
            key={i}
            className={`leading-relaxed whitespace-pre-wrap break-words ${
              l.type === "input"
                ? "text-[#ccff00]"
                : l.type === "error"
                ? "text-red-400"
                : l.type === "system"
                ? "text-gray-400"
                : "text-gray-300"
            }`}
          >
            {l.text}
          </div>
        ))}
        {booted && (
          <>
            <div className="mt-4 text-[#ccff00]">Sistema listo.</div>
            <div className="text-gray-300">Bienvenido a mi espacio digital.</div>
            <div className="text-gray-300">
              Explorando ideas. Construyendo soluciones. Creando impacto.
            </div>
            <div className="my-3 h-px border-t border-dashed border-white/20" />
            <div className="text-gray-300">
              <span className="text-[#60a5fa]">const</span>{" "}
              <span className="text-[#ccff00]">eliazar</span> = {"{"}
            </div>
            <div className="pl-4 text-gray-300">
              rol: <span className="text-[#ccff00]">&quot;Backend Developer&quot;</span>,
            </div>
            <div className="pl-4 text-gray-300">
              enfoque: <span className="text-[#ccff00]">[&quot;Go&quot;, &quot;Microservicios&quot;, &quot;IoT&quot;]</span>,
            </div>
            <div className="pl-4 text-gray-300">
              stack: <span className="text-[#ccff00]">[&quot;Go&quot;, &quot;Laravel&quot;, &quot;Node.js&quot;, &quot;Docker&quot;]</span>,
            </div>
            <div className="text-gray-300">{"};"}</div>
            <div className="mt-4 flex items-center gap-2">
              <span style={{ color: ACCENT }}>$</span>
              <input
                className="flex-1 bg-transparent outline-none text-[#f0f0f0] font-mono text-sm no-drag"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                autoFocus
                spellCheck={false}
                aria-label="Terminal interactiva"
              />
            </div>
          </>
        )}
        <div ref={endRef} />
      </div>
    </WindowShell>
  );
}
