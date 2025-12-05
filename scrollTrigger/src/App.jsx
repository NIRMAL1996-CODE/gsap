
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {

	// const container = useRef();
const box1 = useRef();
const box2 = useRef();
const box3 = useRef();
const box4 = useRef();

  
  //  useGSAP(() => {
  //   gsap.from(container.current, { 
  //    rotate:90,
  //     duration: 1,
  //     delay:1, 
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top 50%",   // (meaning: when box top reaches 80% of screen)
  //       end: "top 0%",
  //       scrub: true,
  //       markers:true,          // (meaning: animation moves with scroll)
  //     }
  //   });
  // }, { scope:container});

  useGSAP(() => {
  gsap.from(box1.current, {
    rotate: 360,
    scrollTrigger: {
      trigger: box1.current,
      start: "top 60%",
      end: "top 0%",
      scrub: true,
      markers:true,
    }
  });
});

useGSAP(() => {
  gsap.from(box2.current, {
    scale: 0,
    scrollTrigger: {
      trigger: box2.current,
      start: "top 60%",
      end: "top 0%",
      scrub: true,
      markers:true,
    }
  });
});

useGSAP(() => {
  gsap.to(box3.current, {
    x: -400,
    scrollTrigger: {
      trigger: box3.current,
      start: "top 30%",
      end: "top 0%",
      scrub: true,
      markers:true,
    }
  });
});

useGSAP(() => {
  gsap.from(box4.current, {
    x: 900,
    opacity: 0,
    scrollTrigger: {
      trigger: box4.current,
      start: "top 60%",
      end: "top 30%",
      scrub: true,
      markers:true,
    }
  });
});
 

  return (
    <div >
    <div  className=' h-screen flex flex-col justify-center items-center '>
      <img className="h-[400px]" ref={box1} src="/img1.png" alt="fries" />
      <h1 className='text-6xl'>French Fries</h1>
     </div>
     <div className=' h-screen flex flex-col justify-center items-center'>
      <img ref={box2} className="h-[400px]" src="/img2.png" alt="" />
      <h1 className='text-6xl'>Snacks</h1>
     </div>
     <div className=' h-screen flex flex-col justify-center items-center'>
      <img ref={box3} className="h-[600px]" src="/img3.png" alt="" />
      <h1 className='text-6xl'>Burger</h1>
     </div>
     <div className='  h-screen flex flex-col justify-center items-center'>
      <img ref={box4} className="h-[600px]" src="/img4.png" alt="" />
      <h1 className='text-6xl'>chips</h1>
     </div>
    </div>
  )
}

export default App