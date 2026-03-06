/**
 * FATEC Portfolio - Interactive Logic
 * Victor Theodoro
 */

document.addEventListener('DOMContentLoaded', () => {
    // Reveal items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Smooth scroll reveal for hero text
    const revealText = document.querySelector('.reveal-text');
    if (revealText) {
        revealText.style.opacity = '0';
        revealText.style.transform = 'translateY(20px)';
        revealText.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            revealText.style.opacity = '1';
            revealText.style.transform = 'translateY(0)';
        }, 100);
    }

    // Dynamic background effect based on mouse movement (subtle)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const overlay = document.querySelector('.glass-overlay');
        if (overlay) {
            overlay.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(59, 130, 246, 0.08), transparent 40%)`;
        }
    });

    // Activity links hover micro-interaction
    const activities = document.querySelectorAll('.activity-link');
    activities.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(4px)';
                icon.style.transition = 'transform 0.2s ease';
            }
        });

        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });
});
