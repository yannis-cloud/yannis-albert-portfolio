/* ===== Reveal ===== */
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

/* ===== Navbar highlight ===== */
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{
const sectionTop=section.offsetTop-150;
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

/* ===== Progress bar ===== */
const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{
const totalHeight=document.body.scrollHeight-window.innerHeight;
const progressHeight=(window.pageYOffset/totalHeight)*100;
progress.style.width=progressHeight+"%";
});

/* ===== Spotlight mouse effect ===== */
document.querySelectorAll(".spotlight").forEach(card=>{
card.addEventListener("mousemove",e=>{
const rect=card.getBoundingClientRect();
card.style.setProperty("--x", e.clientX-rect.left+"px");
card.style.setProperty("--y", e.clientY-rect.top+"px");
});
});
