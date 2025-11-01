// import { gsap } from "gsap";

const text1 = document.querySelector(".text1");
text1.innerHTML = text1.textContent.split("").map(letter => `<span>${letter}</span>`).join("");

gsap.from(".text1 span",{
  y: 30,
 opacity:0,
 duration:0.5,
 delay:1,
 stagger:0.1,
 repeat:-1,
 yoyo:true
 
})
gsap.from(".text2",{
 y: 30,
 opacity:0,
 duration:1,
 delay:1,
 stagger:-1,
})
