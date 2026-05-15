import { initBulgariaInteractions } from './bulgaria-interactions';

const noop = () => {};

function on(target, eventName, handler, options) {
  target?.addEventListener(eventName, handler, options);
  return () => target?.removeEventListener(eventName, handler, options);
}

function initHome() {
  const cleanups = [];
  const intervals = [];
  const timeouts = [];
  const container = document.getElementById('floating-particles');
  const emojis = ['✈️', '🌍', '🗺️', '🧭', '🍽️', '🍴', '🌿', '⭐', '🏔️', '🌊', '🧆', '🥘'];

  function spawnParticle() {
    if (!container) return;

    const el = document.createElement('span');
    el.className = 'particle';
    const size = Math.random() * 18 + 10;
    const duration = Math.random() * 14 + 9;
    const opacity = Math.random() * 0.12 + 0.04;
    const xPos = Math.random() * 96;
    const drift = (Math.random() - 0.5) * 80;

    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      left: ${xPos}vw;
      font-size: ${size}px;
      animation-duration: ${duration}s;
      --p-opacity: ${opacity};
      transform: translateX(${drift}px);
    `;

    container.appendChild(el);
    const timeout = window.setTimeout(() => el.remove(), duration * 1000 + 500);
    timeouts.push(timeout);
  }

  for (let i = 0; i < 6; i += 1) {
    timeouts.push(window.setTimeout(spawnParticle, i * 400));
  }
  intervals.push(window.setInterval(spawnParticle, 1800));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  document.querySelectorAll('.reveal-ready').forEach((el) => revealObserver.observe(el));

  const hero = document.querySelector('.hero-bg');
  const updateHero = () => {
    if (hero) hero.style.backgroundPosition = `center calc(50% + ${window.scrollY * 0.25}px)`;
  };
  cleanups.push(on(window, 'scroll', updateHero, { passive: true }));

  const nav = document.querySelector('nav');
  const updateNav = () => nav?.classList.toggle('shadow-lg', window.scrollY > 10);
  cleanups.push(on(window, 'scroll', updateNav, { passive: true }));

  const startBtn = document.getElementById('btn-start');
  const listSection = document.getElementById('destinations');
  const startHandler = () => listSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  cleanups.push(on(startBtn, 'click', startHandler));

  return () => {
    cleanups.forEach((cleanup) => cleanup());
    intervals.forEach((id) => window.clearInterval(id));
    timeouts.forEach((id) => window.clearTimeout(id));
    revealObserver.disconnect();
    container?.querySelectorAll('.particle').forEach((el) => el.remove());
  };
}

function initMali() {
  const cleanups = [];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll('.food-item').forEach((item) => observer.observe(item));

  const backToTop = document.getElementById('backToTop');
  const onScroll = () => {
    const hero = document.querySelector('.hero');
    const scroll = window.pageYOffset;
    if (hero) hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    backToTop?.classList.toggle('show', scroll > 500);
  };
  cleanups.push(on(window, 'scroll', onScroll));
  cleanups.push(on(backToTop, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' })));

  const anchorCleanups = Array.from(document.querySelectorAll('a[href^="#"]')).map((anchor) =>
    on(anchor, 'click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }),
  );

  return () => {
    cleanups.concat(anchorCleanups).forEach((cleanup) => cleanup());
    observer.disconnect();
  };
}

function initVenezuela() {
  const cleanups = [];
  let lastCheese = null;

  window.showCheese = (type) => {
    const info = document.getElementById('cheese-info');
    const name = document.getElementById('cheese-name');
    const desc = document.getElementById('cheese-desc');
    if (!info || !name || !desc) return;

    if (lastCheese === type && info.style.opacity === '1') {
      info.style.opacity = '0';
      lastCheese = null;
      return;
    }

    const data = {
      mano: { name: 'Queso de Mano', desc: 'Suave, elástico y perfecto para la cachapa.' },
      telita: { name: 'Queso Telita', desc: 'Cremoso y elástico, típico de los llanos.' },
      guayanes: { name: 'Queso Guayanés', desc: 'Textura única y sabor suave del sur.' },
    };

    name.innerText = data[type].name;
    desc.innerText = data[type].desc;
    info.style.opacity = '1';
    lastCheese = type;
  };

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
    { threshold: 0.1 },
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const heroHeader = document.querySelector('.parallax');
  cleanups.push(
    on(
      window,
      'scroll',
      () => {
        if (heroHeader) {
          heroHeader.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.2}px)`;
        }
      },
      { passive: true },
    ),
  );

  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImg = lightbox?.querySelector('img');
  document.querySelectorAll('.parallax img, main img:not(.lightbox-img)').forEach((img) => {
    img.classList.add('lightbox-img');
  });

  cleanups.push(
    on(document, 'click', (event) => {
      const img = event.target.closest?.('.lightbox-img');
      if (!img || !lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Vista ampliada';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }),
  );
  cleanups.push(
    on(lightbox, 'click', () => {
      lightbox?.classList.remove('active');
      document.body.style.overflow = '';
    }),
  );
  cleanups.push(
    on(document, 'keydown', (event) => {
      if (event.key === 'Escape') {
        lightbox?.classList.remove('active');
        document.body.style.overflow = '';
      }
    }),
  );

  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const toggleMenu = (open) => {
    mobileMenu?.classList.toggle('open', open);
    mobileOverlay?.classList.toggle('open', open);
    hamburger?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  cleanups.push(on(hamburger, 'click', () => toggleMenu(!mobileMenu?.classList.contains('open'))));
  cleanups.push(on(mobileOverlay, 'click', () => toggleMenu(false)));
  mobileMenu?.querySelectorAll('a').forEach((anchor) => {
    cleanups.push(on(anchor, 'click', () => toggleMenu(false)));
  });

  const darkToggle = document.getElementById('dark-toggle');
  const saved = localStorage.getItem('dark-mode');
  if (saved === 'true') document.documentElement.classList.add('dark');
  const syncDarkIcon = () => {
    const icon = darkToggle?.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = document.documentElement.classList.contains('dark') ? 'light_mode' : 'dark_mode';
  };
  syncDarkIcon();
  cleanups.push(
    on(darkToggle, 'click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('dark-mode', document.documentElement.classList.contains('dark'));
      syncDarkIcon();
    }),
  );

  const scrollToFooter = () => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
  cleanups.push(on(document.getElementById('reservar-btn'), 'click', scrollToFooter));
  cleanups.push(
    on(document.getElementById('reservar-btn-mobile'), 'click', () => {
      toggleMenu(false);
      scrollToFooter();
    }),
  );

  return () => {
    cleanups.forEach((cleanup) => cleanup());
    observer.disconnect();
    delete window.showCheese;
    document.body.style.overflow = '';
  };
}

function initRumania() {
  const cleanups = [];
  const canvas = document.getElementById('smoke-canvas');
  const context = canvas?.getContext('2d');
  let particles = [];
  let frameId = 0;

  if (canvas && context) {
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    cleanups.push(on(window, 'resize', resize));
    resize();

    class Particle {
      constructor(initial) {
        this.reset(initial);
      }

      reset(initial) {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20 + Math.random() * 100;
        this.size = 20 + Math.random() * 80;
        this.speedY = -(0.15 + Math.random() * 0.4);
        this.speedX = (Math.random() - 0.5) * 0.12;
        this.alpha = 0.02 + Math.random() * 0.05;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.002;
        if (initial) this.y = Math.random() * canvas.height * 0.5;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.alpha *= 0.998;
        this.rotation += this.rotSpeed;
        if (this.y < -60 || this.alpha < 0.001) this.reset(false);
      }

      draw() {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        const gradient = context.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `rgba(200,168,78,${this.alpha})`);
        gradient.addColorStop(0.5, `rgba(140,115,50,${this.alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(200,168,78,0)');
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const resetParticles = () => {
      particles = [];
      const count = Math.min(35, Math.floor(window.innerWidth / 35));
      for (let i = 0; i < count; i += 1) particles.push(new Particle(true));
    };
    resetParticles();
    cleanups.push(on(window, 'resize', resetParticles));

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      frameId = window.requestAnimationFrame(animate);
    };
    animate();
  }

  const title = document.getElementById('hero-title');
  if (title) {
    let dispersed = false;
    title.querySelectorAll('.dust-text').forEach((element) => {
      const text = element.textContent;
      element.innerHTML = '';
      text.split('').forEach((character) => {
        const span = document.createElement('span');
        span.className = 'dust-char';
        span.textContent = character === ' ' ? '\u00A0' : character;
        span.style.setProperty('--dx', `${(Math.random() - 0.5) * 100}px`);
        span.style.setProperty('--dy', `${-(40 + Math.random() * 80)}px`);
        span.style.setProperty('--dr', `${(Math.random() - 0.5) * 50}deg`);
        element.appendChild(span);
      });
    });

    const allChars = title.querySelectorAll('.dust-char');
    cleanups.push(
      on(window, 'scroll', () => {
        const hero = document.getElementById('hero');
        const progress = Math.min(window.scrollY / (hero.offsetHeight * 0.5), 1);
        if (progress > 0.12 && !dispersed) {
          dispersed = true;
          allChars.forEach((char, index) => window.setTimeout(() => char.classList.add('dispersing'), index * 12));
        } else if (progress <= 0.04 && dispersed) {
          dispersed = false;
          allChars.forEach((char) => char.classList.remove('dispersing'));
        }
      }),
    );
  }

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
    { threshold: 0.08 },
  );
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach((el) => observer.observe(el));

  const regions = {
    transilvania: {
      name: 'Transilvania',
      monument: '🏰 Castillo de Bran',
      dish: '🍲 Gulyás transilvano',
      desc: 'Tierras altas bañadas por leyendas y bosques milenarios.',
      dot: '#c8a84e',
    },
    moldavia: {
      name: 'Moldavia',
      monument: '⛪ Monasterios Pintados',
      dish: '🥟 Plăcinte (empanadas divinas)',
      desc: 'Donde la fe ortodoxa y la cocina se encuentran.',
      dot: '#a83232',
    },
    muntenia: {
      name: 'Muntenia',
      monument: '🎭 El Ateneo Rumano',
      dish: '🔥 Mititei (la esencia de la parrilla)',
      desc: 'El corazón cultural de Rumanía.',
      dot: '#c8a84e',
    },
    dobrogea: {
      name: 'Dobrogea',
      monument: '🌊 El Delta del Danubio',
      dish: '🐟 Saramură de pește (el alma del río)',
      desc: 'Donde el Danubio se funde con el Mar Negro.',
      dot: '#a83232',
    },
  };

  const tooltip = document.getElementById('map-tooltip');
  const regionName = document.getElementById('region-name');
  const regionMonument = document.getElementById('region-monument');
  const regionDish = document.getElementById('region-dish');
  const regionDesc = document.getElementById('region-desc');
  const regionDot = document.getElementById('region-dot');
  const regionPaths = document.querySelectorAll('.map-region');
  const pills = document.querySelectorAll('.region-pill');

  const showRegion = (id) => {
    const data = regions[id];
    if (!data) return;
    regionName.textContent = data.name;
    regionMonument.textContent = data.monument;
    regionDish.textContent = data.dish;
    regionDesc.textContent = data.desc;
    tooltip.classList.add('active');
    regionDot.style.background = data.dot;
    regionPaths.forEach((path) => path.classList.toggle('map-region-dim', path.dataset.region !== id));
    pills.forEach((pill) => {
      const isActive = pill.dataset.region === id;
      pill.classList.toggle('bg-gold', isActive);
      pill.classList.toggle('text-wood-dark', isActive);
    });
  };

  regionPaths.forEach((path) => {
    cleanups.push(on(path, 'mouseenter', () => showRegion(path.dataset.region)));
    cleanups.push(on(path, 'click', () => showRegion(path.dataset.region)));
  });
  pills.forEach((pill) => {
    cleanups.push(on(pill, 'mouseenter', () => showRegion(pill.dataset.region)));
    cleanups.push(on(pill, 'click', () => showRegion(pill.dataset.region)));
  });
  showRegion('transilvania');

  const mapContainer = document.getElementById('map-container');
  cleanups.push(
    on(mapContainer, 'mouseleave', () => {
      regionPaths.forEach((path) => path.classList.remove('map-region-dim'));
      showRegion('transilvania');
    }),
  );

  const navbar = document.getElementById('navbar');
  cleanups.push(on(window, 'scroll', () => navbar?.classList.toggle('scrolled', window.scrollY > 80)));

  return () => {
    cleanups.forEach((cleanup) => cleanup());
    observer.disconnect();
    if (frameId) window.cancelAnimationFrame(frameId);
  };
}

export function initLegacyInteractions(variant) {
  if (variant === 'home') return initHome();
  if (variant === 'mali') return initMali();
  if (variant === 'venezuela') return initVenezuela();
  if (variant === 'rumania') return initRumania();
  if (variant === 'bulgaria') return initBulgariaInteractions();
  return noop;
}
