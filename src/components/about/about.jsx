import React from 'react'
import Pic from '../../assets/Programming-amico.png'
import '../../../src/App.css'
const about = () => {
  return (
    <div className='md:px-60 lg:px-60 md:py-16 lg:py-16 py-8 flex items-center gap-32 bg-[#f7f8ff] about md:flex-row lg:flex-row flex-col-reverse h-full' id="about">

      <img src={Pic} alt="" className='w-[300px] h-[400px] mt-14 md:mt-0 lg:mt-0'/>
      <div className="right h-[500px] md:w-[560px] lg:w-[560px] w-[300px]
        flex flex-col gap-3 ">
        <h2 className='text-xl text-[#727272] '>About Me</h2>
        <h1 className='text-4xl text-#868686'>Professional <span className='text-[#4169e1]'> Web developer </span></h1>
      <p className='text-[#868686]'>Hello, I’m Wahid Ali, a passionate Frontend Developer with expertise in creating responsive, dynamic, and user-friendly websites.

I’m driven by a love for clean code, intuitive design, and providing seamless user experiences. Whether it’s building a complex e-commerce platform or crafting a simple landing page, I thrive on solving problems and bringing ideas to life through code.</p>
       
<h1 className='text-3xl text-[#2c3e50] '>Personal Info </h1>
    <div>
    <div  className='flex md:flex-row lg:flex-row flex-col md:items-center lg:items-center w-full md:gap-20 lg:gap-20 gap-3
      mb-5 font-bold'> 
      <p className='text-[#2c3e50] text-md'><span className='text-[#868686] font-medium  mr-2'>Name:</span> Wahid Ali</p>
      <p className='text-[#2c3e50]'><span className='text-[#868686] font-medium mr-2 '>Email:</span> wahid.ali@example.com</p>
      </div> 

      <div className='flex md:flex-row lg:flex-row flex-col md:items-center lg:items-center w-full md:gap-20 lg:gap-20 gap-3
      mb-5 font-bold'> 
      <p className='text-[#2c3e50] text-md'><span className='text-[#868686] font-medium  mr-2'>Age:</span> 28</p>  
      <p className='text-[#2c3e50] md:ml-[70px]  lg:ml-[70px]'><span className='text-[#868686] font-medium   '>Tel:</span>: 01234567890</p>
      </div> 
      <div className='flex md:flex-row lg:flex-row flex-col md:items-center lg:items-center w-full md:gap-20 lg:gap-20 gap-3
      mb-5 font-bold'> 
      <p className='text-[#2c3e50] text-md'><span className='text-[#868686] font-medium  mr-2'>Nationality:</span>Pakistan</p>  
      <p className='text-[#2c3e50] md:-ml-5   lg:-ml-5  font-bold  '><span className='text-[#868686] font-medium  mr-2 '>Address:</span> Abidabad Baldia Town Karachi Pakistan
      A</p>
      </div> 
   
    </div>

      </div>
    </div>
  )
}

export default about

