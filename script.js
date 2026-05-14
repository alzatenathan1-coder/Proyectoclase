document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(item => {
        observer.observe(item);
    });

    const backToTop = document.getElementById('backToTop');
    
    // Parallax and Back to Top logic
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scroll = window.pageYOffset;
        hero.style.backgroundPositionY = (scroll * 0.5) + 'px';

        // Back to top visibility
        if (scroll > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for any links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
