document.addEventListener('DOMContentLoaded', () => {
    // 1. Défilement fluide pour le menu
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // On calcule la position en tenant compte du header fixe
            const offset = 80;
            const targetPosition = targetSection.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // 2. Typewriter (Maintien de ton script actuel)
    const typewriterElement = document.getElementById("typewriter");
    const text = "Data, Cloud & Industrial AI.";
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    // 3. Reveal on Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
