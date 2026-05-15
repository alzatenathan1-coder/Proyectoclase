'use client';

import { GooeyFilter } from '@/components/ui/gooey-filter';
import { PixelTrail } from '@/components/ui/pixel-trail';
import { useScreenSize } from '@/hooks/use-screen-size';

function GooeyDemo() {
  const screenSize = useScreenSize();

  return (
    <section className="relative isolate flex min-h-[560px] w-full flex-col items-center justify-center overflow-hidden bg-black px-5 py-12 text-center text-white sm:min-h-[640px] md:min-h-[72vh]">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80"
        alt="Mesa con platos de comida internacional"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.72))]" />

      <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />

      <div
        className="absolute inset-0 z-10"
        style={{ filter: 'url(#gooey-filter-pixel-trail)' }}
        aria-hidden="true"
      >
        <PixelTrail
          pixelSize={screenSize.lessThan('md') ? 24 : 32}
          fadeDuration={0}
          delay={500}
          pixelClassName="bg-white"
        />
      </div>

      <div className="relative z-20 flex w-full max-w-6xl flex-col items-center gap-8">
        <div className="flex w-full items-center justify-between gap-4 text-left">
          <a
            href="/"
            className="font-boarding-pass-title text-xs uppercase tracking-widest text-white no-underline"
          >
            Comidas del Mundo
          </a>
          <a
            href="/paises"
            className="rounded-full border border-white/40 bg-white/10 px-4 py-2 font-label-caps text-xs uppercase tracking-widest text-white no-underline backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            Destinos
          </a>
        </div>

        <div className="flex max-w-4xl flex-col items-center gap-6 pt-14 sm:pt-20">
          <p className="font-label-caps text-xs uppercase tracking-widest text-white/80">
            Atlas gastronómico internacional
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Comidas del Mundo
          </h1>
          <p className="max-w-2xl font-body text-base leading-7 text-white/85 sm:text-lg">
            Sabores, rutas e historias para viajar por Venezuela, Rumanía,
            Malí y otros destinos desde una mesa bien servida.
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="/paises"
              className="rounded-full bg-white px-6 py-3 font-label-caps text-xs uppercase tracking-widest text-black no-underline transition hover:bg-secondary-container"
            >
              Comenzar viaje
            </a>
            <a
              href="#destinations"
              className="rounded-full border border-white/45 px-6 py-3 font-label-caps text-xs uppercase tracking-widest text-white no-underline backdrop-blur-md transition hover:bg-white/15"
            >
              Ver salidas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GooeyDemo };
