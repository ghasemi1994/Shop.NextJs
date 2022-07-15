import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import "./Swipper.module.css";
import styles from "./Swipper.module.css";

export default function Swipper() {
  return (
    <div
      className={`d-flex overflow-hidden pos-relative ${styles.main_home_slider}`}
    >
      <div className="pos-relative w-full dk-main-slider">
        <Swiper
          className={styles.main_home_slider}
          modules={[Autoplay, Pagination, FreeMode]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
        >
          <SwiperSlide className={styles.main_home_slider}>
            <img
              src="/images/slider/slider1.jpg"
              className="w-100 h-100 d-inline-block"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.main_home_slider}>
            <img
              src="/images/slider/slider2.jpg"
              className="w-100 h-100 d-inline-block"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.main_home_slider}>
            <img
              src="/images/slider/slider3.jpg"
              className="w-100 h-100 d-inline-block"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.main_home_slider}>
            <img
              src="/images/slider/slider4.jpg"
              className="w-100 h-100 d-inline-block"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="pos-absolute right-0 bottom-42 d-flex ai-center z-1 opacity-0 MainHomeTopSlider_MainHomeTopSlider__navigator__UgHs_">
        <div className="slider-arrow d-flex pointer ai-center jc-center z-1 bg-000 radius-circle color-700 mr-10 ml-1 MainHomeTopSlider_MainHomeTopSlider__arrow__YScA1">
          <div className="d-flex">
            <svg
              style={{
                width: "24px",
                height: "24px",
                fill: "var(--color-icon-high-emphasis)",
              }}
            >
              <use href="#chevronRight"></use>
            </svg>
          </div>
        </div>
        <div className="slider-arrow d-flex pointer ai-center jc-center z-1 bg-000 radius-circle color-700 mr-1 MainHomeTopSlider_MainHomeTopSlider__arrow__YScA1">
          <div className="d-flex">
            <svg
              style={{
                width: "24px",
                height: "24px",
                fill: "var(--color-icon-high-emphasis)",
              }}
            >
              <use href="#chevronLeft"></use>
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
}
