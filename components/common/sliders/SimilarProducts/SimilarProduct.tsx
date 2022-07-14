import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper";
import products from "../../../../constants/product";
import { sepratorMoney } from "../../../../utils/TextConvertor";

export default function SimilarProduct() {
  return (
    <>
      <div className="d-flex flex-column pos-relative overflow-hidden w-full pt-2 border-200-lg radius-medium-lg mt-4-lg pb-3">
        <div className="break-words py-3 px-5 py-2 user-select-none">
          <div className="d-flex ai-center grow-1">
            <p className="grow-1 text-h5 color-900">کالاهای مشابه</p>
          </div>
          <div
            className="mt-2"
            style={{
              backgroundColor: "var(--color-primary-700)",
              height: "0.2rem",
              width: "7rem",
            }}
          ></div>
        </div>
        <div>
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            spaceBetween={5}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 7,
              },
            }}
          >
            {products.map((item, index) => (
              <SwiperSlide className="" key={index}>
                <a
                  href="#"
                  className="d-block pointer pos-relative bg-000 overflow-hidden grow-1 py-3 px-4 px-2-lg h-full-lg border-l"
                >
                  <article className="overflow-hidden d-flex flex-column ai-stretch jc-start h-full">
                    <div className="d-flex ai-center jc-start mb-1">
                      <div className="text-body2-extra grow-1">
                        <br />
                      </div>
                    </div>
                    <div className="d-flex grow-1 pos-relative flex-column">
                      <div className="">
                        <div className="d-flex ai-stretch flex-column pos-relative mb-1">
                          <div className="d-flex ai-start mx-auto">
                            <div>
                              <div className="d-flex ai-center jc-start gap-1 flex-wrap pos-absolute top-0 right-0 z-1">
                                <br />
                                <br />
                              </div>
                              <div style={{ width: 150, height: 150 }}>
                                <img
                                  className="w-100 radius-medium d-inline-block lazyloaded"
                                  width={150}
                                  height={150}
                                  src={item.image}
                                  alt={item.description}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                        <div>
                          <h3 className="ellipsis-2 text-body2-strong color-700">
                            {item.description}
                          </h3>
                        </div>
                        <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                          <div className="d-flex ai-center jc-between">
                            <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                              <span> {sepratorMoney(item?.price)}</span>
                              <div className="d-flex">
                                <svg
                                  style={{
                                    width: 16,
                                    height: 16,
                                    fill: "var(--color-icon-high-emphasis)",
                                  }}
                                >
                                  <use xlinkHref="#toman" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex ai-center jc-between pl-5" />
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
