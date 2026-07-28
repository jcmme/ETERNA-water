# ETERNA Water — App

App oficial de clientes de ETERNA Water (equipos generadores de agua atmosférica y purificación de aire). Ver el detalle completo de funcionalidades planeadas en [`ETERNA_APP_SPEC.md`](./ETERNA_APP_SPEC.md).

- **Producción:** https://eterna-water.vercel.app
- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · next-intl (ES/EN)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app/[locale]/` — rutas de cada módulo (Tienda, ETERNA Care, Filtros y Refacciones, Mi ETERNA, Soporte, Universo ETERNA, Configuración).
- `src/components/` — componentes de UI, agrupados por módulo cuando aplica (ej. `components/store/`).
- `src/i18n/` — configuración de next-intl (rutas `/es` y `/en`).
- `messages/es.json` / `messages/en.json` — todas las cadenas de texto de la app.
- `src/app/globals.css` — tokens de diseño (colores, radios) centralizados; la paleta actual es un placeholder listo para reemplazarse por la identidad de marca oficial.

## Deploy

El proyecto está conectado a Vercel vía GitHub: cada push a `claude/eterna-water-app-spec-ornk4z` genera un deploy automático a producción.
