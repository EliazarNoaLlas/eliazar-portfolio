// ============================================================
// GLOBAL CONSTANTS — CyberOS Theme
// ============================================================

export const ACCENT = "#ccff00";
export const ACCENT_BLUE = "#60a5fa";
export const BG_PRIMARY = "#050505";
export const BG_SECONDARY = "#0a0a0a";
export const BG_CARD = "#111";
export const BORDER_COLOR = "#222";
export const BORDER_ACCENT = "#333";

export const TERMINAL_BOOT_LINES = [
  "Initializing kernel...",
  "Loading AI modules...",
  "Mounting file system...",
  "Starting network services...",
  "Connecting to SEGETRAN IoT cluster...",
  "Welcome to ARCH-OS v3.0 — PE-CUSCO-1",
];

export const TERMINAL_COMMANDS: Record<string, () => string[] | null> = {
  help: () => [
    "Available commands:",
    "  about     — Who am I",
    "  skills    — Tech stack",
    "  projects  — My work",
    "  contact   — Get in touch",
    "  clear     — Clear terminal",
  ],
  about: () => [
    "Name: Eliazar Noa",
    "Role: Backend Developer | Microservices | Go | IoT Systems",
    "Location: Cusco, Perú",
    "Specialties: Go, Microservices, Hexagonal Architecture, IoT",
    "Projects: SEGETRAN · MacSalud · ODIN · CONCETUR · ISIWEEK POS",
  ],
  skills: () => [
    "Core Stack:",
    "  → Backend:  Go (Golang), Node.js, REST APIs",
    "  → Arch:     Hexagonal, Clean Architecture, SOLID",
    "  → Database: MySQL, SQL Server, PostgreSQL",
    "  → DevOps:   Docker, Kubernetes, Git",
    "  → IoT:      MQTT, I2C, RS485, GPS, NTP",
    "  → Testing:  Unit Testing, SQLMock, Mocking",
  ],
  projects: () => [
    "Featured Projects:",
    "  [1] SEGETRAN — IoT Traffic Management System",
    "  [2] MacSalud — Pharmaceutical ERP",
    "  [3] ODIN     — Construction Management System",
    "  [4] CONCETUR — Tourist Operations Platform",
    "  [5] ISIWEEK  — Multi-Tenant SaaS POS",
    "  Type 'contact' to discuss a project.",
  ],
  contact: () => [
    "Email:    your.email@email.com",
    "GitHub:   github.com/your-username",
    "LinkedIn: linkedin.com/in/eliazar-noa",
    "Status:   ACCEPTING_CONTRACTS",
  ],
  clear: () => null,
};
