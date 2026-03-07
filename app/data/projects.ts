import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "001",
    slug: "segetran",
    title: "SEGETRAN — Sistema Inteligente de Gestión de Tránsito",
    shortTitle: "SEGETRAN",
    description:
      "Sistema IoT para control inteligente de semáforos con dispositivos conectados, control remoto y monitoreo en tiempo real.",
    longDescription:
      "SEGETRAN es una plataforma backend de microservicios construida en Go que integra dispositivos IoT para la gestión inteligente del tráfico urbano. Permite control remoto de actuadores, programación de secuencias de semáforos y monitoreo en tiempo real mediante protocolos MQTT, I2C y RS485.",
    industry: "Smart Cities / IoT",
    category: "iot",
    featured: true,
    stack: ["Golang", "Microservices", "MQTT", "I2C", "RS485", "GPS", "NTP", "Docker"],
    architecture: ["Clean Architecture", "Hexagonal Architecture", "REST APIs"],
    problem:
      "Las ciudades enfrentan caos vehicular por semáforos operados manualmente sin capacidad de respuesta en tiempo real ni monitoreo centralizado.",
    solution:
      "Sistema de microservicios en Go con integración IoT que permite gestión remota, programación automática de secuencias y telemetría en tiempo real de todos los dispositivos de tráfico.",
    impact: [
      { label: "Control remoto en tiempo real", value: "100%" },
      { label: "Dispositivos IoT integrados", value: "Multi-node" },
      { label: "Uptime del sistema", value: "99.9%" },
    ],
    modules: [
      {
        name: "Actuator Logs Service",
        description: "Registro y consulta de eventos de actuadores.",
        features: [
          "Crear registros de actuadores",
          "Obtener registros por rango de fechas",
          "Obtener último estado de actuadores por dispositivo",
        ],
      },
      {
        name: "Actuator Schedules Service",
        description: "Gestión de horarios y secuencias de actuadores.",
        features: [
          "CRUD de horarios",
          "Programación automática de secuencias",
          "Integración con dispositivos IoT",
        ],
      },
      {
        name: "Device Peripherals Service",
        description: "Gestión de periféricos conectados a dispositivos IoT.",
        features: [
          "CRUD de periféricos",
          "Asociación a dispositivos",
          "Configuración de hardware",
        ],
      },
    ],
    year: 2024,
    status: "OPERATIONAL",
  },
  {
    id: "002",
    slug: "macsalud",
    title: "MacSalud — ERP Farmacéutico Empresarial",
    shortTitle: "MacSalud ERP",
    description:
      "Sistema ERP para gestión integral de farmacias: inventario, proveedores, facturación y paneles de control administrativos.",
    longDescription:
      "MacSalud es un ERP farmacéutico construido en Go con SQL Server que centraliza la gestión de inventarios médicos, control de proveedores, facturación y módulos de crash cart. La arquitectura de microservicios garantiza escalabilidad y mantenibilidad.",
    industry: "Salud / Farmacéutico",
    category: "erp",
    featured: true,
    stack: ["Golang", "SQL Server", "REST APIs", "Microservices", "Docker"],
    architecture: ["Clean Architecture", "Hexagonal Architecture", "Microservices"],
    problem:
      "Las farmacias carecen de sistemas integrados para gestionar inventario médico, proveedores y control de coches de paro de forma unificada.",
    solution:
      "ERP modular en Go con microservicios independientes para cada dominio de negocio: facturación, inventario médico y control de almacenes.",
    impact: [
      { label: "Control de inventario médico", value: "Tiempo real" },
      { label: "Reportes de facturación", value: "Dinámicos" },
      { label: "Gestión de crash carts", value: "Automatizada" },
    ],
    modules: [
      {
        name: "Dashboard de Facturación",
        description: "Panel de control para análisis de facturación de proveedores.",
        features: [
          "Filtros por fechas",
          "Resumen de facturas",
          "Reportes dinámicos",
        ],
      },
      {
        name: "Crash Cart Warehouse Service",
        description: "Gestión de almacenes de coches de paro médicos.",
        features: [
          "CRUD de almacenes",
          "Control de disponibilidad",
          "Gestión de inventario médico",
        ],
      },
    ],
    year: 2023,
    status: "IN_PRODUCTION",
  },
  {
    id: "003",
    slug: "odin",
    title: "ODIN — Sistema de Gestión para Empresa Constructora",
    shortTitle: "ODIN",
    description:
      "Plataforma empresarial para gestionar proyectos de construcción, recursos, equipos y avances de obra.",
    longDescription:
      "ODIN es un sistema de gestión empresarial diseñado para constructoras, que centraliza el control de proyectos, gestión de recursos materiales, seguimiento de equipos de trabajo y registro de avances de obra en una arquitectura modular y escalable.",
    industry: "Construcción",
    category: "enterprise",
    featured: true,
    stack: ["Golang", "REST APIs", "MySQL", "Docker"],
    architecture: ["Modular Architecture", "Clean Architecture"],
    problem:
      "Empresas constructoras gestionan proyectos con hojas de cálculo fragmentadas sin visibilidad en tiempo real del avance, recursos ni equipos.",
    solution:
      "Sistema backend modular que centraliza proyectos, recursos y equipos con APIs REST para integración con frontends administrativos.",
    impact: [
      { label: "Proyectos centralizados", value: "Multi-obra" },
      { label: "Control de recursos", value: "Tiempo real" },
      { label: "Seguimiento de avances", value: "Automatizado" },
    ],
    modules: [
      {
        name: "Gestión de Proyectos",
        description: "Control completo del ciclo de vida de proyectos de construcción.",
        features: ["Creación y seguimiento de proyectos", "Asignación de recursos", "Control de hitos"],
      },
      {
        name: "Control de Recursos",
        description: "Gestión de materiales y equipos de trabajo.",
        features: ["Inventario de materiales", "Asignación de equipos", "Registro de avances de obra"],
      },
    ],
    year: 2023,
    status: "MISSION_COMPLETE",
  },
  {
    id: "004",
    slug: "concetur",
    title: "CONCETUR — Plataforma de Gestión Operativa",
    shortTitle: "CONCETUR",
    description:
      "Sistema empresarial para gestión operativa de servicios turísticos y transporte, con control administrativo y seguimiento de procesos.",
    longDescription:
      "CONCETUR es una plataforma backend orientada a la gestión operativa de servicios turísticos y de transporte. Centraliza el control de operaciones, registro de actividades y seguimiento de procesos internos mediante APIs REST.",
    industry: "Turismo / Transporte",
    category: "enterprise",
    featured: false,
    stack: ["Golang", "REST APIs", "PostgreSQL", "Docker"],
    architecture: ["Clean Architecture", "Hexagonal Architecture"],
    problem:
      "Empresas de turismo y transporte carecen de sistemas integrados para gestionar operaciones, registrar actividades y controlar procesos en tiempo real.",
    solution:
      "Plataforma de microservicios con APIs REST que centraliza la gestión operativa, seguimiento de actividades y control administrativo.",
    impact: [
      { label: "Operaciones centralizadas", value: "100%" },
      { label: "Procesos automatizados", value: "Multi-módulo" },
    ],
    modules: [
      {
        name: "Gestión de Operaciones",
        description: "Control y seguimiento de operaciones diarias.",
        features: ["Registro de actividades", "Control administrativo", "Seguimiento de procesos"],
      },
    ],
    year: 2023,
    status: "ACTIVE",
  },
  {
    id: "005",
    slug: "isiweek-pos",
    title: "ISIWEEK POS — Sistema de Punto de Venta Multi-Empresa",
    shortTitle: "ISIWEEK POS",
    description:
      "Plataforma SaaS multi-tenant completa para gestión comercial, financiamiento e inventario. Construida con Next.js, React y MySQL.",
    longDescription:
      "ISIWEEK POS es una plataforma SaaS multi-tenant que unifica gestión de ventas al contado y financiadas, control de inventario por unidad física, sistema de financiamiento con amortización francesa, despachos parciales con trazabilidad, catálogos B2C/B2B e impresión térmica Bluetooth nativa.",
    industry: "Retail / Finanzas / Construcción / Medicina",
    category: "saas",
    featured: true,
    stack: ["Next.js", "React", "MySQL", "PM2", "NGINX", "GitHub Actions"],
    architecture: ["Hybrid Next.js App Router", "Server Components", "Modular by Domain"],
    problem:
      "Empresas pequeñas y medianas enfrentan control de inventario fragmentado, ventas a crédito sin control y operación multi-sucursal imposible.",
    solution:
      "Plataforma SaaS multi-tenant que unifica ventas, financiamiento con amortización francesa, inventario por unidades físicas y catálogos B2C/B2B en un solo sistema.",
    impact: [
      { label: "Líneas de código", value: "15,000+" },
      { label: "Módulos de negocio", value: "12+" },
      { label: "Industrias atendidas", value: "5+" },
      { label: "Componentes React", value: "50+" },
    ],
    modules: [
      {
        name: "Sistema de Ventas",
        description: "Flujo completo de ventas al contado y financiadas.",
        features: [
          "Métodos de pago: efectivo, tarjeta, transferencia, mixto",
          "Cálculo automático de ITBIS (18%)",
          "Impresión de tickets ESC/POS",
        ],
      },
      {
        name: "Sistema de Financiamiento",
        description: "Crédito con amortización francesa (cuota fija).",
        features: [
          "Cronograma completo de cuotas",
          "Scoring crediticio automático (0–100)",
          "Alertas automáticas de cobranza",
          "Cálculo de mora por días vencidos",
        ],
      },
      {
        name: "Inventario y Activos Rastreables",
        description: "Control por unidad física con número de serie.",
        features: [
          "Registro con chasis, VIN, número de motor",
          "Ciclo: en_stock → financiado → vendido → recuperado",
          "Generación de código QR por unidad",
        ],
      },
      {
        name: "Módulo de Conduces",
        description: "Despachos parciales con trazabilidad completa.",
        features: [
          "Múltiples conduces por venta",
          "Prevención de sobre-despacho",
          "Auditoría completa de cada despacho",
        ],
      },
    ],
    year: 2024,
    status: "DEPLOYED_GLOBALLY",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
