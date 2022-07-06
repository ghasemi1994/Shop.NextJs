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
  return (
    <>
      <div className="w-full py-4 bg-000 radius-large-lg border-200-lg mt-4 mt-6-lg">
        <div className="d-flex jc-center ai-center">
          <div className="d-flex ml-2"></div>
          <p className="text-h3 color-900">محبوب‌ترین برندها</p>
        </div>
        <div className="mt-3 overflow-hidden w-full">
          <div>
            <Swiper
              modules={[FreeMode, Autoplay , A11y]}
              spaceBetween={1}
              loop={true}              
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
              centeredSlides={true}
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/5518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/5518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
                      src="https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
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
