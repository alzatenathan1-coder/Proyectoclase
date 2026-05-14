import './globals.css';
import { siteName, siteUrl } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Viajes gastronómicos internacionales`,
    template: `%s | ${siteName}`,
  },
  description:
    'Rutas gastronómicas internacionales con platos tradicionales, cultura culinaria y destinos destacados.',
  keywords: [
    'gastronomia internacional',
    'comidas del mundo',
    'recetas tradicionales',
    'cultura culinaria',
    'Venezuela',
    'Rumania',
    'Mali',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: 'gastronomia',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName,
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport = {
  themeColor: '#b8924b',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Space+Grotesk:wght@300;500;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Caveat:wght@400;500;600;700&family=Uncial+Antiqua&family=Outfit:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
