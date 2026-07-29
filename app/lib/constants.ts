// ============================================================
// Global constants - CyberOS theme
// ============================================================

export const ACCENT = "#ccff00";
export const ACCENT_BLUE = "#60a5fa";
export const BG_PRIMARY = "#050505";
export const BG_SECONDARY = "#0a0a0a";
export const BG_CARD = "#111";
export const BORDER_COLOR = "#222";
export const BORDER_ACCENT = "#333";

export const TERMINAL_BOOT_LINES = [
  "[ok] Inicializando kernel...",
  "[ok] Cargando modulos de IA...",
  "[ok] Montando sistema de archivos...",
  "[ok] Iniciando servicios de red...",
  "[ok] Conectando al cluster IoT SEGETRAN...",
  "[ok] Preparando microservicios...",
];

export const TERMINAL_COMMANDS: Record<string, () => string[] | null> = {
  help: () => [
    "Comandos disponibles:",
    "  about     - perfil profesional",
    "  skills    - stack tecnico",
    "  projects  - proyectos destacados",
    "  contact   - datos de contacto",
    "  clear     - limpiar terminal",
  ],
  about: () => [
    "Nombre: Eliazar Noa Llasccanoa",
    "Rol: Backend Developer | Microservicios | Go | Sistemas IoT",
    "Ubicacion: Cusco, Peru",
    "Especialidades: Go, microservicios, arquitectura hexagonal e IoT",
    "Proyectos: SEGETRAN, MacSalud, ODIN, CONCETUR, ISIWEEK POS",
  ],
  skills: () => [
    "Stack principal:",
    "  -> Backend:  Go, Node.js, Laravel, APIs REST",
    "  -> Arquitectura: Hexagonal, Clean Architecture, SOLID",
    "  -> Datos: MySQL, SQL Server, PostgreSQL",
    "  -> DevOps: Docker, Kubernetes, Git",
    "  -> IoT: MQTT, I2C, RS485, GPS, NTP",
    "  -> Testing: Unit testing, SQLMock, mocking",
  ],
  projects: () => [
    "Proyectos destacados:",
    "  [1] SEGETRAN - sistema IoT de gestion de transito",
    "  [2] MacSalud - ERP farmaceutico",
    "  [3] ODIN - gestion de obras de construccion",
    "  [4] CONCETUR - plataforma de operaciones turisticas",
    "  [5] ISIWEEK - SaaS POS multi-tenant",
    "  Escribe 'contact' para conversar sobre un proyecto.",
  ],
  contact: () => [
    "Email:    infoeliasar12@gmail.com",
    "Telefono: +51 916367507",
    "GitHub:   github.com/EliazarNoaLlas",
    "LinkedIn: linkedin.com/in/eliazar-noa-llasccanoa",
    "Estado:   DISPONIBLE_PARA_PROYECTOS",
  ],
  clear: () => null,
};
