"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Mail, Maximize2 } from "lucide-react";

import { WindowProvider } from "./store/windowStore";

import Topbar from "./components/layout/Topbar";
import TopMenu from "./components/layout/TopMenu";
import StatusBar from "./components/layout/StatusBar";
import Dock from "./components/layout/Dock";
import Footer from "./components/layout/Footer";

import GridBackground from "./components/effects/GridBackground";
import ProgressBar from "./components/effects/ProgressBar";

import TerminalWindow from "./components/os/TerminalWindow";
import TaskManager from "./components/os/TaskManager";
import SystemMonitor from "./components/os/SystemMonitor";

import HeroName from "./components/sections/HeroName";
import HeroStats from "./components/sections/HeroStats";

import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import CvSection from "./components/sections/CvSection";
import ContactSection from "./components/sections/ContactSection";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <WindowProvider>
      <div className="min-h-screen overflow-x-hidden bg-[#050505] text-[#f0f0f0]">
        <ProgressBar />
        <Topbar />
        <TopMenu active={activeNav} setActive={setActiveNav} />

        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen overflow-hidden px-5 pb-28 pt-32 sm:px-8 lg:pb-16 lg:pt-32"
        >
          <GridBackground />

          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1580px] items-start gap-8 lg:grid-cols-[minmax(300px,0.82fr)_minmax(660px,1.5fr)]">
            <div className="space-y-6">
              <HeroName />
              <HeroStats />

              <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  onClick={() => setActiveNav("projects")}
                  className="group inline-flex flex-1 items-center justify-between rounded-lg border border-[#ccff00] bg-[#ccff00]/5 px-6 py-4 font-mono text-base font-black uppercase tracking-wide text-[#ccff00] shadow-[0_0_28px_rgba(204,255,0,0.18)] transition-all duration-300 hover:bg-[#ccff00] hover:text-black"
                >
                  <span className="inline-flex items-center gap-3">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
                    Ver Proyectos
                  </span>
                  <Maximize2 className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>

                <a
                  href="#contact"
                  onClick={() => setActiveNav("contact")}
                  className="group inline-flex flex-1 items-center justify-between rounded-lg border border-[#A3FF12] bg-[#A3FF12]/5 px-6 py-4 font-mono text-base font-black uppercase tracking-wide text-[#A3FF12] shadow-[0_0_28px_rgba(163,255,18,0.18)] transition-all duration-300 hover:bg-[#A3FF12] hover:text-black"
                >
                  <span className="inline-flex items-center gap-3">
                    <Mail className="h-5 w-5" strokeWidth={2.4} />
                    Contactar
                  </span>
                  <Maximize2 className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            <div
              className="grid gap-4 transition-opacity duration-700 lg:-mt-1 lg:translate-x-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.95fr)] xl:translate-x-10 2xl:translate-x-14"
              style={{
                opacity: mounted ? 1 : 0,
                transitionDelay: "0.2s",
              }}
            >
              {mounted && (
                <>
                  <div className="min-h-[440px] lg:min-h-[590px]">
                    <TerminalWindow variant="docked" />
                  </div>

                  <div className="grid gap-4">
                    <div className="min-h-[260px]">
                      <TaskManager variant="docked" />
                    </div>
                    <div className="min-h-[320px]">
                      <SystemMonitor variant="docked" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <StatusBar />
        </section>

        <AboutSection />
        <ProjectsSection />
        <CvSection />
        <ContactSection />
        <Footer />

        <Dock active={activeNav} setActive={setActiveNav} />
      </div>
    </WindowProvider>
  );
}
