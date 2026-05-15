'use client';

import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Maíz', href: '#maiz' },
  { label: 'Platos', href: '#platos' },
  { label: 'Regiones', href: '#regiones' },
  { label: 'Cacao', href: '#cacao' },
  { label: 'Dulcería', href: '#dulces' },
];

export default function VenezuelaCinematicHero() {
  const videoRef = useRef(null);
  const frameRef = useRef(0);
  const restartRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let disposed = false;
    const fadeDuration = 0.5;

    const updateOpacity = () => {
      if (disposed) return;

      const { currentTime } = video;
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      let nextOpacity = 1;

      if (currentTime < fadeDuration) {
        nextOpacity = Math.max(0, Math.min(1, currentTime / fadeDuration));
      }

      if (duration > fadeDuration && currentTime > duration - fadeDuration) {
        const fadeOutOpacity = Math.max(0, Math.min(1, (duration - currentTime) / fadeDuration));
        nextOpacity = Math.min(nextOpacity, fadeOutOpacity);
      }

      video.style.opacity = String(nextOpacity);
      frameRef.current = window.requestAnimationFrame(updateOpacity);
    };

    const playVideo = () => {
      void video.play().catch(() => {
        video.style.opacity = '1';
      });
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      window.clearTimeout(restartRef.current);
      restartRef.current = window.setTimeout(() => {
        if (disposed) return;
        video.currentTime = 0;
        playVideo();
      }, 100);
    };

    video.style.opacity = '0';
    video.addEventListener('ended', handleEnded);
    frameRef.current = window.requestAnimationFrame(updateOpacity);
    playVideo();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameRef.current);
      window.clearTimeout(restartRef.current);
      video.removeEventListener('ended', handleEnded);
      video.pause();
    };
  }, []);

  return (
    <section className="font-inter relative min-h-screen w-full overflow-hidden bg-white text-black">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 top-[300px] overflow-hidden">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={VIDEO_URL}
            muted
            playsInline
            autoPlay
            preload="auto"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <nav className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <a
            href="/"
            className="font-instrument text-2xl font-normal tracking-tight text-black transition-opacity hover:opacity-70 sm:text-3xl"
            aria-label="Volver al inicio"
          >
            Venezuela
            <sup className="ml-0.5 align-super text-sm">®</sup>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-black ${
                  index === 0 ? 'text-black' : 'text-[#6F6F6F]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#maiz"
            className="shrink-0 rounded-full bg-black px-4 py-2 text-xs text-white transition-transform duration-300 hover:scale-[1.03] sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Iniciar viaje
          </a>
        </div>
      </nav>

      <div
        className="relative z-10 flex min-h-[calc(100vh-96px)] flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <h1
          className="font-instrument animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] text-black sm:text-7xl md:text-8xl"
          style={{ letterSpacing: 0 }}
        >
          Geografía del{' '}
          <span className="italic text-[#6F6F6F]">sabor,</span>
          <br />
          un mapa para comerte{' '}
          <span className="italic text-[#6F6F6F]">Venezuela.</span>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          Del aroma del cacao de Chuao al crujir de la arepa costera. Una ruta por maíz,
          queso, fogones y memorias que cuenta el mestizaje venezolano.
        </p>

        <a
          href="#maiz"
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-black px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03]"
        >
          Iniciar viaje
        </a>
      </div>
    </section>
  );
}
