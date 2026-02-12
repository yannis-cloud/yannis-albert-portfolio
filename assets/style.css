/* ==========================================================================
   ELDORA DESIGN SYSTEM - YANNIS ALBERT 2026
   ========================================================================== */

:root {
    --bg: #03050a;
    --card: rgba(12, 17, 27, 0.7);
    --accent: #2A7BFF;
    --accent2: #00D4FF;
    --text: #e6edf3;
    --text-muted: #8892b0;
    --border: rgba(255, 255, 255, 0.08);
    --shadow: rgba(0, 0, 0, 0.3);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: var(--text);
    background: var(--bg);
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

/* ==========================================================================
   CINEMATIC EFFECTS
   ========================================================================== */

.noise {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: url('https://grainy-gradients.vercel.app/noise.svg');
    opacity: .04;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: overlay;
}

.mesh {
    position: fixed;
    inset: -30%;
    background: 
        radial-gradient(circle at 20% 20%, rgba(42,123,255,0.15), transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(0,212,255,0.1), transparent 50%);
    filter: blur(120px);
    z-index: -1;
    animation: meshMove 20s ease-in-out infinite;
}

@keyframes meshMove {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(5%, 5%); }
}

.cursor {
    position: fixed;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(42, 123, 255, 0.08), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    will-change: transform;
    transition: transform 0.15s ease-out;
}

.grain-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px);
    pointer-events: none;
    z-index: 1;
    opacity: 0.5;
}

/* ==========================================================================
   LAYOUT & UTILITIES
   ========================================================================== */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.section {
    padding: 120px 0;
    position: relative;
}

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */

.header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
    background: rgba(3, 5, 10, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
    transition: all 0.3s ease;
}

.header.scrolled {
    padding: 15px 0;
    background: rgba(3, 5, 10, 0.95);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-box {
    perspective: 1000px;
    cursor: pointer;
}

.logo {
    font-weight: 900;
    font-size: 28px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
}

.logo::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.logo-box:hover .logo {
    transform: rotateY(360deg) scale(1.05);
}

.logo-box:hover .logo::after {
    transform: scaleX(1);
}

.menu {
    display: flex;
    align-items: center;
    gap: 32px;
}

.menu a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 8px 0;
}

.menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
}

.menu a:hover {
    color: var(--accent);
}

.menu a:hover::after {
    width: 100%;
}

.cta-btn {
    background: linear-gradient(135deg, var(--accent), var(--accent2)) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    border: 1px solid var(--accent);
    padding: 10px 24px !important;
    border-radius: 50px;
    font-weight: 600;
}

.cta-btn:hover {
    background: var(--accent) !important;
    -webkit-text-fill-color: white !important;
    box-shadow: 0 0 20px rgba(42, 123, 255, 0.4);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background: var(--text);
    transition: all 0.3s ease;
}

/* ==========================================================================
   HERO SECTION
   ========================================================================== */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 100px;
}

.hero-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-left {
    z-index: 2;
}

.floating-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(42, 123, 255, 0.1);
    border: 1px solid rgba(42, 123, 255, 0.3);
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 500;
    color: var(--accent2);
    margin-bottom: 24px;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.status-dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.9); }
}

.tag {
    color: var(--accent);
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 16px;
    display: block;
}

.hero-title {
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.1;
    font-weight: 900;
    margin-bottom: 24px;
    letter-spacing: -2px;
}

.gradient-text {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
}

.typewriter::after {
    content: "|";
    animation: blink 0.8s infinite;
    color: var(--accent);
    -webkit-text-fill-color: currentColor;
}

@keyframes blink {
    50% { opacity: 0; }
}

.hero-subtitle {
    font-size: 18px;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 600px;
    margin-bottom: 40px;
}

.hero-subtitle strong {
    color: var(--text);
    font-weight: 600;
}

.hero-cta {
    display: flex;
    gap: 16px;
    margin-bottom: 60px;
}

.btn-primary,
.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: white;
    box-shadow: 0 4px 20px rgba(42, 123, 255, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(42, 123, 255, 0.5);
}

.btn-primary svg {
    transition: transform 0.3s ease;
}

.btn-primary:hover svg {
    transform: translateX(4px);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    color: var(--text);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--accent);
    transform: translateY(-2px);
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.stat-item {
    padding: 20px 0;
    border-top: 2px solid var(--border);
}

.stat-number {
    font-size: 36px;
    font-weight: 900;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 4px;
}

