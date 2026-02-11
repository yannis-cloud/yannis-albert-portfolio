document.addEventListener('DOMContentLoaded', () => {

    // 1. DÉFILEMENT FLUIDE (SMOOTH SCROLL)
    // Permet de naviguer entre les sections via le menu sans saut brusque
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Espace pour ne pas coller le titre au bord
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. EFFET TYPEWRITER (MACHINE À ÉCRIRE)
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
    // On lance l'effet au chargement
    if (typewriterElement) type();

    // 3. 3D TILT EFFECT (CARTES & PHOTO)
    // Ajoute une inclinaison quand la souris passe sur les éléments avec la classe .tilt
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 4. REVEAL ON SCROLL (APPARITION AU DÉFILEMENT)
    // Fait apparaître les éléments avec la classe .reveal progressivement
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 5. CURSOR GLOW (HALO QUI SUIT LA SOURIS)
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
});
