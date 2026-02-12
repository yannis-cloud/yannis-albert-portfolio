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
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    if (window.innerWidth > 1024) {
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
            typingSpeed = 2000;
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
    // 4. INTERSECTION OBSERVER POUR LES RÉVÉLATIONS
    // =======================================================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Animation des barres de compétences
                if (entry.target.classList.contains('skill-category')) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
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
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
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
        
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            });
        });
    }
    
    // =======================================================================
    // 8. ANIMATION DES STATISTIQUES
    // =======================================================================
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (stats.length > 0) {
        statsObserver.observe(stats[0].parentElement.parentElement);
    }
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '') + 
                                      (stat.textContent.includes('%') ? '%' : '');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '') +
                                      (stat.textContent.includes('%') ? '%' : '');
                }
            }, 16);
        });
    }
    
    // =======================================================================
    // 9. CONSOLE EASTER EGG
    // =======================================================================
    console.log('%c👨‍💻 Yannis Albert - Portfolio', 'color: #2A7BFF; font-size: 20px; font-weight: bold;');
    console.log('%cIntéressé par mon code ? Contactez-moi ! 📧 yannis.albert78@gmail.com', 'color: #00D4FF; font-size: 14px;');
    
});
