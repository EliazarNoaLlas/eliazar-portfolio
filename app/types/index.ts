// ============================================================
// PORTFOLIO TYPES — Eliazar Noa
// ============================================================

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  industry: string;
  category: "iot" | "erp" | "saas" | "enterprise" | "backend";
  featured: boolean;
  stack: string[];
  architecture: string[];
  githubUrl?: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  impact: ImpactMetric[];
  modules: ProjectModule[];
  year: number;
  status: ProjectStatus;
}

export type ProjectStatus =
  | "MISSION_COMPLETE"
  | "DEPLOYED_GLOBALLY"
  | "OPERATIONAL"
  | "IN_PRODUCTION"
  | "ACTIVE";

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface ProjectModule {
  name: string;
  description: string;
  features: string[];
}

export interface Profile {
  name: {
    first: string;
    second: string;
    last: string;
  };
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  uptime: string;
  region: string;
  stats: StatItem[];
  processes: OSProcess[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface OSProcess {
  pid: string;
  cmd: string;
  cpu: string;
  status: string;
  color: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface TerminalLine {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export interface NavItem {
  id: string;
  icon: string;
  label: string;
}

export interface DockItem {
  id: string;
  icon: string;
  label: string;
}

export interface Position {
  x: number;
  y: number;
}
