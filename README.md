# Eliazar Portfolio

Portfolio personal construido con Next.js, React, TypeScript y Tailwind CSS.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abrir `http://localhost:3000`.

## Verificacion

```bash
npm run check
```

Este comando ejecuta lint y build de produccion.

## Despliegue en Vercel

El proyecto esta listo para Vercel. Configuracion incluida:

- Framework: Next.js
- Install command: `npm ci`
- Build command: `npm run vercel-build`
- Node.js: `>=20.9.0`

Pasos:

1. Subir el repositorio a GitHub.
2. Crear un nuevo proyecto en Vercel.
3. Importar el repositorio.
4. Mantener los comandos detectados o usar los definidos en `vercel.json`.
5. Deploy.

No se requieren variables de entorno para la version actual.
