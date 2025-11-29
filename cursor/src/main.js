import './style.css';
import gsap from "gsap";
let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");
let image = document.querySelector(".img")

main.addEventListener("mousemove",(details)=>{
  // console.log(details)
  gsap.to(cursor,{
    x: details.x,
    y: details.y,
    duration:0.6
  })
});
image.addEventListener("mouseenter",()=>{
  // console.log("hello")
  gsap.to(cursor,{
    scale:4,
    backgroundColor:"#f5f5dc59"
  })
}) 

image.addEventListener("mouseleave",()=>{
  // console.log("hello")
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#0f172a"
  })
}) 

// document.body.addEventListener("mousemove", (e) => {
//   const p = document.createElement("div");
//   p.classList.add("particle");

//   p.style.left = e.x + "px";
//   p.style.top = e.y + "px";

//   document.body.appendChild(p);

//   gsap.to(p, {
//     opacity: 0,
//     scale: 1,
//     duration: 0.4,
//     onComplete: () => p.remove()
//   });
// });
