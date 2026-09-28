# spacecraft-events-landing

Landing pública de marketing: lista todo lo reservable hoy en la flota (museos abiertos y
funciones de teatro vigentes) y enlaza a la tienda de entradas para comprar.

## Stack
React 18 + Vite 5, Axios, mismo tema visual del ecosistema naveSpace. Proyecto de Firebase
propio (`spacecraft-events-landing`, sitio default, sin target).

## Cómo correr en local
```powershell
npm.cmd install
Copy-Item .env.example .env.development
npm.cmd run dev
```
Abre `http://localhost:5176`. Necesita `spacecraftSystem` (8080) corriendo.

## Variables de entorno
| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL de `spacecraftSystem` |
| `VITE_TICKETS_URL` | URL completa de la tienda (`https://spacecraft-tickets.web.app` en prod), para el enlace de compra |

## Build y deploy
```powershell
npm.cmd run build
firebase.cmd deploy --only hosting
```

## Repos relacionados
Backend: [spacecraftSystem](https://github.com/darwinrocha85/spacecraftSystem). Compra:
[spacecraft-tickets-frontend](https://github.com/darwinrocha85/spacecraft-tickets-frontend).
