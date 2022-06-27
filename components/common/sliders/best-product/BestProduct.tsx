import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
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
      <div className="px-2 mt-5 mt-7-lg gap-4 gap-y-0 gap-0-lg">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 3,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="swiper-container"
        >
          <SwiperSlide className={styles.best_product_slider}>
            <div>
              <a
                className="d-flex MainBestSellingWidget_MainBestSellingWidget__item__2xxWA"
                href="/product/dkp-5086666/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A8%D9%84%D9%88%D8%AA%D9%88%D8%AB%DB%8C-%D9%85%D8%AF%D9%84-inpods-i12/"
                dideo-checked="true"
              >
                <div className="d-flex MainBestSellingWidget_MainBestSellingWidget__item__2xxWA">
                  <div
                    className="radius shrink-0 ml-3"
                    style={{ width: "86px", height: "86px" }}
                  >
                    <img
                      className="w-100 d-inline-block lazyloaded"
                      width="86"
                      height="86"
                      alt="هندزفری بلوتوثی مدل &nbsp;inpods 12"
                      style={{ objectFit: "contain" }}
                      src="/images/product/product-01.jpg"
                    />
                  </div>
                  <span className="color-secondary-500 text-h2-extra ml-3 d-flex ai-center">
                    1
                  </span>
                  <div className="grow-1 d-flex flex-column jc-center pos-relative MainBestSellingWidget_MainBestSellingWidget__itemDescription__GGOui">
                    <p className="text-body-2 color-700 ellipsis-2 overflow-hidden">
                      محصول اول
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}
