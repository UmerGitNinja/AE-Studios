"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./card";
import "./slickslider.css";

const SlickSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      slidesPerView={2}
      spaceBetween={50}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1424: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card
          label="Drizl"
          description=" We really enjoyed working with AE. Smart, calm, and respectful,
                rock stars in our area of interest (computer vision / machine
                learning) and deeply committed to quality."
          authorName="RC Carter"
          authortitle="Founder"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          label="Drizl"
          description=" We really enjoyed working with AE. Smart, calm, and respectful,
             rock stars in our area of interest (computer vision / machine
             learning) and deeply committed to quality."
          authorName="RC Carter"
          authortitle="Founder"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          label="Drizl"
          description=" We really enjoyed working with AE. Smart, calm, and respectful,
              rock stars in our area of interest (computer vision / machine
              learning) and deeply committed to quality."
          authorName="RC Carter"
          authortitle="Founder"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          label="Drizl"
          description=" We really enjoyed working with AE. Smart, calm, and respectful,
              rock stars in our area of interest (computer vision / machine
              learning) and deeply committed to quality."
          authorName="RC Carter"
          authortitle="Founder"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          label="Drizl"
          description=" We really enjoyed working with AE. Smart, calm, and respectful,
              rock stars in our area of interest (computer vision / machine
              learning) and deeply committed to quality."
          authorName="RC Carter"
          authortitle="Founder"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SlickSlider;
