import type { Profile } from "../types";

export const profile: Profile = {
  name: {
    first: "ELIAZAR",
    second: "NOA",
    last: "LLASCCANOA",
  },
  title: ":: BACKEND_DEV & MICROSERVICES_ARCHITECT ::",
  tagline:
    "Ingeniero de Sistemas especializado en backend con Go, arquitectura hexagonal y microservicios. Experiencia en IoT, ERP farmacéutico, sistemas de tránsito inteligente y plataformas SaaS multi-tenant.",
  email: "your.email@email.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/eliazar-noa",
  location: "Cusco, Perú",
  uptime: "99.9%",
  region: "PE-CUSCO-1",
  stats: [
    { value: "3+", label: "Años Exp." },
    { value: "5+", label: "Proyectos" },
    { value: "4+", label: "Industrias" },
    { value: "IoT", label: "SEGETRAN" },
  ],
  processes: [
    { pid: "101", cmd: "segetran-daemon", cpu: "1.2%", status: "Running", color: "text-green-400" },
    { pid: "102", cmd: "macsalud-erp", cpu: "2.8%", status: "Active", color: "text-green-400" },
    { pid: "103", cmd: "mqtt-broker", cpu: "0.5%", status: "Active", color: "text-green-400" },
    { pid: "104", cmd: "iot-stream", cpu: "0.9%", status: "Syncing", color: "text-yellow-400" },
    { pid: "105", cmd: "go-microservice", cpu: "3.1%", status: "Running", color: "text-green-400" },
    { pid: "106", cmd: "concetur-api", cpu: "0.1%", status: "Idle", color: "text-gray-500" },
  ],
};
