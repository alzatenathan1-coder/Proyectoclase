/* ================================================
   COMIDAS DEL MUNDO — Main JS
   ================================================ */

/* ── Floating Emoji Particles ── */
const EMOJIS = ['✈️','🌍','🗺️','🧭','🍽️','🍴','🌿','⭐','🏔️','🌊','🧆','🥘'];

function spawnParticle() {
    const container = document.getElementById('floating-particles');
    if (!container) return;

    const el       = document.createElement('span');
    el.className   = 'particle';
    const size     = Math.random() * 18 + 10;
    const duration = Math.random() * 14 + 9;
    const opacity  = Math.random() * 0.12 + 0.04;
    const xPos     = Math.random() * 96;
    const drift    = (Math.random() - 0.5) * 80;

    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    el.style.cssText = `
        left: ${xPos}vw;
        font-size: ${size}px;
        animation-duration: ${duration}s;
        --p-opacity: ${opacity};
        transform: translateX(${drift}px);
    `;

    container.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 500);
}

// Initial burst + recurring
for (let i = 0; i < 6; i++) setTimeout(spawnParticle, i * 400);
setInterval(spawnParticle, 1800);


/* ── Scroll-triggered reveal ── */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal-ready').forEach(el => revealObserver.observe(el));


/* ── Hero parallax on scroll ── */
const hero = document.querySelector('.hero-bg');
if (hero) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        hero.style.backgroundPositionY = `calc(center + ${y * 0.25}px)`;
    }, { passive: true });
}


/* ── Sticky nav shadow on scroll ── */
const nav = document.querySelector('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('shadow-lg', window.scrollY > 10);
    }, { passive: true });
}


/* ── "COMENZAR VIAJE" smooth scroll to list ── */
const startBtn = document.getElementById('btn-start');
const listSection = document.getElementById('destinations');
if (startBtn && listSection) {
    startBtn.addEventListener('click', () => {
        listSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}
