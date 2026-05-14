import LegacyRoute from '@/components/legacy/LegacyRoute';
import { bodyClassName, html, htmlClassName } from '@/content/legacy/mali';

export const metadata = {
  title: {
    absolute: 'Gastronomie du Mali | Fonio, Fakoye et plats traditionnels',
  },
  description:
    'Découvrez la gastronomie traditionnelle du Mali avec le fonio, le zamei, le fakoye, le djouka, le ngomi et les saveurs de Bamako à Tombouctou.',
  alternates: {
    canonical: '/mali',
    languages: {
      fr: '/mali',
    },
  },
  openGraph: {
    title: 'Gastronomie du Mali | Patrimoine culinaire authentique',
    description:
      'Un parcours par les plats maliens essentiels : fonio, zamei, fakoye, djouka, ngomi et plus encore.',
    url: '/mali',
    images: ['/og/mali.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gastronomie du Mali | Fonio, Fakoye et plats traditionnels',
    description: 'Explorez les plats traditionnels maliens et leur histoire.',
    images: ['/og/mali.webp'],
  },
};

export default function MaliPage() {
  return (
    <LegacyRoute
      variant="mali"
      html={html}
      bodyClassName={bodyClassName}
      htmlClassName={htmlClassName}
      stylesheets={['/legacy-css/mali.css']}
    />
  );
}
