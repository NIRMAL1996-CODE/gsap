import './style.css';
import gsap from "gsap";

// let h1= document.querySelectorAll("h1");
// // console.log(h1.textContent)
// let text = h1.textContent;

// let splittedtext=text.split("")
// // console.log(splitedtext)

// let clutter ="";

// splittedtext.forEach((e)=>{
//   clutter += `<span class="inline-block">${e}</span>`
// })

// h1.innerHTML = clutter;

let h1s = document.querySelectorAll("h1");

h1s.forEach(h1 => {
  let text = h1.textContent;
  let clutter = "";
  text.split("").forEach(e => {
    clutter += `<span class="inline-block">${e}</span>`;
  });
  h1.innerHTML = clutter;
});

gsap.from(".text1 span",{
  y:50,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.3,
  scale: 1.5,
  color: "#f59e0b",
  ease: "back.out(1.7)" ,
})

gsap.from(".text2 span",{
  y:50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  stagger:-0.3,
  ease: "back.out(1.7)" 
})