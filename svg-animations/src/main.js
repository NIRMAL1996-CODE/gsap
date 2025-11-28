import './style.css';
import gsap from "gsap";
let path = `M 10 200 Q 500 200 1200 200`;
let finalPath = `M 10 200 Q 500 200 1200 200`;

let string = document.querySelector(".string");
string.addEventListener("mousemove", (details)=>{
  // console.log(details.y);
  path = `M 10 200 Q ${details.x} ${details.y} 1200 200`
   gsap.to("svg path",{
    attr: {d:path},
    duration:0.3,
    ease:"power3.Out",
   })
});

string = document.querySelector(".string");
string.addEventListener("mouseleave", (details)=>{
 gsap.to("svg path",{
    attr: {d:finalPath},
    duration:1.5,
    ease:"elastic.out(1, 0.2)"
    })
});
