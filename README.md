# Comidas del Mundo

Proyecto migrado a **Next.js App Router** con **Tailwind CSS**, **Framer Motion** y **Lucide React**.

## Estructura

```
├── src/
│   ├── app/                 # Rutas Next: /, /venezuela, /mali, /rumania
│   ├── components/
│   │   ├── legacy/          # Render puente para contenido migrado
│   │   └── ui/              # Base para nuevos componentes avanzados
│   ├── content/legacy/      # HTML visual existente convertido a módulos JS
│   └── lib/                 # Interacciones cliente heredadas
├── public/
│   ├── assets/              # Imágenes y media servidos por Next
│   ├── legacy-css/          # CSS heredado por ruta
│   └── og/                  # Imágenes estables para Open Graph/Twitter
├── legacy/
│   ├── html/                # HTML estático original archivado
│   └── source-assets/       # Assets fuente previos a la migración
├── tailwind.config.js
├── postcss.config.js
└── next.config.mjs
```

## Comandos

```bash
npm run dev
npm run build
npm run start
```

## Despliegue en Netlify

El archivo `netlify.toml` fija la configuración de despliegue para Next.js:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

Si Netlify conserva ajustes antiguos del panel, redeploya desde GitHub después de este cambio para que use la configuración del repo.

## Notas

- El contenido visual existente se conserva mediante rutas React que inyectan el HTML ya migrado.
- Las interacciones antiguas viven en `src/lib/legacy-interactions.js` para poder sustituirlas progresivamente por componentes React.
- El dominio SEO placeholder es `https://comidas-del-mundo.example`; cámbialo por el dominio real antes de publicar.
