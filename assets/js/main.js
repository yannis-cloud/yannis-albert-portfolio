document.addEventListener('DOMContentLoaded', () => {
    // Typewriter
    const typewriter = document.getElementById('typewriter');
    const text = "Data, Cloud & Tool Pilot.";
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    // Scroll Reveal
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
