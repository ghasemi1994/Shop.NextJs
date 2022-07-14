import styles from "../../index.module.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

interface IProps {
  images: Array<string>;
}
export default function ProductViewer(props: IProps) {
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
        {props?.images?.map((item, index) => (
          <SwiperSlide className="d-flex jc-center" key={index}>
            <img src={item} style={{ width: "350px" }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
      >
        {props?.images?.map((item, index) => (
          <SwiperSlide
            className="border-200 p-1 pointer radius"
            key={index + 200}
          >
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
