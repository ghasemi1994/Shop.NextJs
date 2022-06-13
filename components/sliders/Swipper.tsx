import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Swipper() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      spaceBetween={30}
    >
      <SwiperSlide>
        <img src="/images/slider/slider1.jpg" alt="تصوير" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/slider2.jpg" alt="تصوير" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/slider3.jpg" alt="تصوير" />
      </SwiperSlide>
    </Swiper>
  );
}
