import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import orange from "./Images/orange.png";
import Kiwi from "./Images/kiwi.png";
import grabs from "./Images/grabs.png";

import "./Hero.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiperSlide } from "swiper/react";

import { useSwiper } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "./Container";

export default function Heroswipper() {
  const swiperSlide = useSwiperSlide(true);
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          let top = document.getElementsByClassName("top");
        for (let index = 0; index < top.length; index++) {
        top[index].classList.remove("fromtop")

        
      }  
      top[swiper.activeIndex].classList.add("fromtop")
            const el = document.getElementById("0");
            const el1 = document.getElementById("1");
            const el2 = document.getElementById("2");
          switch (swiper.activeIndex) {
            
            case 0: {
      
              el.classList.add("yoyo");
              el1.classList.remove("yoyo");
              el2.classList.remove("yoyo");
              break;
            }

            case 1: {
       
              el.classList.remove("yoyo");
              el1.classList.add("yoyo");
              el2.classList.remove("yoyo");
              break;
            }
            case 2: {
       
              el.classList.remove("yoyo");
              el1.classList.remove("yoyo");
              el2.classList.add("yoyo");
              break;
            }
            default:
              break;
          }
        }}
      >
        <SwiperSlide>
          <Container image={orange} T1={"Quality is not optional"} T2="Leading Brand for Organic harvest" id="0" className="yoyo" />
        </SwiperSlide>
        <SwiperSlide>
          <Container image={Kiwi}   T1={"Boost your mood into organic food"} T2="Leading Brand for Organic harvest" id={"1"} />
        </SwiperSlide>
        <SwiperSlide>
          <Container image={grabs} T1={"Choose more healty way of life"} T2="Leading Brand for Organic Food" id={"2"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
