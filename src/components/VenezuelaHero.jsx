'use client';

import React, { useEffect, useRef } from 'react';

const FADE_DURATION = 0.5; // seconds
const START_TIME = 1;       // seconds
const END_TIME = 13;        // seconds

export default function VenezuelaHero() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set start time before play
    video.currentTime = START_TIME;

    const tick = () => {
      const t = video.currentTime;
      const relStart = t - START_TIME;
      const relEnd = END_TIME - t;

      let opacity = 1;

      // Fade in during first FADE_DURATION seconds
      if (relStart < FADE_DURATION) {
        opacity = relStart / FADE_DURATION;
      }
      // Fade out during last FADE_DURATION seconds
      else if (relEnd < FADE_DURATION) {
        opacity = relEnd / FADE_DURATION;
      }

      video.style.opacity = Math.max(0, Math.min(1, opacity));

      // If we've passed the end time, loop manually
      if (t >= END_TIME) {
        video.style.opacity = 0;
        setTimeout(() => {
          video.currentTime = START_TIME;
          video.play();
        }, 100);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = 0;
      setTimeout(() => {
        video.currentTime = START_TIME;
        video.play();
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener('ended', handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-black selection:text-white">

      {/* Background Video Layer */}
      <div
        className="absolute pointer-events-none"
        style={{ inset: 'auto 0 0 0', top: '0px', zIndex: 0, height: '100%' }}
      >
        <video
          ref={videoRef}
          src="/assets/videos/video-venezuela.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '120%',
            minHeight: '120%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            opacity: 0,
            transition: 'opacity 0.05s linear',
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Navigation Bar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-[#000000] text-3xl tracking-tight font-instrument">
          Venezuela<sup className="text-base">®</sup>
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="text-[#000000] transition-colors hover:text-black">Inicio</a>
          <a href="#maiz" className="text-[#6F6F6F] transition-colors hover:text-black">Maíz</a>
          <a href="#platos" className="text-[#6F6F6F] transition-colors hover:text-black">Platos</a>
          <a href="#cacao" className="text-[#6F6F6F] transition-colors hover:text-black">Cacao</a>
          <a href="#dulces" className="text-[#6F6F6F] transition-colors hover:text-black">Dulcería</a>
        </div>
        <button className="hidden md:block rounded-full px-6 py-2.5 text-sm bg-[#000000] text-white hover:scale-105 transition-transform duration-300">
          Explorar
        </button>
      </nav>

      {/* Hero Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        <h1
          className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal font-instrument animate-fade-rise opacity-0"
          style={{ lineHeight: 0.95, letterSpacing: '-2.46px', color: '#000000' }}
        >
          Cartografía del{' '}
          <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>Mestizaje,</span>{' '}
          tierra de <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>sabores eternos.</span>
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay opacity-0">
          Venezuela es una explosión de color y sabor. Una fusión audaz del espíritu indígena,
          la elegancia europea y el ritmo vibrante de África. Descubre su gastronomía.
        </p>

        <a
          href="#maiz"
          className="rounded-full px-14 py-5 text-base mt-12 bg-[#000000] text-[#FFFFFF] hover:scale-105 transition-transform duration-300 animate-fade-rise-delay-2 opacity-0 shadow-xl inline-block"
        >
          Explorar Cultura
        </a>
      </div>
    </div>
  );
}
