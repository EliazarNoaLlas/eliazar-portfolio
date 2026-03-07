"use client";

import { useRef } from "react";
import { useDrag } from "../../hooks/useDrag";
import { ACCENT } from "../../lib/constants";
import type { Position } from "../../types";

interface WindowShellProps {
  title: string;
  children: React.ReactNode;
  initialPos: Position;
  className?: string;
  style?: React.CSSProperties;
}

export default function WindowShell({
  title,
  children,
  initialPos,
  className = "",
  style = {},
}: WindowShellProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { pos, onMouseDown } = useDrag(ref, initialPos);

  return (
    <div
      ref={ref}
      className={`absolute bg-[#0a0a0a]/95 border border-[#333] shadow-2xl rounded-lg overflow-hidden flex flex-col backdrop-blur-sm ${className}`}
      style={{ left: pos.x, top: pos.y, ...style }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-3 py-2 bg-[#141414] border-b border-[#2a2a2a] select-none cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>
          <span className="font-mono text-xs text-gray-400 ml-2">{title}</span>
        </div>
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: ACCENT }}
        />
      </div>
      {children}
    </div>
  );
}
