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
      <div className={`d-flex flex-noerap py-3 position-relative`}>
        <Swiper
          autoHeight={true}
          slidesPerView={7}
          spaceBetween={2}
          centeredSlides={true}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
          className="p-3"
          style={{ background: "#FB9DAB" }}
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
                        <Image
                          src="/images/slider/suggestion/1.png"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
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
                        <Image
                          src="/images/slider/suggestion/2.png"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
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
                        <Image
                          src="/images/slider/suggestion/3.webp"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
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
                        <Image
                          src="/images/slider/suggestion/4.png"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
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
                        <Image
                          src="/images/slider/suggestion/5.webp"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
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
                        <Image
                          src="/images/slider/suggestion/3.webp"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
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
                        <Image
                          src="/images/slider/suggestion/2.png"
                          alt="no-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-1 d-flex flex-column align-items-center align-items-stretch justify-content-start">
                  <div className="d-flex justify-content-between ">
                    <div className="off">
                      <span className="badge bg-danger">28%</span>
                    </div>
                    <div className="price color-700">
                      <span>333.333</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pl-5">
                    <div className="color-300 line-through as-end mr-auto text-body-2">
                      ۳۵,۵۰۰,۰۰۰
                    </div>
                  </div>
                </div>
              </article>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
