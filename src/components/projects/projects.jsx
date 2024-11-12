import React from 'react'
import '../../../src/App.css'
import eye from '../../assets/eye.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Projects = () => {
  return (
    <div className='w-full h-full md:px-60 lg:px-60 px-7 bg-[#0E1225] projects' id='projects'>
      <h3 className="text-xl text-[#727272] pt-6">Projects</h3>
      <h5 className="my-2 md:text-4xl lg:text-4xl text-3xl text-white">
        Checkout my <span className="text-blue-500">Latest Projects</span> here
      </h5>

      <div className="projects flex items-start w-full gap-10 flex-wrap mt-7">
        <Swiper
          spaceBetween={50}
          breakpoints={{
            // For screens larger than 768px (tablet and above)
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // For screens smaller than 768px (mobile)
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array(4).fill("").map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='w-[300px] project p-2 h-[250px] bg-[#18212F] rounded-2xl'>
                  <div className="overlay w-[300px] h-[250px] left-0 top-0 bg-slate-400 absolute bg-blend-lighten z-10 opacity-0 hover:opacity-30 rounded-2xl">
                    <h1 className='z-20 text-4xl'>H-</h1>
                  </div>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jQLYDfXfErKtmy_JLVAyIYfo_Xg8WejCkA&s'
                    className='w-full h-[235px] rounded-2xl relative'
                    alt=""
                  />
                  <a href="#">
                    <img
                      src={eye}
                      alt=""
                      className='absolute w-16 aspect-square top-20 left-32 z-10 bg-blue-500 rounded-full opacity-85'
                    />
                  </a>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
