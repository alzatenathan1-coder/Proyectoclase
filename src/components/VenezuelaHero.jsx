'use client';

import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

export default function VenezuelaHero() {
  const playerRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(0);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      loop: 0, // Manual looping
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      start: 1,
      end: 13,
      playsinline: 1,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.playVideo();
    setVideoOpacity(1); // Fade in initially
  };

  const onStateChange = (event) => {
    // If it ends, restart
    if (event.data === YouTube.PlayerState.ENDED) {
      setVideoOpacity(0);
      setTimeout(() => {
        playerRef.current.seekTo(1, true);
        playerRef.current.playVideo();
        setVideoOpacity(1);
      }, 100);
    }
  };

  useEffect(() => {
    let animationFrameId;

    const checkTime = () => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const currentTime = playerRef.current.getCurrentTime();
        
        // Start fading out slightly before the end (13s)
        if (currentTime >= 12.5 && videoOpacity === 1) {
          setVideoOpacity(0);
        }
      }
      animationFrameId = requestAnimationFrame(checkTime);
    };

    animationFrameId = requestAnimationFrame(checkTime);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [videoOpacity]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-inter bg-white selection:bg-black selection:text-white">
      {/* Background Video Layer */}
      <div 
        className="absolute w-full transition-opacity duration-500 ease-in-out pointer-events-none"
        style={{ top: '0', bottom: '0', opacity: videoOpacity, zIndex: 0 }}
      >
        {/* We scale the video up to cover the container to avoid black borders */}
        <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2">
          <YouTube 
            videoId="xEtc8o6RGjY" 
            opts={opts} 
            onReady={onReady} 
            onStateChange={onStateChange}
            className="w-full h-full pointer-events-none"
            iframeClassName="w-full h-full pointer-events-none"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" style={{ zIndex: 1 }}></div>
      <div className="absolute inset-0 bg-white/20 pointer-events-none" style={{ zIndex: 1 }}></div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-[#000000] text-3xl tracking-tight font-instrument">
          Aethera<sup>®</sup>
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="text-[#000000] transition-colors hover:text-black">Home</a>
          <a href="#" className="text-[#6F6F6F] transition-colors hover:text-black">Studio</a>
          <a href="#" className="text-[#6F6F6F] transition-colors hover:text-black">About</a>
          <a href="#" className="text-[#6F6F6F] transition-colors hover:text-black">Journal</a>
          <a href="#" className="text-[#6F6F6F] transition-colors hover:text-black">Reach Us</a>
        </div>
        <button className="hidden md:block rounded-full px-6 py-2.5 text-sm bg-[#000000] text-white hover:scale-105 transition-transform duration-300">
          Begin Journey
        </button>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal font-instrument leading-[0.95] tracking-[-2.46px] text-[#000000] animate-fade-rise opacity-0">
          Beyond <span className="text-[#6F6F6F] italic">silence,</span> we build <span className="text-[#6F6F6F] italic">the eternal.</span>
        </h1>
        
        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay opacity-0">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        <button className="rounded-full px-14 py-5 text-base mt-12 bg-[#000000] text-[#FFFFFF] hover:scale-105 transition-transform duration-300 animate-fade-rise-delay-2 opacity-0 shadow-xl">
          Begin Journey
        </button>
      </div>
    </div>
  );
}
