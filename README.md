# AdsBoost Marketing — Landing Page

Landing page de una sola página para una agencia de Google Ads. Contenido actual es de **ejemplo/inventado** (nombre, teléfono, email) — hay que reemplazarlo por los datos reales. Los casos de éxito ya usan clientes reales (Kevabrö, Juice Dudes, Chin Chin Restaurante) pero las métricas y testimonios siguen siendo **inventados** — hay que reemplazarlos por los números y citas reales antes de publicar.

## Estructura
- `index.html` — contenido y secciones (hero, servicios, casos de éxito, contacto)
- `styles.css` — estilos
- `script.js` — maneja el envío del formulario de contacto

## Pendiente antes de producción
- Reemplazar nombre de negocio, teléfono de WhatsApp, email y casos de éxito por los reales.
- El formulario de contacto (`script.js`) solo muestra un mensaje de éxito, no envía datos a ningún lado todavía. Hay que conectarlo a un backend real, por ejemplo:
  - Una Cloudflare Pages Function (`/functions/api/contact.js`) que envíe el mensaje por email.
  - Un servicio externo como Formspree.

## Ver localmente
Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```
npx serve .
```

## Despliegue
Pensado para Cloudflare Pages conectado a un repositorio de GitHub (build command: ninguno, output directory: `/`).
