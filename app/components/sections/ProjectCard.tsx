"use client";

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
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
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
      className="group relative pl-8 border-l-2 border-[#333] hover:border-[#ccff00] transition-colors duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s`,
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#333] group-hover:border-[#ccff00] transition-colors"
        style={{ background: "#050505" }}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image placeholder */}
        <div className="lg:w-5/12 aspect-video bg-[#111] border border-[#333] group-hover:border-[#ccff00]/50 transition-colors relative overflow-hidden rounded">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Corner brackets */}
          {CORNER_KEYS.map((k) => (
            <div
              key={k}
              className={`absolute w-4 h-4 ${CORNER_CLASSES[k]}`}
              style={{ borderColor: `${ACCENT}80` }}
            />
          ))}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 border border-[#333] text-[10px] font-mono text-gray-500">
            EVIDENCE_#{project.id}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-mono text-4xl font-black opacity-10"
              style={{ color: ACCENT }}
            >
              {project.id}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-7/12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="font-mono text-xs tracking-widest border px-2 py-1"
              style={{
                color: ACCENT,
                borderColor: `${ACCENT}30`,
                background: `${ACCENT}10`,
              }}
            >
              {project.category.toUpperCase()}
            </span>
            <span className="text-gray-600 font-mono text-xs">
              // {project.industry.toUpperCase()}
            </span>
          </div>

          <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-[#ccff00] transition-colors">
            <span className="text-white">{project.shortTitle}</span>
          </h3>

          <p className="font-mono text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
            {project.description}
          </p>

          {/* Impact metrics */}
          <div className="flex flex-wrap gap-3 mb-4">
            {project.impact.slice(0, 3).map((imp) => (
              <div
                key={imp.label}
                className="text-xs font-mono text-green-400 border border-green-400/20 px-2 py-1 rounded"
              >
                ✓ {imp.value} — {imp.label}
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-1 border border-[#333] bg-[#111]"
                style={{ color: `${ACCENT}cc` }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className="border-t border-[#333] pt-4 flex items-center justify-between">
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ccff00] transition-colors font-mono text-xs"
                >
                  ⎘ SOURCE_CODE
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ccff00] transition-colors font-mono text-xs"
                >
                  ↗ LIVE_LINK
                </a>
              )}
            </div>
            <div className="font-mono text-xs border border-white/20 px-3 py-1 text-white/50 flex items-center gap-2">
              STATUS:{" "}
              <span style={{ color: ACCENT }}>{project.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
