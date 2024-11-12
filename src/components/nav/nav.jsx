import React, { useState } from 'react'
import './nav.css'
import Bar  from '../../assets/bars-solid.svg'
const nav = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }
  return (
    <div className='nav flex items-center relative justify-between md:w-[70%]  border-2 border-[rgb(22,26,45)] lg:px-24 md:px-24 lg:py-4 md:py-4  rounded-lg mt-5  md:z-10  lg:z-10'>
      <h1 className='text-2xl bg-red text-white'>Wahid Ali</h1>
      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      <img src={Bar} alt="" onClick={toggleMenu} className='w-6 
      aspect-square opacity-75 md:hidden lg:hidden' />
      <ul className='nav-links  flex items-center w-[40%] justify-between text-white'>
        <li className='text-[#00D1FF]'><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className='w-32 py-2 rounded-lg bg-[#161A2D] text-white'><a href="https://www.linkedin.com/in/wahid-ali-467855235/">Connect</a></button>


<div className={`menu2 md:hidden lg:hidden ${menuVisible? ' block ':'hidden'} absolute p-3 bg-[#0E1225] right-0 top-[83px] py-8 rounded-b-lg z-50 `}
// onBlur={()=>setMenuVisible(false)}
>
<ul className='flex-col gap-3  flex items-center w-[38vw]  justify-between text-white'>
<li className='text-[#00D1FF]'><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
</div>



    </div>
  )
}

export default nav
