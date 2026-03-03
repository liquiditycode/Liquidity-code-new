// 1. Inisialisasi Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
        move: { enable: true, speed: 1.2 }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } }
    }
});

// 2. Animasi Muncul (Reveal) saat Loading
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 200 * index); // Efek muncul bergantian (staggered)
    });
});

// 3. Efek Click Feedback
const buttons = document.querySelectorAll('.glass-btn');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => btn.style.transform = "scale(0.95)");
    btn.addEventListener('mouseup', () => btn.style.transform = "scale(1.05)");
});