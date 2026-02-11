/* ============================= */
/* CURSOR GLOW */
/* ============================= */
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

/* ============================= */
/* TYPEWRITER HERO */
/* ============================= */
const text="Hi, I'm Yannis Albert — Cloud & Data Engineer";
const target=document.querySelector(".typewriter");

let i=0;
function type(){
if(i<text.length){
target.textContent+=text.charAt(i);
i++;
setTimeout(type,45);
}
}
type();

/* ============================= */
/* REVEAL */
/* ============================= */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.15});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

/* ============================= */
/* NAVBAR HIGHLIGHT */
/* ============================= */
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

/* ============================= */
/* PROGRESS BAR */
/* ============================= */
const progress=document.querySelector(".progress");

window.addEventListener("scroll",()=>{
const totalHeight=document.body.scrollHeight-window.innerHeight;
const progressHeight=(window.pageYOffset/totalHeight)*100;
progress.style.width=progressHeight+"%";
});

/* ============================= */
/* SPOTLIGHT CARDS */
/* ============================= */
document.querySelectorAll(".spotlight").forEach(card=>{
card.addEventListener("mousemove",e=>{
const rect=card.getBoundingClientRect();
card.style.setProperty("--x", e.clientX-rect.left+"px");
card.style.setProperty("--y", e.clientY-rect.top+"px");
});
});

/* ============================= */
/* REAL PARALLAX SCROLL */
/* ============================= */
const mesh=document.querySelector(".mesh");

window.addEventListener("scroll",()=>{
const offset=window.scrollY*0.3;
mesh.style.transform=`translateY(${offset}px)`;
});
