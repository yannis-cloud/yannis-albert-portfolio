document.addEventListener("DOMContentLoaded",()=>{

// CURSOR
const cursor=document.querySelector(".cursor");
let mx=0,my=0,cx=0,cy=0;

document.addEventListener("mousemove",e=>{
mx=e.clientX;
my=e.clientY;
});

function animate(){
cx+=(mx-cx)*0.1;
cy+=(my-cy)*0.1;
if(cursor){
cursor.style.left=cx+"px";
cursor.style.top=cy+"px";
}
requestAnimationFrame(animate);
}
animate();


// TYPEWRITER
const type=document.getElementById("typewriter");
if(type){
const words=["Ingénieur Systèmes Numériques","Data Analytics","Industrial AI","Digital Twins"];
let w=0,c=0,d=false;

function typing(){
let word=words[w];
c+=d?-1:1;
type.textContent=word.substring(0,c);

if(!d && c===word.length){d=true;setTimeout(typing,1200);return;}
if(d && c===0){d=false;w=(w+1)%words.length;}

setTimeout(typing,d?50:80);
}
typing();
}


// REVEAL SCROLL
const reveals=document.querySelectorAll(".reveal");

const obs=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.2});

reveals.forEach(el=>obs.observe(el));


// TILT
document.querySelectorAll(".tilt").forEach(el=>{
el.addEventListener("mousemove",e=>{
const r=el.getBoundingClientRect();
const x=e.clientX-r.left;
const y=e.clientY-r.top;
el.style.transform=`perspective(1000px) rotateX(${(y-r.height/2)/15}deg) rotateY(${(r.width/2-x)/15}deg) scale(1.02)`;
});
el.addEventListener("mouseleave",()=>{
el.style.transform="none";
});
});

});
