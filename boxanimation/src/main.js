//Horizontal Scroll Experience
import "./style.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 h1",{

// transform:"translateX(-150)",this wont work work gsap
// x: -1000, // ✅

// xPercent: -160 → move text left by 160% of its width
xPercent: -160, //✅

// ease: "none" → smooth linear movement, no easing
ease: "none",   

 scrollTrigger: {
    // trigger:"#page2" → element that triggers the scroll animation
    trigger: "#page2",  

    // scroller: "body" → use body as the scroll container
    scroller: "body",    

    // markers: true → show start/end markers for debugging
    markers: true,       

    // start: "top top" → animation starts when top of trigger hits top of viewport
    start: "top top",    

    // end: "top -400%" → animation ends after scrolling 4 screen heights
    end: "top -200%",   

    // scrub: 2 → smooth syncing of animation with scroll, 2 sec lag
    scrub: 2,           

    // pin: true → keeps the element pinned in place while animating
    pin: true            
  }
});
