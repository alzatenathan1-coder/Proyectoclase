import BulgariaPremiumPage from '@/components/bulgaria/BulgariaPremiumPage';

export const metadata = {
  title: {
    absolute: 'Sabor de Bulgaria | Gastronomia bulgara elevada al arte',
  },
  description:
    'Experiencia premium de gastronomia bulgara tradicional y moderna: fuego, montana, vino Mavrud, banitsa, shopska salata, kavarma, postres y mapa gastronomico de Bulgaria.',
  keywords: [
    'gastronomia bulgara',
    'cocina bulgara tradicional',
    'cocina bulgara moderna',
    'platos bulgaros',
    'vino Mavrud',
    'parrillada bulgara',
    'banitsa',
    'shopska salata',
    'kavarma',
    'tarta Garash',
    'baklava bulgara',
    'mapa gastronomico de Bulgaria',
  ],
  alternates: {
    canonical: '/paises/bulgaria',
    languages: {
      es: '/paises/bulgaria',
    },
  },
  openGraph: {
    title: 'Sabor de Bulgaria | Gastronomia bulgara elevada al arte',
    description:
      'Una experiencia entre tradicion, fuego, montana, vino Mavrud y cocina bulgara contemporanea.',
    url: '/paises/bulgaria',
    images: ['/assets/images/bulgaria/hero-bulgarian-feast.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabor de Bulgaria',
    description: 'Cocina bulgara premium, tradicional y moderna, con vino Mavrud y mapa gastronomico.',
    images: ['/assets/images/bulgaria/hero-bulgarian-feast.png'],
  },
};

export default function BulgariaPage() {
  return <BulgariaPremiumPage />;
}
