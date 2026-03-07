"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../../data/projects";
import { ACCENT } from "../../lib/constants";

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-[#050505] text-[#f0f0f0] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-8 flex flex-col md:flex-row gap-12">
        {/* Sticky sidebar */}
        <div className="md:w-1/3 md:sticky md:top-20 md:self-start py-4">
          <div
            className="flex items-center gap-2 text-xs font-mono mb-2"
            style={{ color: `${ACCENT}80` }}
          >
            <span>🔒</span>
            <span className="tracking-widest">TOP SECRET // LEVEL 5</span>
          </div>
          <div
            className="text-6xl font-black tracking-tighter"
            style={{ color: "transparent", WebkitTextStroke: `1px #555` }}
          >
            MISSION
          </div>
          <div
            className="text-6xl font-black tracking-tighter"
            style={{ color: ACCENT, textShadow: `0 0 15px ${ACCENT}50` }}
          >
            ARCHIVES
          </div>
          <div className="mt-6 font-mono text-sm text-gray-400 max-w-xs">
            <p className="mb-3">&gt; ACCESSING ENCRYPTED DATABASE...</p>
            <p>
              Registros operacionales clasificados. Cada archivo representa un sistema
              tecnológico construido y desplegado en producción.
            </p>
          </div>

          {/* Stack chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Go", "Microservices", "IoT", "REST APIs", "Docker", "SQL"].map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 border border-[#333] text-gray-500"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="mt-8 h-1 w-full rounded-full overflow-hidden"
            style={{ background: "#1a1a1a" }}
          >
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: visible ? "100%" : "0%",
                background: ACCENT,
              }}
            />
          </div>
          <div className="mt-1 text-[10px] font-mono text-gray-500 text-right">
            DATABASE DECRYPTION STATUS
          </div>
        </div>

        {/* Projects list */}
        <div className="md:w-2/3 flex flex-col gap-20">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
