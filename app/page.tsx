"use client";

import { useState, useEffect } from "react";

// Layout
import Topbar from "./components/layout/Topbar";
import StatusBar from "./components/layout/StatusBar";
import Dock from "./components/layout/Dock";
import Footer from "./components/layout/Footer";

// Effects
import GridBackground from "./components/effects/GridBackground";
import ProgressBar from "./components/effects/ProgressBar";

// OS Windows
import TerminalWindow from "./components/os/TerminalWindow";
import TaskManager from "./components/os/TaskManager";
import SystemMonitor from "./components/os/SystemMonitor";

// Hero sections
import HeroName from "./components/sections/HeroName";
import HeroStats from "./components/sections/HeroStats";
import ContactPanel from "./components/sections/ContactPanel";

// Content sections
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0f0f0] overflow-x-hidden">
      <ProgressBar />
      <Topbar />

      {/* ── HERO SECTION ── */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
        style={{ paddingTop: "40px" }}
      >
        <GridBackground />

        {/* Main name identity */}
        <HeroName />

        {/* Floating OS windows */}
        <div
          className="absolute inset-0"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <TerminalWindow initialPos={{ x: 340, y: 80 }} />
          <TaskManager initialPos={{ x: 920, y: 60 }} />
          <SystemMonitor initialPos={{ x: 920, y: 330 }} />
        </div>

        {/* Stats row */}
        <HeroStats />

        {/* Contact CTA */}
        <ContactPanel />

        <StatusBar />
      </section>

      {/* ── PROJECTS SECTION ── */}
      <ProjectsSection />

      {/* ── CONTACT SECTION ── */}
      <ContactSection />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── DOCK ── */}
      <Dock active={activeNav} setActive={setActiveNav} />
    </div>
  );
}
