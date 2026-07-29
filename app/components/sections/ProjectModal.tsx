"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Monitor,
  X,
} from "lucide-react";
import type { Project } from "../../types";
import { ACCENT } from "../../lib/constants";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const fallbackFeatures = [
  "Panel administrativo",
  "Autenticacion y permisos",
  "Gestion de datos principales",
  "Reportes operativos",
  "APIs RESTful",
];

const fallbackContribution = [
  "Disene la arquitectura del sistema.",
  "Implemente endpoints y modulos principales.",
  "Modele la base de datos.",
  "Desarrolle validaciones y flujos de usuario.",
];

const fallbackChallenges = [
  "Mantener una arquitectura clara para que el sistema pueda evolucionar.",
  "Organizar reglas de negocio y permisos por modulo.",
];

const fallbackResults = [
  "Sistema funcional con modulos administrativos clave.",
  "Base preparada para escalabilidad y nuevas integraciones.",
];

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: ProjectModalProps) {
  const images = useMemo(
    () => (project.gallery?.length ? project.gallery : project.image ? [project.image] : []),
    [project.gallery, project.image]
  );
  const [activeImage, setActiveImage] = useState(0);
  const nextImage = useCallback(() => {
    if (images.length < 2) return;
    setActiveImage((index) => (index + 1) % images.length);
  }, [images.length]);
  const prevImage = useCallback(() => {
    if (images.length < 2) return;
    setActiveImage((index) => (index - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        if (images.length > 1) prevImage();
        else onPrev();
      }
      if (event.key === "ArrowRight") {
        if (images.length > 1) nextImage();
        else onNext();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, nextImage, onClose, onNext, onPrev, prevImage]);

  const features = project.features?.length ? project.features : fallbackFeatures;
  const contribution = project.contribution?.length
    ? project.contribution
    : fallbackContribution;
  const challenges = project.challenges?.length ? project.challenges : fallbackChallenges;
  const results = project.results?.length ? project.results : fallbackResults;

  return (
    <div
      className="fixed inset-0 z-[90] overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#ccff00]/60 bg-[#070707] shadow-[0_0_50px_rgba(204,255,0,0.16)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-[#ccff00]"
          >
            <ArrowLeft className="h-4 w-4" />
            Proyectos
          </button>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-lg border border-[#ccff00]/50 bg-[#ccff00]/10 px-3 py-2 font-mono text-xs font-bold uppercase text-[#ccff00] transition-colors hover:bg-[#ccff00] hover:text-black sm:inline-flex"
              >
                <Monitor className="h-4 w-4" />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-3 py-2 font-mono text-xs font-bold uppercase text-cyan-300 transition-colors hover:bg-cyan-300 hover:text-black sm:inline-flex"
              >
                <Code2 className="h-4 w-4" />
                Codigo
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-gray-400 transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <div className="sm:hidden">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded border border-[#ccff00]/40 bg-[#ccff00]/10 px-2 py-1 font-mono text-[10px] font-bold uppercase text-[#ccff00]">
                {project.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                {project.year}
              </span>
            </div>

            <h2 className="text-3xl font-black uppercase leading-none text-white">
              {project.shortTitle}
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              <div className="relative min-h-48 overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                {images[activeImage] ? (
                  <Image
                    src={images[activeImage]}
                    alt={`Imagen de ${project.shortTitle}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center font-mono text-4xl font-black text-[#ccff00]/20">
                    {project.id}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-[#ccff00] backdrop-blur"
                      aria-label="Imagen anterior"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-[#ccff00] backdrop-blur"
                      aria-label="Imagen siguiente"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                      {images.map((image, index) => (
                        <button
                          key={image}
                          onClick={() => setActiveImage(index)}
                          className="h-1.5 flex-1 rounded-full"
                          style={{
                            background:
                              activeImage === index
                                ? ACCENT
                                : "rgba(255,255,255,0.22)",
                          }}
                          aria-label={`Ver imagen ${index + 1}`}
                        />
                      ))}
                      <span className="ml-1 rounded bg-black/70 px-2 py-1 font-mono text-[10px] text-gray-300">
                        {activeImage + 1}/{images.length}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {(project.demoUrl || project.githubUrl) && (
                <div className="grid grid-cols-2 gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ccff00]/50 bg-[#ccff00]/10 px-3 py-3 font-mono text-xs font-bold uppercase text-[#ccff00]"
                    >
                      <Monitor className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-3 py-3 font-mono text-xs font-bold uppercase text-cyan-300"
                    >
                      <Code2 className="h-4 w-4" />
                      Codigo
                    </a>
                  )}
                </div>
              )}
            </div>

            <MobileBlock title="Resumen" text={shortText(project.longDescription, 230)} />
            <MobileBlock title="Problema" text={shortText(project.problem, 210)} />
            <MobileBlock title="Solucion" text={shortText(project.solution, 210)} />
          </div>

          <div className="hidden sm:block">
          <div className="mb-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded border border-[#ccff00]/40 bg-[#ccff00]/10 px-3 py-1 font-mono text-xs font-bold uppercase text-[#ccff00]">
                  {project.category}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                  {project.industry}
                </span>
              </div>
              <h2
                id="project-modal-title"
                className="text-4xl font-black uppercase leading-none text-white sm:text-6xl"
              >
                {project.shortTitle}
              </h2>
              <p className="mt-4 font-mono text-base leading-7 text-gray-300">
                {project.title}
              </p>

              <div className="mt-8 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-3">
                <Meta label="Rol" value={project.role ?? "Full Stack Developer"} />
                <Meta label="Estado" value={project.status} />
                <Meta label="Anio" value={String(project.year)} />
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-white/10 bg-[#111]">
              {images[activeImage] ? (
                <Image
                  src={images[activeImage]}
                  alt={`Imagen de ${project.shortTitle}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-5xl font-black text-[#ccff00]/20">
                  {project.id}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-[#ccff00] backdrop-blur transition-colors hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black"
                    aria-label="Imagen anterior"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-[#ccff00] backdrop-blur transition-colors hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black"
                    aria-label="Imagen siguiente"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    {images.map((image, index) => (
                      <button
                        key={image}
                        onClick={() => setActiveImage(index)}
                        className="h-1.5 flex-1 rounded-full bg-white/20"
                        style={{
                          background: activeImage === index ? ACCENT : "rgba(255,255,255,0.22)",
                        }}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                    <span className="ml-2 rounded bg-black/70 px-2 py-1 font-mono text-[10px] text-gray-300">
                      {activeImage + 1}/{images.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <Section title="Resumen">
            <p className="max-w-4xl font-mono text-sm leading-7 text-gray-300">
              {project.longDescription}
            </p>
          </Section>

          <div className="grid gap-4 lg:grid-cols-2">
            <InfoBlock tone="lime" title="Problema" text={project.problem} />
            <InfoBlock tone="cyan" title="Solucion" text={project.solution} />
          </div>

          <Section title="Funcionalidades principales">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-xs text-gray-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ccff00]" />
                  {feature}
                </div>
              ))}
            </div>
          </Section>

          {project.modules.length ? (
            <Section title="Modulos del sistema">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {project.modules.map((module) => (
                  <div
                    key={module.name}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <h4 className="font-mono text-xs font-black uppercase text-white">
                      {module.name}
                    </h4>
                    <p className="mt-2 font-mono text-[11px] leading-5 text-gray-400">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {project.technicalInfo?.length ? (
            <Section title="Informacion tecnica del panel">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {project.technicalInfo.map((item) => (
                  <div
                    key={item}
                    className="rounded border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 font-mono text-xs text-cyan-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          <Section title="Tecnologias">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[#ccff00]/30 bg-[#ccff00]/5 px-3 py-2 font-mono text-xs font-bold text-[#ccff00]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Arquitectura del sistema">
            <div className="rounded-xl border border-white/10 bg-black/40 p-5 font-mono text-sm text-gray-300">
              <ArchitectureRow label="Frontend / Interfaz" />
              <ArchitectureRow label="API REST / WebSockets" />
              <ArchitectureRow label="Servicios / Microservicios" />
              <ArchitectureRow label="Base de datos - Redis - IA - Integraciones externas" last />
            </div>
          </Section>

          <div className="grid gap-4 lg:grid-cols-2">
            <ListBlock title="Mi contribucion" items={contribution} />
            <ListBlock title="Retos tecnicos" items={challenges} />
          </div>

          <Section title="Resultados y aprendizajes">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((result) => (
                <div
                  key={result}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4 font-mono text-xs leading-relaxed text-gray-300"
                >
                  {result}
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={onPrev}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-mono text-xs font-bold uppercase text-gray-300 transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              <ArrowLeft className="h-4 w-4" />
              Proyecto anterior
            </button>
            <button
              onClick={onNext}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-mono text-xs font-bold uppercase text-gray-300 transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              Siguiente proyecto
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function shortText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength).trim();
  return `${clipped.replace(/[,.]\s*$/, "")}...`;
}

function MobileBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <h3 className="mb-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#ccff00]">
        {title}
      </h3>
      <p className="font-mono text-xs leading-6 text-gray-300">{text}</p>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
        {label}
      </div>
      <div className="mt-1 font-mono text-sm text-white">{value}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h3 className="mb-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-[#ccff00]">
        {title}
      </h3>
      {children}
    </section>
  );
}

function InfoBlock({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "lime" | "cyan";
}) {
  const color = tone === "lime" ? "#ccff00" : "#22d3ee";
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="mb-3 font-mono text-sm font-black uppercase" style={{ color }}>
        {title}
      </h3>
      <p className="font-mono text-sm leading-7 text-gray-300">{text}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Section title={title}>
      <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 font-mono text-sm text-gray-300">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ccff00]" />
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ArchitectureRow({ label, last = false }: { label: string; last?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-lg border border-[#ccff00]/25 bg-[#ccff00]/5 px-4 py-3 text-center">
        {label}
      </div>
      {!last && <div className="py-2 text-[#ccff00]">v</div>}
    </div>
  );
}
