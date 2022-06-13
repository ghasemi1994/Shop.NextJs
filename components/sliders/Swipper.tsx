import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import './Swipper.module.css'

export default function Swipper() {
  return (
    <Swiper
      className="swiper-container-pointer-events"
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      spaceBetween={0}
      loop={true}
      dir="rtl"
    >
      <SwiperSlide>
        <Image
          src="/images/slider/slider1.jpg"
          alt="Landscape picture"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image
          src="/images/slider/slider2.jpg"
          alt="Landscape picture"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image
          src="/images/slider/slider3.jpg"
          alt="Landscape picture"
          layout="fill"
        />
      </SwiperSlide>
    </Swiper>
  );
}
