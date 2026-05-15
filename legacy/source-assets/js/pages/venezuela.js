// Cheese Interactivity
let lastCheese = null;
function showCheese(type) {
    const info = document.getElementById('cheese-info');
    const name = document.getElementById('cheese-name');
    const desc = document.getElementById('cheese-desc');

    if (lastCheese === type && info.style.opacity === '1') {
        info.style.opacity = '0';
        lastCheese = null;
        return;
    }

    const data = {
        mano: { name: "Queso de Mano", desc: "Suave, elástico y perfecto para la cachapa." },
        telita: { name: "Queso Telita", desc: "Cremoso y elástico, típico de los llanos." },
        guayanes: { name: "Queso Guayanés", desc: "Textura única y sabor suave del sur." }
    };

    name.innerText = data[type].name;
    desc.innerText = data[type].desc;
    info.style.opacity = '1';
    lastCheese = type;
}

// Reveal Script
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero parallax on scroll (iOS-compatible)
const heroHeader = document.querySelector('.parallax');
if (heroHeader) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        heroHeader.style.backgroundPositionY = `calc(50% + ${y * 0.2}px)`;
    }, { passive: true });
}

// Lightbox
const lightbox = document.getElementById('lightbox-overlay');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.parallax img, main img:not(.lightbox-img)').forEach(img => {
    img.classList.add('lightbox-img');
});

document.addEventListener('click', (e) => {
    const img = e.target.closest('.lightbox-img');
    if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Vista ampliada';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function toggleMenu(open) {
    mobileMenu.classList.toggle('open', open);
    mobileOverlay.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('open')));
mobileOverlay.addEventListener('click', () => toggleMenu(false));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// Dark mode
const darkToggle = document.getElementById('dark-toggle');
const html = document.documentElement;
const saved = localStorage.getItem('dark-mode');
if (saved === 'true') html.classList.add('dark');

darkToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('dark-mode', html.classList.contains('dark'));
    darkToggle.querySelector('.material-symbols-outlined').textContent =
        html.classList.contains('dark') ? 'light_mode' : 'dark_mode';
});
// Sync icon on load
if (html.classList.contains('dark')) {
    darkToggle.querySelector('.material-symbols-outlined').textContent = 'light_mode';
}

// Reservar Mesa - smooth scroll to footer
function scrollToFooter() {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('reservar-btn').addEventListener('click', scrollToFooter);
document.getElementById('reservar-btn-mobile').addEventListener('click', () => {
    toggleMenu(false);
    scrollToFooter();
});
