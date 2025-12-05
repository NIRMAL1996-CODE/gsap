
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {

	const container = useRef();
  
   useGSAP(() => {
    gsap.from(container.current, {   
      //  x: 150,            // (meaning: start from down)
      opacity: 0,        // (meaning: start invisible)
      duration: 1, 
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",   // (meaning: when box top reaches 80% of screen)
        end: "top -70%",
        scrub: true,
        markers:true,          // (meaning: animation moves with scroll)
      }
    });
  }, { scope:container});

  return (
    <div >
    <div  className='h-screen flex justify-center items-center'>
      <h1 ref={container} className='text-9xl'>hello1</h1>
     </div>
     <div className='h-screen flex justify-center items-center'>
      <h1 className='text-9xl'>hello2</h1>
     </div>
     <div className='h-screen flex justify-center items-center'>
      <h1 className='text-9xl'>hello3</h1>
     </div>
     <div className='h-screen flex justify-center items-center'>
      <h1 className='text-9xl'>hello4</h1>
     </div>
    </div>
  )
}

export default App