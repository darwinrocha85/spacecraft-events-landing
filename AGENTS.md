# spacecraft-events-landing — AGENTS.md

> Proyecto independiente. Abrir opencode con cwd en `spacecraft-events-landing/`, nunca en `Projects/`.
> Stack: React 18.3 + Vite 5 + Axios. Landing pública de marketing (solo lectura + links a la tienda).

## Cómo correr
- `npm.cmd install`, copiar `.env.example` a `.env`, `npm.cmd run dev` → `:5176` (puerto propio con `strictPort`, sin colisiones)
- Local: flota `http://localhost:8080/api`, tienda `http://localhost:5174`
- Sin `run-*.ps1` en este repo

## Contrato API
- `VITE_API_URL` + `VITE_TICKETS_URL` por env; en prod fallback a
  `spacecraftsystem.onrender.com/api` y `https://spacecraft-tickets.web.app`.
- Lista lo reservable hoy; la compra ocurre en la tienda, nunca aquí.

## Deploy
- Proyecto Firebase propio `spacecraft-events-landing` (NO es target de `spacecraft-system`):
  `npm.cmd run build` + `firebase.cmd deploy --only hosting`
- URL: `spacecraft-events-landing.web.app`

## No hacer
- No hardcodear URLs. No commitear `.env`, `node_modules/`, `dist/`, `.firebase/`.
- No agregar compra ni checkout aquí (vive en la tienda).
