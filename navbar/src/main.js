import './style.css'
import gsap from "gsap"

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const cursor = document.querySelector(".cursor");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");


main.addEventListener("mousemove",(dets)=>{
  // console.log(dets)
  gsap.from(cursor,{
     x: dets.x,
     y: dets.y,
     duration:0.6,
     ease: "power4.out"
  })
  nav.addEventListener("mouseenter",()=>{
  // console.log("hello")
  gsap.to(cursor,{
    scale:3,
    backgroundColor:"#f5f5dc59",
  })
}) 

nav.addEventListener("mouseleave",()=>{
  // console.log("hello")
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#fef3c7"
  })
}) 

})
menu.addEventListener("click",()=>{
  tl.play();
});

close.addEventListener("click",()=>{
  tl.reverse();
})

let tl= gsap.timeline();
tl.to(".nav",{
  right:0,
  duration:0.6,
  
})
tl.from(".nav a", {
  x:250,
  duration:0.6,
  stagger:0.2,
  opacity:0 
})
tl.from(".nav i", {
  opacity:0 
})
tl.pause()