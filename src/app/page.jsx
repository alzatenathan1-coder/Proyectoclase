import LegacyRoute from '@/components/legacy/LegacyRoute';
import { GooeyDemo } from '@/components/ui/gooey-demo';
import { bodyClassName, html, htmlClassName } from '@/content/legacy/home';

export const metadata = {
  title: {
    absolute: 'Comidas del Mundo | Viajes gastronómicos internacionales',
  },
  description:
    'Comidas del Mundo reúne rutas gastronómicas de Venezuela, Rumanía, Malí y otros destinos para descubrir platos tradicionales, ingredientes y culturas culinarias.',
  alternates: {
    canonical: '/',
    languages: {
      es: '/',
    },
  },
  openGraph: {
    title: 'Comidas del Mundo | Viajes gastronómicos internacionales',
    description:
      'Explora destinos culinarios, platos tradicionales y sabores auténticos de distintas culturas del mundo.',
    url: '/',
    images: ['/og/home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comidas del Mundo | Viajes gastronómicos internacionales',
    description: 'Una experiencia web para viajar por el mundo a través de su gastronomía tradicional.',
    images: ['/og/home.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <GooeyDemo />
      <LegacyRoute
        variant="home"
        html={html}
        bodyClassName={bodyClassName}
        htmlClassName={htmlClassName}
        stylesheets={['/legacy-css/main.css']}
      />
    </>
  );
}
