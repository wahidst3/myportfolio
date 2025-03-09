import React from 'react';
import '../../../src/App.css';
import eye from '../../assets/eye.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Connectly from "../../assets/connectly.png";
import lp from "../../assets/lp.png";
import lex from "../../assets/lex.png";
import urls from "../../assets/urls.png";

const projects = [
  {
    "id": 1,
    "title": "Connectly - Find Your Skillmate",
    "description": "Connectly is a full-stack web  that provides chat  with real-time matching and chat translation. It is built with React, Node.js, Express, and MongoDB.",
    "img": Connectly,
    "link": "https://connectlybwa.netlify.app/"
  },
  {
    "id": 2,
    "title": "Loopstudio",
    "description": "A frontend Homepage for Loopstudio with HTML, CSS, and JavaScript.",
    "img": lp,
    "link": "https://waloopstudio.netlify.app/"
  },
  {
    "id": 3,
    "title": "Luxury Elegance",
    "description": "An eacomerce website for Luxury Elegance with React.js -tailwind css and Firebase",
    "img": lex,
    "link": "https://lebywahidali.netlify.app/"
  },
  {
    "id": 3,
    "title": "Shortly",
    "description": "A frontend for link shortner website using html,css and javascript",
    "img": urls,
    "link": "https://urlsweb-wahidali.netlify.app/"
  },

];

const Projects = () => {
  return (
    <div className='w-full h-full md:px-60 lg:px-60 px-7 bg-[#0E1225] projects' id='projects'>
      <h3 className="text-xl text-[#727272] pt-6">Projects</h3>
      <h5 className="my-2 md:text-4xl lg:text-4xl text-3xl text-white">
        Checkout my <span className="text-blue-500">Latest Projects</span> here
      </h5>

      <div className="projects flex items-start w-full gap-10 flex-wrap mt-7">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-[300px] h-[350px] bg-[#18212F] rounded-2xl p-2 shadow-lg'>
                {/* Project Image */}
                <img
                  src={project.img}
                  className='w-full h-[180px] rounded-2xl object-cover'
                  alt={project.title}
                />

                {/* Overlay & Title */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 rounded-2xl transition duration-300">
                  <h1 className='text-white text-xl font-bold text-center px-4'>{project.title}</h1>
                </div>

                {/* Description */}
                <p className="text-white mt-3 text-sm px-2">{project.description}</p>

                {/* View Button */}
                <a href={project.link} target="_blank" rel="noreferrer" className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] bg-blue-500 text-white text-center py-2 rounded-2xl'>
                  <img
                    src={eye}
                    alt="View Project"
                    className='w-5 inline-block mr-2'
                  />
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
