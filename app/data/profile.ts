import type { Profile } from "../types";

export const profile: Profile = {
  name: {
    first: "ELIAZAR",
    second: "NOA",
    last: "LLASCCANOA",
  },
  title: "Ingeniero de Software Full Stack",
  tagline:
    "Ingeniero de Software Full Stack enfocado en innovacion, inteligencia artificial y sistemas empresariales. Construyo soluciones escalables, mantenibles y seguras para optimizar procesos y generar valor.",
  email: "infoeliasar12@gmail.com",
  phone: "+51 916367507",
  github: "https://github.com/EliazarNoaLlas",
  linkedin: "https://linkedin.com/in/eliazar-noa-llasccanoa",
  location: "Cusco, Peru",
  uptime: "99.9%",
  region: "PE-CUSCO-1",
  stats: [
    { value: "3+", label: "Anios de experiencia" },
    { value: "5+", label: "Proyectos entregados" },
    { value: "4+", label: "Industrias atendidas" },
    { value: "IA", label: "Area de enfoque" },
  ],
  processes: [
    {
      pid: "101",
      cmd: "segetran-daemon",
      cpu: "1.2%",
      status: "Ejecutando",
      color: "text-green-400",
    },
    {
      pid: "102",
      cmd: "macsalud-erp",
      cpu: "2.8%",
      status: "Activo",
      color: "text-green-400",
    },
    {
      pid: "103",
      cmd: "mqtt-broker",
      cpu: "0.5%",
      status: "Activo",
      color: "text-green-400",
    },
    {
      pid: "104",
      cmd: "iot-stream",
      cpu: "0.9%",
      status: "Sincronizando",
      color: "text-yellow-400",
    },
    {
      pid: "105",
      cmd: "go-microservice",
      cpu: "3.1%",
      status: "Ejecutando",
      color: "text-green-400",
    },
    {
      pid: "106",
      cmd: "concetur-api",
      cpu: "0.1%",
      status: "Inactivo",
      color: "text-gray-500",
    },
  ],
};
