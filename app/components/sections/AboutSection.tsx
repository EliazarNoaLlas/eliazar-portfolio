"use client";

import Image from "next/image";
import {
  Activity,
  BrainCircuit,
  Code2,
  Database,
  MapPin,
  Network,
  Server,
} from "lucide-react";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

const PROFILE_IMAGE = "/ChatGPT Image 29 jul 2026, 03_27_27 p.m..png";

const highlights = [
  {
    title: "Backend",
    text: "Construyo APIs, servicios y modulos con foco en rendimiento, mantenibilidad y despliegue real.",
  },
  {
    title: "Arquitectura",
    text: "Trabajo con microservicios, arquitectura hexagonal, buenas practicas y separacion clara de responsabilidades.",
  },
  {
    title: "Producto",
    text: "Me enfoco en convertir necesidades operativas en sistemas utiles, escalables y faciles de evolucionar.",
  },
];

const stack = [
  "Go",
  "Laravel",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "MQTT",
  "IA",
];

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300 hover:border-[#ccff00]/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.08)] ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle,#ccff00_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-[#f0f0f0] sm:px-8"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="mb-3 font-mono text-sm font-bold uppercase tracking-[0.28em] text-[#ccff00]">
            {"// Acerca de mi"}
          </div>
          <h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">
            Perfil <span className="text-[#ccff00]">profesional</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_18rem_9rem]">
          <BentoCard className="col-span-1 row-span-1 p-6">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="text-3xl font-black leading-none tracking-tight sm:text-4xl">
                <span className="block text-white">{profile.name.first}</span>
                <span
                  className="block"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `1.5px ${ACCENT}`,
                  }}
                >
                  {profile.name.second}
                </span>
              </div>
              <div className="mt-3 h-px w-12 bg-white/20" />
              <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                {profile.title}
              </span>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 row-span-1 md:col-start-2 md:row-start-2">
            <Image
              src={PROFILE_IMAGE}
              alt="Retrato de Eliazar Noa"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </BentoCard>

          <BentoCard className="col-span-2 h-36 p-5 md:col-span-2 md:h-auto">
            <div className="flex h-full items-end justify-center gap-0 overflow-hidden">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative flex h-36 flex-col justify-start border border-white/10 border-b-0 bg-[#0d0d0d] p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#ccff00]/50 hover:shadow-[0_-8px_30px_rgba(204,255,0,0.12)] ${
                    index === 1
                      ? "z-20 w-2/5 rounded-t-2xl"
                      : "z-10 mt-6 w-1/3 rounded-t-xl"
                  } ${index === 0 ? "-mr-4" : ""} ${index === 2 ? "-ml-4 text-right" : ""}`}
                >
                  <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-[#ccff00]/60 to-transparent" />
                  <span className="text-xs font-black uppercase text-white">
                    {item.title}
                  </span>
                  <p className="mt-2 text-[10px] leading-snug text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 row-span-2 p-4 md:col-start-1 md:row-start-2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-[#ccff00]" />
                  <h3 className="text-sm font-bold text-white">Mentalidad</h3>
                </div>
                <div className="h-0.5 w-10 rounded-full bg-[#ccff00]/60" />
                <p className="mt-4 text-xs leading-relaxed text-gray-400">
                  Me gusta construir software con criterio: entender el problema,
                  ordenar la arquitectura y entregar soluciones que funcionen en
                  produccion.
                </p>
              </div>

              <div className="relative mt-5 flex flex-1 items-center justify-center">
                <div className="absolute h-28 w-28 rounded-full border border-[#ccff00]/20" />
                <div className="absolute h-20 w-20 rounded-full border border-[#60a5fa]/25" />
                <div className="grid grid-cols-2 gap-3">
                  {[Server, Network, Database, Code2].map((Icon, index) => (
                    <div
                      key={index}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-[#ccff00]"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 row-span-2 p-4 md:col-start-3 md:row-start-2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[#ccff00]" />
                  <h3 className="text-sm font-bold text-white">Stack</h3>
                </div>
                <div className="h-0.5 w-10 rounded-full bg-[#ccff00]/60" />
                <p className="mt-4 text-xs leading-relaxed text-gray-400">
                  Tecnologias que uso para crear sistemas backend, automatizaciones
                  y plataformas conectadas.
                </p>
              </div>

              <div className="my-5 overflow-hidden border-y border-white/10 bg-white/[0.03] py-3">
                <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-5 pr-5">
                  {[...stack, ...stack].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wide text-[#ccff00]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[10px] text-gray-300">
                  Abierto a colaboraciones y proyectos freelance
                </span>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 p-4 md:col-start-2 md:row-start-3">
            <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#ccff00_1px,transparent_1px),linear-gradient(90deg,#ccff00_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute bottom-0 left-1/3 top-0 w-px bg-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.8)]" />
              <MapPin className="relative z-10 mb-3 h-5 w-5 text-[#ccff00]" />
              <span className="relative z-10 text-2xl font-black uppercase leading-none text-white">
                Cusco,
                <br />
                Peru
              </span>
              <span className="relative z-10 mt-2 font-mono text-xs text-gray-400">
                PE-CUSCO-1
              </span>
            </div>
          </BentoCard>

          <BentoCard className="col-span-2 p-5 md:col-start-2 md:col-span-1 md:row-start-1">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2 text-[#ccff00]">
                <Activity className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.22em]">
                  Operativo
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                Backend, microservicios, IoT e IA aplicada para automatizar
                procesos y crear plataformas escalables.
              </p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