.stat-label {
    font-size: 13px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* HERO RIGHT - PHOTO */
.hero-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo-wrapper {
    position: relative;
    width: 380px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.photo-main {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    background-size: cover;
    background-position: center;
    border: 3px solid var(--border);
    z-index: 2;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.photo-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: conic-gradient(
        from 0deg,
        transparent,
        var(--accent),
        var(--accent2),
        transparent
    );
    border-radius: 50%;
    animation: rotateGlow 6s linear infinite;
    filter: blur(20px);
    opacity: 0.6;
    z-index: 1;
}

@keyframes rotateGlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.photo-rings {
    position: absolute;
    width: 100%;
    height: 100%;
}

.ring {
    position: absolute;
    border: 1px solid var(--border);
    border-radius: 50%;
    opacity: 0.3;
}

.ring-1 {
    width: 340px;
    height: 340px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ringPulse 4s ease-in-out infinite;
}

.ring-2 {
    width: 360px;
    height: 360px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ringPulse 4s ease-in-out infinite 0.5s;
}

.ring-3 {
    width: 380px;
    height: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ringPulse 4s ease-in-out infinite 1s;
}

@keyframes ringPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
    50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.1; }
}

/* SCROLL INDICATOR */
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.mouse {
    width: 24px;
    height: 40px;
    border: 2px solid var(--border);
    border-radius: 12px;
    position: relative;
}

.wheel {
    width: 3px;
    height: 8px;
    background: var(--accent);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
    0% { top: 8px; opacity: 1; }
    100% { top: 24px; opacity: 0; }
}

/* ==========================================================================
   SECTIONS
   ========================================================================== */

.section-header {
    margin-bottom: 60px;
    text-align: center;
}

.section-tag {
    color: var(--accent);
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 12px;
    display: block;
    margin-bottom: 12px;
}

.section-title {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 900;
    letter-spacing: -1px;
}

/* ==========================================================================
   CARDS
   ========================================================================== */

.card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    backdrop-filter: blur(20px);
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(42, 123, 255, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.card:hover {
    border-color: rgba(42, 123, 255, 0.5);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card:hover::before {
    opacity: 1;
}

.card-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(42, 123, 255, 0.1);
    border: 1px solid rgba(42, 123, 255, 0.3);
    border-radius: 16px;
    margin-bottom: 24px;
    color: var(--accent);
}

.card h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--text);
}

.card p {
    color: var(--text-muted);
    line-height: 1.7;
}

/* ==========================================================================
   ABOUT SECTION
   ========================================================================== */

.about-content {
    max-width: 900px;
    margin: 0 auto 60px;
    text-align: center;
}

.about-intro {
    font-size: 20px;
    line-height: 1.8;
    color: var(--text);
    margin-bottom: 24px;
}

.about-intro strong {
    color: var(--accent);
    font-weight: 600;
}

.about-text {
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-muted);
}

.about-text strong {
    color: var(--text);
    font-weight: 600;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
}

/* ==========================================================================
   EXPERIENCE SECTION
   ========================================================================== */

.experience-wrapper {
    position: relative;
    padding-left: 50px;
}

.timeline-line {
    position: absolute;
    left: 8px;
    top: 20px;
    bottom: 20px;
    width: 2px;
    background: linear-gradient(
        to bottom,
        var(--accent),
        var(--accent2),
        transparent
    );
    opacity: 0.4;
}

.exp-card {
    position: relative;
    margin-bottom: 40px;
    border-left: 3px solid var(--border);
    transition: all 0.4s ease;
}

.timeline-dot {
    position: absolute;
    left: -51px;
    top: 45px;
    width: 18px;
    height: 18px;
    background: var(--bg);
    border: 3px solid var(--border);
    border-radius: 50%;
    z-index: 5;
    transition: all 0.3s ease;
}

.exp-card:hover {
    border-left-color: var(--accent);
}

.exp-card:hover .timeline-dot {
    background: var(--accent);
    border-color: var(--accent2);
    box-shadow: 0 0 20px var(--accent);
    transform: scale(1.3);
}

.exp-badge {
    position: absolute;
    top: -12px;
    right: 40px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: white;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 20px;
    letter-spacing: 1.5px;
    box-shadow: 0 4px 12px rgba(42, 123, 255, 0.4);
}

.exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 20px;
}

.exp-header h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
}

.exp-location {
    color: var(--accent);
    font-size: 15px;
    font-weight: 500;
}

.exp-date {
    background: rgba(42, 123, 255, 0.1);
    color: var(--accent2);
    padding: 8px 18px;
    border-radius: 25px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    border: 1px solid rgba(42, 123, 255, 0.3);
}

