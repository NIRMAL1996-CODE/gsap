
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
     rotate:90,
      duration: 1,
      delay:1, 
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",   // (meaning: when box top reaches 80% of screen)
        end: "top 0%",
        scrub: true,
        markers:true,          // (meaning: animation moves with scroll)
      }
    });
  }, { scope:container});

  return (
    <div >
    <div  className='bg-gray-500 h-screen flex justify-center items-center '>
      <h1 ref={container} className='text-9xl'>hello1</h1>
     </div>
     <div className='bg-gray-400 h-screen flex justify-center items-center'>
      <h1 className='text-9xl'>hello2</h1>
     </div>
     <div className='bg-gray-300 h-screen flex justify-center items-center'>
      <h1 className='text-9xl'>hello3</h1>
     </div>
     <div className=' bg-gray-200 h-screen flex justify-center items-center'>
      <h1 className='text-9xl'>hello4</h1>
     </div>
    </div>
  )
}

export default App