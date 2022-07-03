import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";

interface IProps {
  className?: string;
}
export default function PupolarBrands(props: IProps) {
  return (
    <>
      <div className="w-full py-6 bg-000 radius-large-lg border-200-lg mt-4 mt-6-lg">
        <div className="d-flex jc-center ai-center">
          <div className="d-flex ml-2"></div>
          <p className="text-h3 color-900">محبوب‌ترین برندها</p>
        </div>
        <div className="mt-3 overflow-hidden w-full">
          <div>
            <Swiper
              modules={[FreeMode , Autoplay]}
              slidesPerView={3}
              spaceBetween={1}
              freeMode={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="br-list-horizontal-0">
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
                      src="/images/brands/brand01.webp"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="br-list-horizontal-0">
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
                      src="/images/brands/brand02.webp"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="br-list-horizontal-0">
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
                      src="/images/brands/brand03.webp"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="br-list-horizontal-0">
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
                      src="/images/brands/brand04.webp"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="br-list-horizontal-0">
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
                      src="/images/brands/brand05.webp"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="br-list-horizontal-0">
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
                      src="/images/brands/brand06.webp"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
