import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./BestProduct.module.css";

export default function BestProduct() {
  return (
    <div className="w-full d-flex flex-column jc-center align-items py-4 bg-000 radius-large-lg border-200-lg mt-4 mt-6-lg">
      <div className="d-flex jc-between jc-center-lg ai-center px-2 px-5-lg pos-relative">
        <div className="d-flex jc-center ai-center">
          <div className="d-flex ml-2"></div>
          <p className="text-h3 color-900">پرفروش‌ ترین کالاها</p>
        </div>
        <a
          className="d-inline-flex ai-center pointer text-button-1 pos-absolute-lg left-0 top-0 pl-4 shrink-0"
          href="#"
          dideo-checked="true"
        >
          <span>مشاهده همه</span>
        </a>
      </div>
      <div className="d-flex overflow-x-auto overflow-y-hidden hide-scrollbar px-2 mt-5 mt-7-lg gap-4 gap-y-0 gap-0-lg">
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode swiper-container-rtl">
          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
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
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            dir="rtl"
          >
            <SwiperSlide>
              <div>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/2.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      1
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/1.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      2
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/4.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      3
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/4.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      1
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/5.webp"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      2
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/3.webp"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      3
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/3.webp"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      1
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/2.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      2
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/5.webp"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      3
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/1.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      1
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/5.webp"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      2
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/3.webp"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      3
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/2.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      1
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/1.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      2
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className={`d-flex ${styles.best_selling_item}`}
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <div
                      className="radius shrink-0 ml-3"
                      style={{ width: "86px", height: "86px" }}
                    >
                      <img
                        className="w-100 d-inline-block lazyloaded"
                        width="86"
                        height="86"
                        alt=""
                        style={{ objectFit: "contain" }}
                        src="/images/slider/suggestion/4.png"
                      />
                    </div>
                    <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                      3
                    </span>
                    <div
                      className={`grow-1 d-flex flex-column jc-center pos-relative ${styles.best_selling_item_line}`}
                    >
                      <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                        محصول اول در حال تست در گريد مي باشد. شما هم تست كنيد.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