.exp-summary {
    color: var(--text);
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.6;
}

.exp-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 24px;
}

.exp-list li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.6;
}

.exp-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 700;
}

/* ==========================================================================
   PROJECTS SECTION
   ========================================================================== */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
}

.project-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    transform-style: preserve-3d;
}

.project-card:hover {
    border-color: rgba(42, 123, 255, 0.5);
    transform: translateY(-8px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
}

.project-image {
    height: 240px;
    position: relative;
    overflow: hidden;
}

.project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-link {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    color: var(--bg);
    transition: all 0.3s ease;
}

.project-link:hover {
    transform: scale(1.1) rotate(5deg);
}

.project-content {
    padding: 32px;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    gap: 12px;
}

.project-header h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text);
}

.project-type {
    background: rgba(42, 123, 255, 0.1);
    color: var(--accent2);
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
}

.project-content > p {
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 20px;
    font-size: 14px;
}

/* ==========================================================================
   SKILLS SECTION
   ========================================================================== */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
}

.skill-category {
    padding: 40px;
}

.skill-icon {
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(42, 123, 255, 0.1), rgba(0, 212, 255, 0.1));
    border: 1px solid rgba(42, 123, 255, 0.3);
    border-radius: 18px;
    margin-bottom: 24px;
    color: var(--accent);
}

.skill-category h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 28px;
}

.skill-items {
    margin-bottom: 24px;
}

.skill-item {
    margin-bottom: 20px;
}

.skill-name {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
}

.skill-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 10px;
    transition: width 1s ease-out;
    position: relative;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.skill-tags span {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
    transition: all 0.3s ease;
}

.skill-tags span:hover {
    background: rgba(42, 123, 255, 0.1);
    border-color: var(--accent);
    color: var(--accent);
}

/* SKILL LIST ITEMS - Pour compétences transversales */
.skill-list-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.transverse-skill {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.transverse-skill:hover {
    background: rgba(42, 123, 255, 0.05);
    transform: translateX(8px);
}

.transverse-skill svg {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 2px;
}

.transverse-skill span {
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.5;
}

/* ==========================================================================
   CONTACT SECTION
   ========================================================================== */

.contact-wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.contact-text {
    font-size: 18px;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 48px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-bottom: 48px;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.contact-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--accent);
    transform: translateY(-4px);
}

.contact-item svg {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 4px;
}

.contact-item > div {
    text-align: left;
}

.contact-label {
    display: block;
    font-size: 12px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
}

.contact-item a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.contact-item a:hover {
    color: var(--accent);
}

.contact-cta {
    display: flex;
    justify-content: center;
}

/* ==========================================================================
   FOOTER
   ========================================================================== */

.footer {
    padding: 60px 0 30px;
    border-top: 1px solid var(--border);
    background: rgba(0, 0, 0, 0.3);
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 40px;
}

.footer-left p {
    color: var(--text-muted);
    margin-top: 12px;
    line-height: 1.6;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

.footer-column h4 {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer-column a {
    display: block;
    color: var(--text-muted);
    text-decoration: none;
    margin-bottom: 12px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.footer-column a:hover {
    color: var(--accent);
    transform: translateX(4px);
}

.footer-bottom {
    padding-top: 30px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-muted);
    font-size: 13px;
}

/* ==========================================================================
   ANIMATIONS
   ========================================================================== */

.reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================================================================
   RESPONSIVE
   ========================================================================== */

@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .hero-right {
        order: -1;
    }
    
    .photo-wrapper {
        width: 280px;
        height: 280px;
    }
    
    .photo-main {
        width: 240px;
        height: 240px;
    }
    
    .hero-stats {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .section {
        padding: 80px 0;
    }
    
    .menu {
        display: none;
    }
    
    .menu-toggle {
        display: flex;
    }
    
    .hero {
        padding-top: 80px;
    }
    
    .hero-cta {
        flex-direction: column;
    }
    
    .hero-stats {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .about-grid,
    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .exp-header {
        flex-direction: column;
        gap: 12px;
    }
    
    .exp-date {
        align-self: flex-start;
    }
    
    .experience-wrapper {
        padding-left: 35px;
    }
    
    .timeline-dot {
        left: -36px;
        width: 14px;
        height: 14px;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 12px;
        text-align: center;
    }
    
    .contact-info {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .photo-wrapper {
        width: 220px;
        height: 220px;
    }
    
    .photo-main {
        width: 190px;
        height: 190px;
    }
    
    .card {
        padding: 24px;
    }
    
    .section-title {
        font-size: 32px;
    }
}
