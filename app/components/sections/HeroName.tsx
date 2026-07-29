"use client";

import Image from "next/image";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

const PROFILE_IMAGE = "/ChatGPT Image 29 jul 2026, 03_27_27 p.m..png";

export default function HeroName() {
  return (
    <div className="relative z-10 pointer-events-none select-none">
      <div className="mb-5 font-mono text-sm font-bold uppercase tracking-wide text-[#ccff00]">
        {"// Ingeniero de software"}
      </div>

      <div className="relative grid grid-cols-[112px_minmax(0,1fr)] items-center gap-5 sm:grid-cols-[128px_minmax(0,1fr)] lg:grid-cols-[144px_minmax(0,1fr)]">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-[#A3FF12]/70 bg-black shadow-[0_0_34px_rgba(163,255,18,0.25)] sm:h-32 sm:w-32 lg:h-36 lg:w-36">
          <Image
            src={PROFILE_IMAGE}
            alt="Retrato de Eliazar Noa"
            fill
            priority
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>

        <h1 className="min-w-0 text-[clamp(2.6rem,5.4vw,5.8rem)] font-black leading-[0.86] text-[#f2f2f2]">
          <span className="block">{profile.name.first}</span>
          <span
            className="block"
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${ACCENT}`,
            }}
          >
            {profile.name.second}
          </span>
        </h1>

        <div
          className="absolute right-4 top-2 hidden h-14 w-14 border-r-4 border-t-4 opacity-70 lg:block"
          style={{ borderColor: ACCENT }}
        />
      </div>

      <div className="mt-6 border-t border-[#ccff00]/40 pt-5">
        <div className="mb-3 flex items-start gap-3 font-mono">
          <span className="text-xl leading-none text-[#ccff00]">&gt;</span>
          <div>
            <div className="text-lg font-bold text-white">
              Full Stack Software Engineer
            </div>
            <div className="mt-1 text-sm font-bold text-[#ccff00]">
              AI, Laravel, IoT, Microservicios
            </div>
          </div>
        </div>

        <p className="max-w-xl font-mono text-sm leading-7 text-gray-300 sm:text-base">
          {profile.tagline}
        </p>
      </div>
    </div>
  );
}
