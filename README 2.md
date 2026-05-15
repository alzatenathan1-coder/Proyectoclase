# Comidas del Mundo

Sitio web estático de rutas gastronómicas internacionales. La página principal funciona como terminal de destinos y cada país vive en una página propia.

## Estructura

```
├── index.html
├── pages/
│   ├── mali.html
│   ├── rumania.html
│   └── venezuela.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── pages/
│   ├── js/
│   │   ├── main.js
│   │   └── pages/
│   ├── images/
│   │   ├── mali/
│   │   ├── rumania/
│   │   ├── venezuela/
│   │   ├── previews/
│   │   └── archive/
│   └── media/
├── docs/
└── package.json
```

## SEO y organización

- Metadatos básicos por página: title, description, robots, theme-color y canonical.
- Open Graph y Twitter Cards para compartir cada página.
- JSON-LD básico con `WebSite` y `WebPage`.
- Imágenes locales con nombres descriptivos y carpetas por país.
- CSS y JavaScript separados por alcance: global y páginas.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```
