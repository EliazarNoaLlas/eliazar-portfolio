"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { featuredProjects, otherProjects, projects } from "../../data/projects";
import { ACCENT } from "../../lib/constants";
import type { Project } from "../../types";

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const selectedIndex = selectedProject
    ? projects.findIndex((project) => project.id === selectedProject.id)
    : -1;

  const selectByOffset = (offset: number) => {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + offset + projects.length) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-20 text-[#f0f0f0]"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="container mx-auto flex flex-col gap-12 px-8 md:flex-row">
        <div className="py-4 md:sticky md:top-28 md:w-1/3 md:self-start">
          <div
            className="mb-2 flex items-center gap-2 font-mono text-xs"
            style={{ color: `${ACCENT}80` }}
          >
            <span className="h-2 w-2 rounded-full bg-[#ccff00]" />
            <span className="tracking-widest">PORTFOLIO // PROYECTOS</span>
          </div>
          <div
            className="text-5xl font-black uppercase tracking-tighter sm:text-6xl"
            style={{ color: "transparent", WebkitTextStroke: "1px #555" }}
          >
            Proyectos
          </div>
          <div
            className="text-5xl font-black uppercase tracking-tighter sm:text-6xl"
            style={{ color: ACCENT, textShadow: `0 0 15px ${ACCENT}50` }}
          >
            Destacados
          </div>
          <div className="mt-6 max-w-xs font-mono text-sm text-gray-400">
            <p className="mb-3">&gt; CARGANDO ARCHIVOS TECNICOS...</p>
            <p>
              Sistemas backend, SaaS, IoT, IA e investigacion aplicada construidos
              para resolver problemas reales.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Go", "Laravel", "IoT", "IA", "SaaS", "Docker", "RAG"].map((t) => (
              <span
                key={t}
                className="border border-[#333] px-2 py-1 font-mono text-[10px] text-gray-500"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-[#1a1a1a]">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: visible ? "100%" : "0%",
                background: ACCENT,
              }}
            />
          </div>
          <div className="mt-1 text-right font-mono text-[10px] text-gray-500">
            {featuredProjects.length} DESTACADOS / {otherProjects.length} ADICIONALES
          </div>
        </div>

        <div className="flex flex-col gap-20 md:w-2/3">
          <div className="flex flex-col gap-20">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={i * 100}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          <div className="border-t border-[#333] pt-12">
            <div className="mb-10">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
                {"// Otros proyectos"}
              </div>
              <h3 className="mt-3 text-3xl font-black uppercase text-white">
                Experiencia adicional
              </h3>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {otherProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={i * 100}
                  compact
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPrev={() => selectByOffset(-1)}
          onNext={() => selectByOffset(1)}
        />
      )}
    </section>
  );
}
