import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styles from "./SuggestionSlider.module.css";

export default function SuggestionSlider() {
  return (
    <>
      <div className="text-center py-3 py-4-lg">
        <h2 className="text-h3 color-900">پیشنهاد های ویژه</h2>
      </div>

      <div className="d-flex flex-nowrap py-3 py-5-lg pr-0 jc-stretch overflow-hidden pos-relative mt-4 mt-6-lg radius-large-lg">
        <div
          className={`swiper-container swiper-container-initialized 
          swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode swiper-container-rtl ${styles.widget_amazing_mini_carousel}`}
        >
          <Swiper
            loop={true}
            autoHeight={true}
            slidesPerView={7}
            spaceBetween={2}
            centeredSlides={true}
            className="swiper-wrapper"
          >
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/1.png"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/1.png"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/2.png"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/2.png"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/3.webp"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/3.webp"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/4.png"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/4.png"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/5.webp"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/5.webp"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/3.webp"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/3.webp"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <a
                href="#"
                className="d-block py-3 bg-white px-4-lg"
                style={{ width: "180px" }}
              >
                <article className="h-full d-flex flex-column justify-content-start align-item-stretch">
                  <div className="d-flex flex-column position-relative grow-1">
                    <div className="d-flex align-item-stretch flex-column position-relative mb-1">
                      <div className="d-flex align-items-start mx-auto">
                        <div style={{ width: "150px", height: "150px" }}>
                          {/* <Image
                            src="/images/slider/suggestion/2.png"
                            alt="no-image"
                            layout="fill"
                          /> */}
                          <img
                            src="/images/slider/suggestion/2.png"
                            alt="no-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow-1 d-flex flex-column ai-stretch jc-start">
                    <div className="pt-1 d-flex flex-column ai-stretch jc-between">
                      <div className="d-flex ai-center jc-between">
                        <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700">
                          <span>۳۵٪</span>
                        </div>
                        <div className="d-flex ai-center jc-end gap-1 color-700 color-400 text-h5 grow-1">
                          <span>۳۴۱,۰۰۰</span>
                          <div className="d-flex">
                            <svg
                              style={{
                                width: "16px",
                                height: "16px",
                                fill: "var(--color-icon-high-emphasis)",
                              }}
                            >
                              <use href="#toman"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ai-center jc-between pl-5">
                        <div className="color-300 line-through as-end mr-auto text-body-2">
                          ۵۲۷,۰۰۰
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div>
                        <div className="pos-relative bg-100 visibility-hidden ProductPromotionTimeline_ProductPromotionTimeline__progress___kNa4">
                          <div
                            className="pos-absolute bg-p-700 h-full left-0 top-0 ProductPromotionTimeline_ProductPromotionTimeline--active__7GUCJ"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
