// ===== Reveal animation =====
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


// ===== Navbar highlight au scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{
let current="";

sections.forEach(sec=>{
const top = window.scrollY;
const offset = sec.offsetTop - 200;
const height = sec.offsetHeight;

if(top >= offset && top < offset + height){
current = sec.getAttribute("id");
}
});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});
});
// ===== Scroll reveal =====
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


// ===== Navbar highlight =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(sec=>{
const offset = sec.offsetTop - 200;
const height = sec.offsetHeight;
if(window.scrollY >= offset && window.scrollY < offset+height){
current = sec.id;
}
});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});
});
