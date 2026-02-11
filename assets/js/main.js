// ===== Reveal Animation =====
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

// ===== NAVBAR HIGHLIGHT =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{
let current="";

sections.forEach(section=>{
const sectionTop=section.offsetTop-120;
if(scrollY>=sectionTop){
current=section.getAttribute("id");
}
});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});
});
