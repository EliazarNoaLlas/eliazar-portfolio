"use client";

import { useState, useEffect, useRef } from "react";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

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
      className="py-24 relative overflow-hidden border-t"
      style={{ background: "#000", borderColor: `${ACCENT}30` }}
    >
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[15vw] font-black opacity-[0.03] whitespace-nowrap tracking-tighter text-white">
          CONTACT ME
        </span>
      </div>

      <div
        className="container mx-auto px-8 relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className="flex items-center gap-2 font-mono text-sm mb-4"
            style={{ color: ACCENT }}
          >
            <span className="animate-pulse">◉</span>
            <span>SECURE_UPLINK // READY</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Establish{" "}
            <span style={{ color: ACCENT }}>Connection</span>
          </h2>
          <p
            className="text-xl text-gray-400 max-w-2xl font-mono border-l-4 pl-6 mb-12"
            style={{ borderColor: ACCENT }}
          >
            Transmite tus parámetros de misión. Backend, microservicios, sistemas IoT o
            arquitectura hexagonal — listo para colaborar.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Left: email + links */}
            <div className="space-y-6">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                COPY_EMAIL
              </div>
              <button
                onClick={copy}
                className="flex items-center justify-between w-full bg-[#111] border border-[#333] p-5 rounded-lg hover:border-[#ccff00]/50 group transition-colors overflow-hidden relative cursor-pointer"
              >
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: `${ACCENT}08` }}
                />
                <span className="font-mono text-sm text-gray-300 relative z-10">
                  {profile.email}
                </span>
                <span
                  className="relative z-10 p-2 border border-[#333] group-hover:border-[#ccff00] transition-colors rounded"
                  style={{ color: ACCENT }}
                >
                  {copied ? "✓" : "⎘"}
                </span>
              </button>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { label: "GITHUB_FREQ", href: profile.github, icon: "⌥" },
                  { label: "LINKEDIN_FREQ", href: profile.linkedin, icon: "in" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 border border-[#333] bg-[#0a0a0a] hover:bg-[#ccff00] hover:text-black transition-all rounded font-mono text-xs text-gray-400"
                  >
                    <span>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col gap-4 md:items-end">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center px-10 py-5 font-black text-lg uppercase tracking-wider transition-transform hover:scale-105"
                style={{ background: ACCENT, color: "#000" }}
              >
                OPEN_SECURE_CHANNEL ⛨
              </a>
              <p className="font-mono text-xs text-gray-500 md:text-right">
                <span style={{ color: ACCENT }}>●</span>{" "}
                LOCATION: {profile.location.toUpperCase()}
                <br />
                STATUS: ACCEPTING_CONTRACTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
