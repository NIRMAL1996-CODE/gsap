import { gsap } from "gsap";
gsap.to("#box1", {
  x:1160,
  duration:3,
  delay:1,
  rotate:360,
  backgroundColor:"pink",
  borderRadius:"50%",
  repeat:-1,
  yoyo:true 
})

gsap.from("#box2", {
  x:1160,
  duration:3,
  delay:1,
  rotate:360,
  backgroundColor:"pink",
  borderRadius:"50%",
  repeat:-1,
  yoyo:true 
})