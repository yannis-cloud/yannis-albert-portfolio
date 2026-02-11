const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const isOpen = mobileNav.hasAttribute("hidden") === false;

    if (isOpen) {
      mobileNav.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.removeAttribute("hidden");
      burger.setAttribute("aria-expanded", "true");
    }
  });

  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileNav.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();


// ===== Scroll reveal animations =====
const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealEls.forEach((el) => io.observe(el));
}
