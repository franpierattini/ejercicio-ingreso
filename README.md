# To-do API en Express + TypeScript

Este proyecto es una API RESTful para gestionar tareas (To-dos), desarrollada con Express y TypeScript. Incluye pruebas con Jest, sigue principios SOLID, patrones de diseño y buenas prácticas de desarrollo profesional.

## Características

- CRUD completo para el modelo Todo
- Arquitectura orientada a objetos
- Principios SOLID y patrones de diseño
- TDD con Jest
- Configuración de CI/CD (GitHub Actions)
- Código limpio y documentado

## Scripts principales

- `npm run dev` — Ejecuta el servidor en modo desarrollo
- `npm test` — Ejecuta los tests con Jest

## Instalación

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor:
   ```bash
   npm run dev
   ```

## Endpoints principales

- `GET    /todos` — Listar todas las tareas
- `POST   /todos` — Crear una nueva tarea
- `GET    /todos/:id` — Obtener una tarea por ID
- `PUT    /todos/:id` — Actualizar una tarea
- `DELETE /todos/:id` — Eliminar una tarea

## Estructura del proyecto

- `src/` — Código fuente principal
- `tests/` — Pruebas unitarias y de integración
- `.github/workflows/` — Configuración de CI/CD

## Licencia

MIT
