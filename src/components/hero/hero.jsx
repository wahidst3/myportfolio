import React, { useEffect, useRef } from 'react'
import Pic from '../../assets/ab.png'
import shape from '../../assets/hero-bg-shape.png'
import './hero.css'
import Typed from 'typed.js';
import Cv from '../../assets/cv.pdf'
const hero = () => {
  const elHi = useRef(null); // Ref for "HI! I'm"
  const elName = useRef(null); // Ref for "Wahid Ali"

  useEffect(() => {
    // Typed for "HI! I'm"
   
    // Typed for "Wahid Ali"
    const typedName = new Typed(elName.current, {
      strings: ["Wahid Ali"],
      startDelay: 1500, // Delay before starting this typing
      typeSpeed: 70,
      backSpeed: 100,
      backDelay: 100,
      loop: true // Loop this one if desired
    });

    // Cleanup function to destroy instances
    return () => {
      
      typedName.destroy();
    };
  }, []);

  
  return (
    <div className='w-full h-full md:h-[87vh] lg:h-[87vh] flex items-center justify-between 
    overflow-hidden
    relative  hero rounded-b-[5px]  md:pt-0 lg:pt-0 pt-5 md:flex-row lg:flex-row flex-col' id='home'>
 
 <div className="left lg:ml-60 md:ml-60 ml-10 lg:mt-0 md:mt-0 mt-8 h-[100%]  justify-center flex-col flex lg:w-[40%] md:w-[40%] w-[90%]  z-10">

  <p className='lg:text-xl md:text-xl text-lg text-[#C4CFDE] mb-3'>Wellcome Here!</p>
        <h3 className="lg:text-5xl md:text-5xl
        text-4xl
        font-bold text-white mb-3 ">  <span className='text-white'>Hi I'm </span>
        <span ref={elName} className='text-blue-500'></span> </h3>
        <h1 className='lg:text-[70px] md:text-[70px] text-[30px] text-white'>A Web Developer </h1>
        <p className='text-[#C4CFDE] md:px-0 lg:px-0  '>I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
       
        <a className='md:w-48 lg:w-48 w-36  py-2 mt-6 border-2 border-blue-500 md:text-lg lg:text-lg text-sm rounded-3xl text-white text-center cursor-pointer' href={Cv} download={true}>Download Resume</a>
      </div> 
 <div className="right h-[100%]  justify-center md:pt-20 lg:pt-20 pt-12 flex-col flex md:mr-60 lg:mr-60  md:w-[34%] lg:w-[34%] w-[90%]  ">
 <img src={Pic} alt="" className='md:h-[550px] md:w-[700px] lg:h-[550px] lg:w-[700px] w-[500px] md:aspect-auto lg:aspect-auto aspect-square z-100 -mt-10  transform -rotate-0 o'/> 
 
      </div> 
    </div>
  )
}

export default hero
