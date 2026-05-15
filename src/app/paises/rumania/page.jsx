import LegacyRoute from '@/components/legacy/LegacyRoute';
import { bodyClassName, html, htmlClassName } from '@/content/legacy/rumania';

export const metadata = {
  title: {
    absolute: 'Crónicas del Caldero de Cobre · Rumanía | Comidas del Mundo',
  },
  description:
    'Crónicas del Caldero de Cobre explora la gastronomía rumana con sarmale, mămăligă, papanași, bebidas tradicionales y regiones culinarias.',
  alternates: {
    canonical: '/paises/rumania',
    languages: {
      es: '/paises/rumania',
    },
  },
  openGraph: {
    title: 'Crónicas del Caldero de Cobre | Gastronomía de Rumanía',
    description: 'Sarmale, mămăligă, papanași y tradiciones culinarias rumanas en una experiencia visual.',
    url: '/paises/rumania',
    images: ['/og/rumania.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crónicas del Caldero de Cobre | Gastronomía de Rumanía',
    description: 'Una ruta por platos, regiones y tradiciones de la cocina rumana.',
    images: ['/og/rumania.jpg'],
  },
};

export default function RumaniaPage() {
  return (
    <LegacyRoute
      variant="rumania"
      html={html}
      bodyClassName={bodyClassName}
      htmlClassName={htmlClassName}
      stylesheets={['/legacy-css/rumania.css']}
    />
  );
}
