import LegacyRoute from '@/components/legacy/LegacyRoute';
import { bodyClassName, html, htmlClassName } from '@/content/legacy/bulgaria';

export const metadata = {
  title: {
    absolute: 'Bulgaria: Sabores del Imperio | Comidas del Mundo',
  },
  description:
    'Bulgaria: una experiencia gastronómica premium por su historia, regiones, parrilla, postres y folklore.',
  alternates: {
    canonical: '/paises/bulgaria',
    languages: {
      es: '/paises/bulgaria',
    },
  },
  openGraph: {
    title: 'Bulgaria: Sabores del Imperio | Comidas del Mundo',
    description: 'Banitsa, sirene, skara, yogur, rosas y memoria balcánica en una experiencia inmersiva.',
    url: '/paises/bulgaria',
    images: ['/assets/images/bulgaria/hero-bulgarian-feast.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulgaria: Sabores del Imperio',
    description: 'Un viaje por la cocina tradicional y moderna de Bulgaria.',
    images: ['/assets/images/bulgaria/hero-bulgarian-feast.png'],
  },
};

export default function BulgariaPage() {
  return (
    <LegacyRoute
      variant="bulgaria"
      html={html}
      bodyClassName={bodyClassName}
      htmlClassName={htmlClassName}
      stylesheets={['/legacy-css/bulgaria.css']}
    />
  );
}
