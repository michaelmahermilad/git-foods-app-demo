import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import brand from "./Images/brand.png"// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brands.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Brands() {
  return (
    <>
      <Swiper
        breakpoints= {{  
         
          '840': {
            slidesPerView: 5,
            spaceBetween: 50, },
        }}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}    
           modules={[Autoplay]}
         autoplay={{
         delay: 5000,
         disableOnInteraction: false,
       }}
    
        
         
        
         
        
        className="swipermain "
      >
                <SwiperSlide className='swiper1' ><img className='img' src={brand}/></SwiperSlide>
        <SwiperSlide className='swiper1'><img className='img'src={brand}/></SwiperSlide>
        <SwiperSlide className='swiper1' ><img className='img'src={brand}/></SwiperSlide>
        <SwiperSlide className='swiper1'><img className='img'src={brand}/></SwiperSlide>

        <SwiperSlide className='swiper1' ><img className='img' src={brand}/></SwiperSlide>
        <SwiperSlide className='swiper1'><img className='img'src={brand}/></SwiperSlide>
        <SwiperSlide className='swiper1' ><img className='img'src={brand}/></SwiperSlide>
        <SwiperSlide className='swiper1'><img className='img'src={brand}/></SwiperSlide>
    
      </Swiper>
    </>
  );
}
