import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper";
import styles from "./SuggestionSlider.module.css";
import products from "../../../../constants/product";

export default function SuggestionSlider() {
  return (
    <>
      <div className="w-full d-flex flex-column jc-center align-items py-4 bg-000 radius-large-lg border-200-lg mt-4 mt-6-lg">
        <div className="d-flex jc-between jc-center-lg ai-center px-2 px-5-lg pos-relative">
          <div className="d-flex jc-center ai-center">
            <div className="d-flex ml-2"></div>
            <p className="text-h3 color-900">پيشنهاد های ویژه</p>
          </div>
          <a
            className="d-inline-flex ai-center pointer text-button-1 pos-absolute-lg left-0 top-0 pl-4 shrink-0"
            href="#"
            dideo-checked="true"
          >
            <span>مشاهده همه</span>
          </a>
        </div>
        <div className="d-flex flex-nowrap py-3 py-5-lg pr-0 jc-stretch overflow-hidden pos-relative mt-4 mt-6-lg radius-large-lg">
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
                slidesPerView: 6,
              },
            }}
          >
            {products?.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={`/product/${item.id}`}
                  className="d-block pointer pos-relative bg-000 overflow-hidden grow-1 py-3 px-4 px-2-lg h-full-lg border-l"
                >
                  <article className="overflow-hidden d-flex flex-column ai-stretch jc-start h-full">
                    <div className="d-flex ai-center jc-start mb-1">
                      <div className="ml-1" style={{ width: 64, height: 14 }}>
                        <img
                          className="w-100 lazyloaded"
                          data-src="/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                          width={64}
                          height={14}
                          style={{ objectFit: "cover" }}
                          src="/images/svg/SpecialSell.svg"
                        />
                      </div>
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
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                        <div>
                          <h3 className="ellipsis-2 text-body2-strong color-700">
                            گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 5G دو سیم
                            کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت                    
                          </h3>
                        </div>
                        <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                          <div className="d-flex ai-center jc-between">
                            <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                              <span>۴٪</span>
                            </div>
                            <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                              <span>۳۹,۲۹۹,۰۰۰</span>
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
                          <div className="d-flex ai-center jc-between pl-5">
                            <div className="color-300 line-through as-end mr-auto text-body-2">
                              {item.price}
                            </div>
                          </div>
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
