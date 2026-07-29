"use client";

import { useRef, useEffect, useCallback } from "react";
import { useWindow } from "../../store/windowStore";
import { ACCENT } from "../../lib/constants";

interface WindowShellProps {
  windowId: string;
  children: React.ReactNode;
  className?: string;
  variant?: "floating" | "docked";
}

export default function WindowShell({
  windowId,
  children,
  className = "",
  variant = "floating",
}: WindowShellProps) {
  const { win, bringToFront, updatePosition, toggleMinimize, toggleMaximize } =
    useWindow(windowId);

  const dragging = useRef(false);
  const origin = useRef({ x: 0, y: 0 });

  const onTitleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest(".no-drag")) return;
      dragging.current = true;
      origin.current = { x: e.clientX - win.x, y: e.clientY - win.y };
      e.preventDefault();
    },
    [win.x, win.y]
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX - origin.current.x, e.clientY - origin.current.y);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [updatePosition]);

  if (win.minimized) return null;

  const docked = variant === "docked";
  const style: React.CSSProperties = docked
    ? {
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: "auto",
      }
    : win.maximized
    ? {
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: win.z,
        borderRadius: 0,
      }
    : {
        position: "absolute",
        left: win.x,
        top: win.y,
        width: win.width,
        height: win.height,
        zIndex: win.z,
      };

  return (
    <div
      className={`bg-[#0a0a0a]/95 border border-[#333] shadow-2xl overflow-hidden flex flex-col backdrop-blur-sm ${
        win.maximized && !docked ? "" : "rounded-lg"
      } ${className}`}
      style={style}
      onMouseDown={() => bringToFront()}
    >
      <div
        className={`flex items-center justify-between px-3 py-2 bg-[#141414] border-b border-[#2a2a2a] select-none ${
          win.maximized || docked
            ? "cursor-default"
            : "cursor-grab active:cursor-grabbing"
        }`}
        onMouseDown={win.maximized || docked ? undefined : onTitleMouseDown}
        onDoubleClick={docked ? undefined : toggleMaximize}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 no-drag">
            <button
              className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:brightness-125 transition-all group relative disabled:cursor-default"
              disabled={docked}
              onClick={(e) => {
                e.stopPropagation();
                if (!docked) toggleMinimize();
              }}
              title="Minimizar"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#7c1f1b] opacity-0 group-hover:opacity-100 font-bold leading-none">
                -
              </span>
            </button>

            <button
              className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:brightness-125 transition-all group relative disabled:cursor-default"
              disabled={docked}
              onClick={(e) => {
                e.stopPropagation();
                if (!docked) toggleMaximize();
              }}
              title={win.maximized ? "Restaurar" : "Maximizar"}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#7c5300] opacity-0 group-hover:opacity-100 font-bold leading-none">
                {win.maximized ? "[]" : "+"}
              </span>
            </button>

            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>

          <span className="font-mono text-xs text-gray-400 ml-2">{win.title}</span>
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
