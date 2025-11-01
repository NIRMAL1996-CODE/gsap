import "./style.css";
import gsap from "gsap";

const tl= gsap.timeline();
tl.from(".nav",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.2,
})
tl.from(".menu a",{
  y:-30,
  opacity:0,
  duration:2,
  delay:0.1,
  stagger: 0.2,
})

tl.to(".box1", {
  x: 1000,
  duration: 2,  
  rotate: 360,
  borderRadius: "50%",
});

tl.to(".box2", {
   x: 1000,
  duration: 1,
  rotate:360,
  borderRadius:"50%",
});

tl.to(".box3", {
   x: 1000,
  duration: 1,
  rotate:360,
  borderRadius:"50%"
});

