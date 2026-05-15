import LegacyRoute from '@/components/legacy/LegacyRoute';
import { bodyClassName, html, htmlClassName } from '@/content/legacy/venezuela';
import VenezuelaHero from '@/components/VenezuelaHero';

export const metadata = {
  title: {
    absolute: 'Venezuela: Cartografía del Mestizaje | Comidas del Mundo',
  },
  description:
    'Venezuela: Cartografía del Mestizaje, un viaje profundo por la geografía del sabor venezolano.',
  alternates: {
    canonical: '/paises/venezuela',
    languages: {
      es: '/paises/venezuela',
    },
  },
  openGraph: {
    title: 'Venezuela: Cartografía del Mestizaje | Identidad Vibrante',
    description: 'Un viaje vibrante por el mapa del gusto venezolano: arepas, cachapas, pabellón, cacao y más.',
    url: '/paises/venezuela',
    images: ['/og/venezuela.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venezuela: Cartografía del Mestizaje',
    description: 'Arepas, cachapas, pabellón criollo, cacao y regiones de la cocina venezolana.',
    images: ['/og/venezuela.webp'],
  },
};

export default function VenezuelaPage() {
  return (
    <>
      <VenezuelaHero />
      <LegacyRoute
        variant="venezuela"
        html={html}
        bodyClassName={bodyClassName}
        htmlClassName={htmlClassName}
        stylesheets={['/legacy-css/main.css', '/legacy-css/venezuela.css']}
      />
    </>
  );
}
