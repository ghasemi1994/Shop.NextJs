import styles from "../../index.module.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductViewer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div
      className={`ml-4-lg shrink-0 ${styles.product_content_info_section_right}`}
    >
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        centeredSlides={true}
        className="mb-5"
      >
        <SwiperSlide className="d-flex jc-center">
          <img src="/images/product/pr1.jpg" style={{ width: "350px" }} />
        </SwiperSlide>
        <SwiperSlide className="d-flex jc-center">
          <img src="/images/product/pr2.jpg" style={{ width: "350px" }} />
        </SwiperSlide>
        <SwiperSlide className="d-flex jc-center">
          <img src="/images/product/pr3.jpg" style={{ width: "350px" }} />
        </SwiperSlide>
        <SwiperSlide className="d-flex jc-center">
          <img src="/images/product/pr4.jpg" style={{ width: "350px" }} />
        </SwiperSlide>
        <SwiperSlide className="d-flex jc-center">
          <img src="/images/product/pr5.jpg" style={{ width: "350px" }} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
      >
        <SwiperSlide className="border-200 p-1 pointer radius">
          <img src="/images/product/pr1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="border-200 p-1 pointer radius">
          <img src="/images/product/pr2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="border-200 p-1 pointer radius">
          <img src="/images/product/pr3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="border-200 p-1 pointer radius">
          <img src="/images/product/pr4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
