import { gsap } from "gsap";
gsap.to(".box1", {
  x:1160,
  duration:5,
  delay:1,
  rotate:360,
  backgroundColor:"pink",
  borderRadius:"100%",
  repeat:-1,
  stagger: 0.5,
  yoyo:true 
})

gsap.from(".box2", {
  x:1160,
  duration:5,
  delay:1,
  rotate:360,
  backgroundColor:"pink",
  borderRadius:"100%",
  repeat:-1,
  stagger: 0.5,
  yoyo:true 
})


