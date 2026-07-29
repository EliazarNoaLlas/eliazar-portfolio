"use client";

import { useState, useEffect, useRef } from "react";
import {
  Award,
  BookOpen,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

const technicalSkills = [
  "PHP",
  "Laravel",
  "JavaScript",
  "Python",
  "APIs RESTful",
  "JSON",
  "Webhooks",
  "MySQL",
  "PostgreSQL",
  "Microservicios",
  "RAG",
  "LLMs",
  "Embeddings",
  "Bases vectoriales",
  "Redis",
  "WebSockets",
  "Machine Learning",
  "Power BI",
  "IoT",
  "Git",
  "GitHub",
  "Docker",
];

const softSkills = [
  "Pensamiento analitico",
  "Resolucion de problemas",
  "Aprendizaje autonomo",
  "Trabajo en equipo",
  "Comunicacion clara",
  "Gestion del tiempo",
  "Adaptabilidad",
  "Atencion al detalle",
  "Proactividad",
];

const achievements = [
  "Fundador de ASDUS - Grupo de Estudios en Desarrollo de Software y Sistemas.",
  "Primer lugar en Concurso de Programacion Competitiva Cusco Contest - UNSAAC.",
  "Campeon en Concurso de Emprendimiento e Innovacion - PAQARINA.",
  "Ganador NASA Space Apps Hackathon global en Cusco.",
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  const copy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden border-t bg-black py-24"
      style={{ borderColor: `${ACCENT}30`, scrollMarginTop: "120px" }}
    >
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap text-[14vw] font-black tracking-tighter text-white opacity-[0.025]">
          CONTACTO
        </span>
      </div>

      <div
        className="container relative z-10 mx-auto px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-2 font-mono text-sm text-[#ccff00]">
              <span className="h-2 w-2 rounded-full bg-[#ccff00]" />
              CONTACTO // CV // DISPONIBLE
            </div>
            <h2 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
              Eliazar Noa <span className="text-[#ccff00]">Llasccanoa</span>
            </h2>
            <p className="mt-4 max-w-3xl font-mono text-base leading-7 text-gray-300">
              Ingeniero de Software Full Stack | Innovacion, Inteligencia
              Artificial y Sistemas Empresariales
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 backdrop-blur">
                <h3 className="mb-4 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ccff00]">
                  Datos directos
                </h3>
                <div className="space-y-3 font-mono text-sm text-gray-300">
                  <ContactLine icon={<MapPin />} text="Cusco, Cusco, Peru" />
                  <ContactLine icon={<Phone />} text={profile.phone} href="tel:+51916367507" />
                  <ContactLine icon={<Mail />} text={profile.email} href={`mailto:${profile.email}`} />
                  <ContactLine icon={<Linkedin />} text="linkedin.com/in/eliazar-noa-llasccanoa" href={profile.linkedin} />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={copy}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ccff00]/40 bg-[#ccff00]/10 px-4 py-3 font-mono text-xs font-bold uppercase text-[#ccff00] transition-colors hover:bg-[#ccff00] hover:text-black"
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? "Correo copiado" : "Copiar correo"}
                  </button>
                  <a
                    href="/CV - Eliazar Noa Llasccanoa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 font-mono text-xs font-bold uppercase text-cyan-300 transition-colors hover:bg-cyan-300 hover:text-black"
                  >
                    <BookOpen className="h-4 w-4" />
                    Ver CV
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 backdrop-blur">
                <h3 className="mb-3 flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ccff00]">
                  <BookOpen className="h-4 w-4" />
                  Educacion
                </h3>
                <div className="font-mono text-sm text-white">
                  Egresado en Ingenieria Informatica y de Sistemas
                </div>
                <p className="mt-2 font-mono text-xs leading-6 text-gray-400">
                  Universidad Nacional de San Antonio Abad del Cusco
                  <br />
                  05/2019 - 05/2024 | Cusco, Cusco
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 backdrop-blur">
                <h3 className="mb-3 flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ccff00]">
                  <Award className="h-4 w-4" />
                  Logros
                </h3>
                <div className="space-y-3">
                  {achievements.map((item) => (
                    <p key={item} className="font-mono text-xs leading-6 text-gray-400">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 backdrop-blur">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ccff00]">
                  <Sparkles className="h-4 w-4" />
                  Resumen profesional
                </h3>
                <p className="font-mono text-sm leading-7 text-gray-300">
                  Ingeniero de Software Full Stack con experiencia en aplicaciones
                  web, moviles y de escritorio para empresas, startups,
                  instituciones educativas y gobiernos locales. Especializado en
                  Laravel, JavaScript, Python, MySQL y PostgreSQL, con experiencia
                  en APIs, microservicios, Redis, WebSockets, IA, RAG, embeddings,
                  grafos de conocimiento, automatizacion y sistemas empresariales.
                </p>
              </div>

              <SkillPanel title="Habilidades tecnicas" items={technicalSkills} />
              <SkillPanel title="Habilidades blandas" items={softSkills} />

              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-xl border border-[#ccff00]/40 bg-[#ccff00] px-4 py-4 text-center font-mono text-xs font-black uppercase text-black transition-transform hover:-translate-y-1"
                >
                  Escribir correo
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-mono text-xs font-bold uppercase text-gray-300 transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-mono text-xs font-bold uppercase text-gray-300 transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="text-[#ccff00] [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      <span className="break-words">{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-3 transition-colors hover:text-[#ccff00]"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
}

function SkillPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 backdrop-blur">
      <h3 className="mb-4 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#ccff00]">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
