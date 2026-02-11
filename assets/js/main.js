/* ==========================================================================
   ELDORA INTERACTIVE ENGINE - YANNIS ALBERT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTION DU CURSEUR CINÉMATIQUE
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        // Animation fluide du halo suivant la souris
        cursor.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 2. LOGO YA ANIMATION (Perspective réelle)
    const logoBox = document.querySelector('.logo-box');
    const logo = document.querySelector('.logo');
    
    logoBox.addEventListener('mouseenter', () => {
        logo.style.transform = "rotateY(360deg) scale(1.15)";
    });
    
    logoBox.addEventListener('mouseleave', () => {
        logo.style.transform = "rotateY(0deg) scale(1)";
    });

    // 3. EFFET TYPEWRITER (Profil spécifique Renault/Data)
    const typewriterElement = document.getElementById("typewriter");
    const phrases = ["Cloud & Data Engineer.", "Metaverse Specialist.", "AI Solutions Architect."];
    let phraseIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < phrases[phraseIndex].length) {
            typewriterElement.textContent += phrases[phraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            // Pause avant d'effacer ou de changer (optionnel)
            // Pour l'instant on reste sur la première phrase comme demandé
        }
    }
    type();

    // 4. 3D TILT CARDS (Perspective Eldora)
    const cards = document.querySelectorAll('.tilt');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // position x dans l'élément
            const y = e.clientY - rect.top;  // position y dans l'élément
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcul de la rotation (max 10 degrés)
            const rotateX = (centerY - y) / 15;
            const rotateY = (x - centerX) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 5. INERTIE DE SCROLL (Smooth Scroll Engine)
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.075; // Facteur de fluidité (plus petit = plus lent)
    const content = document.getElementById('smooth-content');

    function updateScroll() {
        targetScroll = window.scrollY;
        currentScroll += (targetScroll - currentScroll) * ease;
        
        if (content) {
            content.style.transform = `translateY(${-currentScroll}px)`;
        }
        
        // Ajustement de la hauteur du body pour permettre le scroll
        document.body.style.height = `${content.getBoundingClientRect().height}px`;
        
        requestAnimationFrame(updateScroll);
    }

    // Activer l'inertie seulement sur les écrans larges (Desktop)
    if (window.innerWidth > 1024) {
        document.getElementById('smooth-wrapper').style.display = 'block';
        updateScroll();
    } else {
        // Mode normal pour mobile
        document.getElementById('smooth-wrapper').style.position = 'relative';
    }

    // 6. REVEAL ON SCROLL (Observer)
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
