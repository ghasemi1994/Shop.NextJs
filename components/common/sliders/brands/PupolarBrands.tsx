import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, A11y } from "swiper";

interface IProps {
  className?: string;
}
export default function PupolarBrands(props: IProps) {
  const brands = [
    "/images/brands/1.png",
    "/images/brands/2.jpg",
    "/images/brands/3.png",
    "/images/brands/4.png",
    "/images/brands/5.png",
    "/images/brands/6.jpg",
    "/images/brands/7.png",
    "/images/brands/8.png",
    "/images/brands/9.png",
    "/images/brands/10.png",
    "/images/brands/11.jpg",
    "/images/brands/12.png",
  ];
  return (
    <>
      <div className="w-full py-4 bg-000 radius-large-lg border-200-lg mt-4 mt-6-lg">
        <div className="d-flex jc-center ai-center">
          <div className="d-flex ml-2">
            <svg
              style={{
                width: 24,
                height: 24,
                fill: "var(--color-icon-rating-0-2)",
              }}
            >
              <use xlinkHref="#topBrands" />
            </svg>
          </div>
          <p className="text-h3 color-900">محبوب‌ترین برندها</p>
        </div>
        <div className="mt-3 overflow-hidden w-full">
          <div>
            <Swiper
              modules={[FreeMode, Autoplay, A11y]}
              spaceBetween={1}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 3,
                },
                480: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 6,
                },
                1280: {
                  slidesPerView: 7,
                },
              }}
              centeredSlides={false}
            >
              {brands.map((item, index) => (
                <SwiperSlide className="br-list-horizontal-0" key={index}>
                  <a
                    className="px-4 py-1 overflow-hidden d-flex ai-center jc-center h-full shrink-0 br-list-horizontal-0"
                    data-cro-id="hp-favorited-barnds"
                    href="#"
                    dideo-checked="true"
                  >
                    <div
                      className="d-flex ai-center jc-center"
                      style={{ width: "110px", height: "110px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        src={item}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
