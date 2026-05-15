import LegacyRoute from '@/components/legacy/LegacyRoute';

export const metadata = {
  title: {
    absolute: 'Destinos Gastronómicos | Comidas del Mundo',
  },
  description:
    'Explora todos los destinos gastronómicos disponibles: Venezuela, Bulgaria, Rumanía, Malí y más. Cada país con sus platos típicos, ingredientes y cultura culinaria.',
  alternates: {
    canonical: '/paises',
    languages: {
      es: '/paises',
    },
  },
  openGraph: {
    title: 'Destinos Gastronómicos | Comidas del Mundo',
    description: 'Todos los países disponibles: Venezuela, Bulgaria, Rumanía, Malí y más destinos culinarios.',
    url: '/paises',
    images: ['/og/home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destinos Gastronómicos | Comidas del Mundo',
    description: 'Explora la gastronomía de Venezuela, Bulgaria, Rumanía, Malí y más.',
    images: ['/og/home.png'],
  },
};

const paisesHtml = `
  <nav class="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_10px_30px_rgba(151,68,0,0.05)] flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 z-50 top-0 sticky transition-all duration-300">
    <div class="flex items-center gap-4">
      <span class="material-symbols-outlined text-primary text-2xl" aria-hidden="true">restaurant</span>
      <a href="/" class="font-boarding-pass-title text-boarding-pass-title uppercase tracking-widest text-primary hover:scale-105 transition-transform duration-300">
        Comidas del Mundo
      </a>
    </div>
    <div class="hidden md:flex items-center gap-8">
      <a href="/" class="text-on-surface-variant hover:text-primary transition-colors font-headline-lg-mobile text-sm flex items-center gap-1">
        <span class="material-symbols-outlined text-sm" aria-hidden="true">flight</span> Inicio
      </a>
      <a href="/paises" class="text-primary border-b-2 border-primary pb-1 font-headline-lg-mobile text-sm flex items-center gap-1">
        <span class="material-symbols-outlined text-sm" aria-hidden="true">public</span> Destinos
      </a>
    </div>
  </nav>

  <main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 relative z-10 flex flex-col items-center">

    <section class="w-full max-w-4xl text-center py-16 px-8 mb-12 flex flex-col items-center">
      <div class="flex items-center gap-3 mb-6 bg-surface/80 px-5 py-2.5 rounded-full border border-primary/20 backdrop-blur-sm shadow-sm">
        <span class="material-symbols-outlined text-primary text-2xl" aria-hidden="true">public</span>
        <span class="font-boarding-pass-title text-primary tracking-[0.2em] text-xs font-bold uppercase">
          Todos los Destinos
        </span>
      </div>
      <h1 class="font-display-lg text-display-lg text-on-background mb-4 uppercase">
        PAÍSES DEL <span class="text-primary">MUNDO</span>
      </h1>
      <p class="font-body-md text-body-md text-on-surface-variant max-w-xl text-lg">
        Selecciona un destino gastronómico y comienza tu viaje culinario.
      </p>
    </section>

    <section class="w-full max-w-5xl grid md:grid-cols-4 gap-6 mb-20" aria-label="Lista de países">

      <a href="/paises/venezuela" class="group glass-card rounded-2xl overflow-hidden no-underline block hover:-translate-y-1 transition-all duration-300">
        <div class="h-48 relative overflow-hidden">
          <img src="/assets/images/venezuela/arepas-venezolanas.webp" alt="Gastronomía venezolana" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-4xl">🇻🇪</div>
        </div>
        <div class="p-6">
          <div class="font-boarding-pass-title tracking-[0.2em] uppercase text-xl font-bold text-on-background mb-2">VENEZUELA</div>
          <div class="text-on-surface-variant text-sm font-body-md mb-4">Arepas, Pabellón Criollo, Cachapas y más platos tradicionales.</div>
          <span class="font-label-caps text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 text-xs">TRADICIONAL</span>
        </div>
      </a>

      <a href="/paises/bulgaria" class="group glass-card rounded-2xl overflow-hidden no-underline block hover:-translate-y-1 transition-all duration-300">
        <div class="h-48 relative overflow-hidden">
          <img src="/assets/images/bulgaria/hero-bulgarian-feast.png" alt="Gastronomía búlgara" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-4xl">🇧🇬</div>
        </div>
        <div class="p-6">
          <div class="font-boarding-pass-title tracking-[0.2em] uppercase text-xl font-bold text-on-background mb-2">BULGARIA</div>
          <div class="text-on-surface-variant text-sm font-body-md mb-4">Banitsa, tarator, skara, yogur, rosas y sabores de los Balcanes.</div>
          <span class="font-label-caps text-outline tracking-widest bg-surface-variant/80 px-3 py-1 rounded-full border border-outline/30 text-xs">DESCUBRIMIENTO</span>
        </div>
      </a>

      <a href="/paises/rumania" class="group glass-card rounded-2xl overflow-hidden no-underline block hover:-translate-y-1 transition-all duration-300">
        <div class="h-48 relative overflow-hidden">
          <img src="/assets/images/rumania/sarmale.jpg" alt="Gastronomía rumana" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-4xl">🇷🇴</div>
        </div>
        <div class="p-6">
          <div class="font-boarding-pass-title tracking-[0.2em] uppercase text-xl font-bold text-on-background mb-2">RUMANÍA</div>
          <div class="text-on-surface-variant text-sm font-body-md mb-4">Sarmale, Mămăligă, Papanași y las tradiciones del caldero rumano.</div>
          <span class="font-label-caps text-outline tracking-widest bg-surface-variant/80 px-3 py-1 rounded-full border border-outline/30 text-xs">HISTÓRICO</span>
        </div>
      </a>

      <a href="/paises/mali" class="group glass-card rounded-2xl overflow-hidden no-underline block hover:-translate-y-1 transition-all duration-300">
        <div class="h-48 relative overflow-hidden">
          <img src="/assets/images/mali/fonio-mafe.webp" alt="Gastronomía maliense" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-4xl">🇲🇱</div>
        </div>
        <div class="p-6">
          <div class="font-boarding-pass-title tracking-[0.2em] uppercase text-xl font-bold text-on-background mb-2">MALÍ</div>
          <div class="text-on-surface-variant text-sm font-body-md mb-4">Fonio, Fakoye, Zamei y los sabores auténticos de Bamako a Tombuctú.</div>
          <span class="font-label-caps text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 text-xs">AUTÉNTICO</span>
        </div>
      </a>

    </section>
  </main>

  <footer class="w-full bg-surface-container-high flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter gap-4 relative z-10 border-t border-outline-variant/20">
    <div>
      <span class="font-boarding-pass-title text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
        <span class="material-symbols-outlined text-sm" aria-hidden="true">restaurant_menu</span>
        Comidas del Mundo
      </span>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1 text-sm">© 2026 Comidas del Mundo. Un viaje gastronómico internacional.</p>
    </div>
    <nav aria-label="Footer links" class="flex gap-6">
      <a href="/" class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-sm">Inicio</a>
      <a href="/paises" class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-sm">Destinos</a>
    </nav>
  </footer>
`;

export default function PaisesPage() {
  return (
    <LegacyRoute
      variant="home"
      html={paisesHtml}
      bodyClassName="bg-background text-on-background font-body-md min-h-screen relative overflow-x-hidden paper-texture"
      htmlClassName="light"
      stylesheets={['/legacy-css/main.css']}
    />
  );
}
