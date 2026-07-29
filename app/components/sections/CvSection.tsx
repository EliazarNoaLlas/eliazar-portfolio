"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { ACCENT } from "../../lib/constants";

const CV_PATH = "/CV - Eliazar Noa Llasccanoa.pdf";

export default function CvSection() {
  return (
    <section
      id="cv"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-8"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.28em] text-[#ccff00]">
              <FileText className="h-4 w-4" />
              {"// Mi CV"}
            </div>
            <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              Curriculum <span className="text-[#ccff00]">profesional</span>
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-gray-400">
              Version completa en PDF con experiencia, proyectos, habilidades,
              educacion y logros.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ccff00]/40 bg-[#ccff00]/10 px-5 py-3 font-mono text-xs font-black uppercase text-[#ccff00] transition-colors hover:bg-[#ccff00] hover:text-black"
            >
              <ExternalLink className="h-4 w-4" />
              Ver PDF
            </a>
            <a
              href={CV_PATH}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-mono text-xs font-black uppercase text-cyan-300 transition-colors hover:bg-cyan-300 hover:text-black"
            >
              <Download className="h-4 w-4" />
              Descargar
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_40px_rgba(204,255,0,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
              CV - Eliazar Noa Llasccanoa
            </span>
            <span className="hidden font-mono text-xs text-gray-500 sm:block">
              PDF // 2026
            </span>
          </div>

          <div className="hidden h-[760px] bg-[#111] md:block">
            <iframe
              src={CV_PATH}
              title="CV de Eliazar Noa Llasccanoa"
              className="h-full w-full"
            />
          </div>

          <div className="p-5 md:hidden">
            <div
              className="rounded-xl border p-5 text-center"
              style={{
                borderColor: `${ACCENT}40`,
                background: `${ACCENT}08`,
              }}
            >
              <FileText className="mx-auto mb-4 h-10 w-10 text-[#ccff00]" />
              <p className="font-mono text-sm leading-6 text-gray-300">
                En movil, abre el PDF en una nueva pestana para leerlo con mejor
                comodidad.
              </p>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 font-mono text-xs font-black uppercase text-black"
              >
                Abrir CV
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
