"use client";

import { useState, useEffect, useRef } from "react";
import WindowShell from "./WindowShell";
import { ACCENT, TERMINAL_BOOT_LINES, TERMINAL_COMMANDS } from "../../lib/constants";
import type { TerminalLine, Position } from "../../types";

interface TerminalWindowProps {
  initialPos: Position;
}

export default function TerminalWindow({ initialPos }: TerminalWindowProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const boot = () => {
      if (i < TERMINAL_BOOT_LINES.length) {
        setLines((l) => [
          ...l,
          { type: "system", text: TERMINAL_BOOT_LINES[i] },
        ]);
        i++;
        setTimeout(boot, 300);
      } else {
        setBooted(true);
      }
    };
    setTimeout(boot, 400);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    setInput("");
    setLines((l) => [...l, { type: "input", text: `➜ ~ ${cmd}` }]);
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const fn = TERMINAL_COMMANDS[cmd];
    if (fn) {
      const out = fn();
      if (out) {
        setLines((l) => [...l, ...out.map((t) => ({ type: "output" as const, text: t }))]);
      }
    } else {
      setLines((l) => [
        ...l,
        { type: "error", text: `command not found: ${cmd}. Type 'help'` },
      ]);
    }
  };

  return (
    <WindowShell title="terminal — zsh" initialPos={initialPos} style={{ width: 560, height: 380 }}>
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-0.5 no-drag"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}
      >
        {lines.map((l, i) => (
          <div
            key={i}
            className={`leading-relaxed whitespace-pre-wrap break-all ${
              l.type === "input"
                ? "text-[#ccff00]"
                : l.type === "error"
                ? "text-red-400"
                : l.type === "system"
                ? "text-gray-500"
                : "text-gray-300"
            }`}
          >
            {l.text}
          </div>
        ))}
        {booted && (
          <div className="flex items-center gap-2">
            <span style={{ color: ACCENT }}>➜</span>
            <span className="text-blue-400">~</span>
            <input
              className="flex-1 bg-transparent outline-none text-[#f0f0f0] font-mono text-sm no-drag"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoFocus
              spellCheck={false}
            />
          </div>
        )}
        <div ref={endRef} />
      </div>
    </WindowShell>
  );
}
