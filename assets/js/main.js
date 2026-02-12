/* ==========================================================================
   ELDORA INTERACTIVE ENGINE - YANNIS ALBERT 2026
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================================
    // 1. CURSEUR LUMINEUX SUIVEUR
    // =======================================================================
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animation fluide du curseur avec inertie
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        if (cursor) {
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
        }
        
        requestAnimationFrame(animateCursor);
    }
    
    // On n'active le curseur que sur les écrans larges pour éviter les lags mobiles
    if (window.innerWidth > 1024 && cursor) {
        animateCursor();
    }
    
    // =======================================================================
    // 2. EFFET TYPEWRITER AMÉLIORÉ
    // =======================================================================
    const typewriterElement = document.getElementById("typewriter");
    const words = ["Data Analytics", "Cloud Computing", "Industrial AI", "Digital Twins"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Pause à la fin du mot
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    if (typewriterElement) {
        setTimeout(typeEffect, 1000);
    }
    
    // =======================================================================
    // 3. EFFET TILT 3D SUR LES CARTES
    // =======================================================================
    const tiltElements = document.querySelectorAll('.tilt');
    
    tiltElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'transform 0.1s ease-out';
        });
        
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            element.style.transform = `
                perspective(1000px) 
                rotateX(${-rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale3d(1.02, 1.02, 1.02)
            `;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            element.style.transform = `
                perspective(1000px) 
                rotateX(0deg) 
                rotateY(0deg) 
                scale3d(1, 1, 1)
            `;
        });
    });
    
    // =======================================================================
    // 4. INTERSECTION OBSERVER POUR LES RÉVÉLATIONS & SKILLS
    // =======================================================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Animation spécifique des barres de compétences au scroll
                if (entry.target.classList.contains('skill-category')) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width') || bar.style.width;
                        // On force un reset puis on anime
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });
    
    // =======================================================================
    // 5. SMOOTH SCROLL POUR LA NAVIGATION
    // =======================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =======================================================================
    // 6. HEADER DYNAMIQUE AU SCROLL
    // =======================================================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // =======================================================================
    // 7. MENU MOBILE TOGGLE
    // =======================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            if (menuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
        
        // Fermer le menu au clic sur un lien
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(s => s.style.transform = '');
                spans[1].style.opacity = '1';
            });
        });
    }
    
    // =======================================================================
    // 8. ANIMATION DES STATISTIQUES
    // =======================================================================
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimatedStats) {
                hasAnimatedStats = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (stats.length > 0) {
        statsObserver.observe(stats[0].closest('section'));
    }
    
    function animateStats() {
        stats.forEach(stat => {
            const rawValue = stat.textContent;
            const target = parseInt(rawValue.replace(/\D/g, '')); // On extrait le nombre
            const suffix = rawValue.replace(/[0-9]/g, ''); // On récupère le + ou %
            const duration = 2000;
            const frameRate = 16;
            const totalFrames = duration / frameRate;
            const increment = target / totalFrames;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, frameRate);
        });
    }
    
    // =======================================================================
    // 9. CONSOLE EASTER EGG
    // =======================================================================
    console.log('%c👨‍💻 Yannis Albert - Portfolio Engine Loaded', 'color: #2A7BFF; font-size: 16px; font-weight: bold;');
    console.log('%cContact : yannis.albert78@gmail.com', 'color: #00D4FF;');
    
});
