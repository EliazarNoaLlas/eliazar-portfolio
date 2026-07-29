"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { Project } from "../../types";
import { ACCENT } from "../../lib/constants";

const CORNER_KEYS = ["tl", "tr", "bl", "br"] as const;
const CORNER_CLASSES: Record<string, string> = {
  tl: "top-2 left-2 border-l-2 border-t-2",
  tr: "top-2 right-2 border-r-2 border-t-2",
  bl: "bottom-2 left-2 border-l-2 border-b-2",
  br: "bottom-2 right-2 border-r-2 border-b-2",
};

interface ProjectCardProps {
  project: Project;
  delay?: number;
  compact?: boolean;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  delay = 0,
  compact = false,
  onSelect,
}: ProjectCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.(project);
        }
      }}
      className={`group relative cursor-pointer border-l-2 border-[#333] pl-8 transition-colors duration-500 hover:border-[#ccff00] ${
        compact ? "pb-2" : ""
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s`,
      }}
    >
      <div
        className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-[#333] transition-colors group-hover:border-[#ccff00]"
        style={{ background: "#050505" }}
      />

      <div className={`flex flex-col gap-8 ${compact ? "" : "lg:flex-row"}`}>
        {!compact && (
          <div className="relative aspect-video overflow-hidden rounded border border-[#333] bg-[#111] transition-colors group-hover:border-[#ccff00]/50 lg:w-5/12">
            {project.image && (
              <Image
                src={project.image}
                alt={`Imagen del proyecto ${project.shortTitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div
              className="absolute inset-0 opacity-20 mix-blend-screen"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
            {CORNER_KEYS.map((k) => (
              <div
                key={k}
                className={`absolute h-4 w-4 ${CORNER_CLASSES[k]}`}
                style={{ borderColor: `${ACCENT}80` }}
              />
            ))}
            <div className="absolute right-2 top-2 border border-[#333] bg-black/80 px-2 py-1 font-mono text-[10px] text-gray-400">
              PROYECTO_#{project.id}
            </div>
            <div className="absolute bottom-3 left-3 rounded border border-[#ccff00]/40 bg-black/80 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ccff00] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Ver caso de estudio
            </div>
            {!project.image && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-mono text-4xl font-black opacity-10"
                  style={{ color: ACCENT }}
                >
                  {project.id}
                </span>
              </div>
            )}
          </div>
        )}

        <div className={`flex flex-col justify-center ${compact ? "" : "lg:w-7/12"}`}>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="border px-2 py-1 font-mono text-xs tracking-widest"
              style={{
                color: ACCENT,
                borderColor: `${ACCENT}30`,
                background: `${ACCENT}10`,
              }}
            >
              {project.category.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-gray-600">
              {"// "}
              {project.industry.toUpperCase()}
            </span>
          </div>

          <h3 className="mb-4 text-2xl font-black uppercase transition-colors group-hover:text-[#ccff00]">
            <span className="text-white">{project.shortTitle}</span>
          </h3>

          <p className="mb-6 font-mono text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-white">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-3">
            {project.impact.slice(0, compact ? 2 : 3).map((imp) => (
              <div
                key={imp.label}
                className="rounded border border-green-400/20 px-2 py-1 font-mono text-xs text-green-400"
              >
                OK {imp.value} - {imp.label}
              </div>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.stack.slice(0, compact ? 8 : 12).map((t) => (
              <span
                key={t}
                className="border border-[#333] bg-[#111] px-2 py-1 font-mono text-xs"
                style={{ color: `${ACCENT}cc` }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-[#333] pt-4">
            <div className="font-mono text-xs text-gray-500">
              {project.year}
            </div>
            <div className="flex items-center gap-2 border border-white/20 px-3 py-1 font-mono text-xs text-white/50">
              STATUS: <span style={{ color: ACCENT }}>{project.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
