import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Services from './components/services/services';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const span = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circleDiameter = span.current.offsetWidth;
      const halfCircle = circleDiameter / 2;

      // Get the mouse position relative to the viewport
      const x = e.clientX - halfCircle;
      const y = e.clientY - halfCircle;

      // Adjust the Y-axis by adding scroll offset (this ensures the circle follows even when scrolled)
      setPosition({ x, y: y + window.scrollY });
    };

    // Adding the event listener to track mouse position
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Circle that follows the mouse cursor */}
      <span
        ref={span}
        className="bg-blue-500 w-14 h-14 opacity-55 rounded-full absolute"
        style={{
          top: `${position.y}px`, // Y-axis adjusted for scrolling
          left: `${position.x}px`, // X-axis position
          filter: 'blur(8px)',
          pointerEvents: 'none', // Ensure circle doesn't block clicks
          transition: 'top 0.1s ease, left 0.1s ease', // Smooth transition
          zIndex: 1000, // Ensure the circle stays on top of everything else
        }}
      ></span>

      {/* Main Layout */}
      <div className=" bg-[#0E1225] h-full rounded-b-[5px] relative w-full">
        {/* Navbar Section */}
        <div className="w-[100%] md:justify-center lg:justify-center md:px-0 px-10 lg:px-0 flex items-center z-10 pb-7">
          <Navbar />
        </div>

        {/* Other Sections */}
        <Hero />
      <About />    
      

         <Services />
    
       <Projects />
      
        <Contact />
        <Footer /> 
      </div>
    </>
  );
}

export default App;
