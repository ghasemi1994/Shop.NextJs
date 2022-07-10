import Head from "next/head";
import styles from "./index.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { AiFillStar } from "react-icons/ai";
import ProductViewer from "./components/ProductViewer";

export default function Index() {
 

  return (
    <>
      <Head>
        {" "}
        <title>فروشگاه بیوتی | محصولات</title>{" "}
      </Head>
      <div className="pt-3 px-5-lg">
        <div className="ai-center d-flex flex-wrap mb-5-lg">
          <nav className="py-2 px-5 px-0-lg grow-1 w-min-0">
            <div>
              <div
                className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events 
              swiper-container-free-mode swiper-container-rtl"
              >
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "auto", height: "auto" }}
                  >
                    <a
                      className="color-500 text-body-2 shrink-0"
                      href="#"
                      dideo-checked="true"
                    >
                      بیوتی
                      <span className="mx-3">/</span>
                    </a>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    style={{ width: "auto", height: "auto" }}
                  >
                    <a
                      className="color-500 text-body-2 shrink-0"
                      href="#"
                      dideo-checked="true"
                    >
                      زیبایی و سلامت<span className="mx-3">/</span>
                    </a>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "auto", height: "auto" }}
                  >
                    <a
                      className="color-500 text-body-2 shrink-0"
                      data-cro-id="pdp-breadcrumb-up"
                      href="#"
                      dideo-checked="true"
                    >
                      لوازم شخصی برقی<span className="mx-3">/</span>
                    </a>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "auto", height: "auto" }}
                  >
                    <a
                      className="color-500 text-body-2 shrink-0"
                      href="#"
                      dideo-checked="true"
                    >
                      اصلاح موی صورت
                      <span className="mx-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div
          className={`d-flex flex-column flex-row-lg ${styles.product_content_info_section}`}
        >
    
          <ProductViewer />

          <div className="grow-1 w-min-0">
            <div className="d-flex ai-center w-full px-5 px-0-lg">
              <div>
                <h1 className="text-h4 color-900 mb-2">
                  ماشین اصلاح کیمی مدل KM-5017
                </h1>
              </div>
            </div>
            <div className={styles.product_content_info_section_left}>
              <div
                className={`pb-3 w-min-0 mx-5 mx-0-lg pb-3-lg ${styles.product_content_variant_info} ${styles.product_content_wrapper}`}
              >
                <div className="ai-center d-none d-flex-lg ">
                  <span className="color-300 ml-2 text-body-2"></span>
                  <div className="bg-200 grow-1" style={{ height: "1px" }} />
                </div>
                <div className="mt-2 pb-3">
                  <div className="d-flex ai-center">
                    <div className="d-flex ai-center">
                      <div style={{ width: 16, height: 16 }} className="d-flex ai-center jc-center">
                        <AiFillStar size="124px" color="orange"/>
                      </div>
                      <p className="mr-1 text-body-2">۴</p>
                      <p className="mr-1 text-caption color-300">(۳۱۴۶)</p>
                      <div className="d-flex mr-1">
                        <svg
                          style={{
                            width: 16,
                            height: 16,
                            fill: "var(--color-icon-disable)",
                          }}
                        >
                          <use xlinkHref="#dotOutline" />
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex ai-center">
                      <p
                        data-cro-id="pdp-see-comments"
                        className="color-secondary-500 mx-1 pointer text-body-2"
                      >
                        ۲۱۱۰ دیدگاه
                      </p>
                      <div className="d-flex color-300">
                        <svg
                          style={{
                            width: 16,
                            height: 16,
                            fill: "var(--color-icon-disable)",
                          }}
                        >
                          <use xlinkHref="#dotOutline" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="color-secondary-500 mx-1 pointer text-body-2"
                      data-cro-id="pdp-questions"
                    >
                      ۸۸ پرسش
                    </p>
                  </div>
                  <div className="d-flex ai-center mt-2">
                    <div className="d-flex ml-1 color-hint-text-success">
                      <svg
                        style={{
                          width: 16,
                          height: 16,
                          fill: "var(--color-icon-success)",
                        }}
                      >
                        <use xlinkHref="#thumbsUp" />
                      </svg>
                    </div>
                    <p className="ml-2 color-600 text-body-2">
                      ۸۰% (۹۹۹) نفر از خریداران، این کالا را پیشنهاد کرده اند
                    </p>
                    <div>
                      <div>
                        <div className="d-flex pointer">
                          <svg
                            style={{
                              width: 18,
                              height: 18,
                              fill: "var(--color-icon-low-emphasis)",
                            }}
                          >
                            <use xlinkHref="#infoOutline" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.InfoSection_infoSection__spec}`}>
                <div className="color-500 text-body-2 my-4 mx-5 pointer d-none-lg d-flex ai-center jc-end">
                  گزارش نادرستی مشخصات
                  <div className="d-flex mr-1">
                    <svg
                      style={{
                        width: 18,
                        height: 18,
                        fill: "var(--color-icon-low-emphasis)",
                      }}
                    >
                      <use xlinkHref="#feedbackInfo" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={`mr-3-l ${styles.info_section_buy_box}`}>
                <div className="radius-medium-lg border-200-lg bg-000 grow-1 ">
                  <div className="break-words py-3 px-5 w-full d-flex ai-center jc-between user-select-none">
                    <h3 className="grow-1 text-h5 color-900">فروشنده</h3>
                  </div>
                  <div className="d-none d-block-lg d-none-lg">
                    <div className="break-words py-3">
                      <div className="d-flex ai-center grow-1">
                        <p className="grow-1 text-h5 color-900">
                          فروشندگان این کالا
                        </p>
                      </div>
                      <div className="mt-2 Title-module_Title__line__gGmPh Title-module_Title__line--red__jWT3P" />
                    </div>
                    <div className="radius-medium SellerSection_sellerSection__sellerListItem__Du4fP p-4">
                      <div className="d-flex jc-center jc-between-lg ai-center">
                        <div className="d-grid-lg grid-cols-3 ai-center grow-1">
                          <div
                            className="bg-000 overflow-y-auto radius-sm Popper-module_Popper__popper__GKn2x shadow-modal border-200 z-2 Popper-module_Popper__popper--hide-immediately__AQ-8N"
                            style={{ position: "absolute", left: 0, top: 0 }}
                          >
                            <div className="py-4 px-5 bg-000 pos-relative z-20 min-w-80-lg">
                              <div className="d-flex jc-between ai-center w-full text-h5">
                                فروشگاه پخش روزالینا
                              </div>
                              <p className="text-body-2 color-500">
                                عضو از ۳ سال و ۶ ماه
                              </p>
                              <div className="align-center my-2">
                                <p
                                  className="text-h1-extra"
                                  style={{ color: "var(--color-rating-4-5)" }}
                                >
                                  عالی
                                </p>
                                <p className="text-body1-strong">
                                  عملکرد کلی فروشنده
                                </p>
                              </div>
                              <div className="d-flex content-center mt-2 jc-between">
                                <div className="align-center">
                                  <p className="text-h5 color-500">۱۰۰٪</p>
                                  <p className="color-500 text-caption">
                                    تامین به موقع
                                  </p>
                                </div>
                                <div className="align-center">
                                  <p className="text-h5 color-500">۱۰۰٪</p>
                                  <p className="color-500 text-caption">
                                    تعهد ارسال
                                  </p>
                                </div>
                                <div className="align-center">
                                  <p className="text-h5 color-500">۱۰۰٪</p>
                                  <p className="color-500 text-caption">
                                    بدون مرجوعی
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pos-relative d-flex ai-center">
                            <div className="pos-relative">
                              <div className="d-flex">
                                <svg
                                  style={{
                                    width: 24,
                                    height: 24,
                                    fill: "var(--color-icon-high-emphasis)",
                                  }}
                                >
                                  <use xlinkHref="#seller" />
                                </svg>
                              </div>
                            </div>
                            <div className="mr-4">
                              <div className="d-flex ai-center mb-2 mb-1-lg">
                                <a
                                  href="https://www.digikala.com/seller/A7676/"
                                  dideo-checked="true"
                                >
                                  <p className="color-700 ml-2 text-subtitle">
                                    پخش روزالینا
                                  </p>
                                </a>
                              </div>
                              <div className="w-full d-flex ai-center content-center text-body-2">
                                <div className="pl-2 d-flex ai-center divider">
                                  <p
                                    className="ml-1 text-body2-strong"
                                    style={{ color: "var(--color-rating-3-4)" }}
                                  >
                                    ۹۰%
                                  </p>
                                  <p className="color-500 text-no-wrap">
                                    رضایت از کالا
                                  </p>
                                </div>
                                <div className="pr-2 d-flex ai-center">
                                  <p className="color-500 ml-1">عملکرد</p>
                                  <p
                                    className="text-no-wrap text-body2-strong"
                                    style={{ color: "var(--color-rating-4-5)" }}
                                  >
                                    عالی
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="ml-4 mr-3">
                              <li className="d-flex ai-center ml-3-lg text-delivery-express">
                                <div className="d-flex">
                                  <svg
                                    style={{
                                      width: 18,
                                      height: 18,
                                      fill: "var(--color-delivery-express)",
                                    }}
                                  >
                                    <use xlinkHref="#deliveryExpress" />
                                  </svg>
                                </div>
                                <p className="text-body-2 color-500 mr-2">
                                  ارسال دیجی‌کالا
                                </p>
                              </li>
                            </div>
                          </div>
                          <div className="mr-6 d-flex ai-center jc-center ai-center">
                            <div className="d-flex ml-2 color-700">
                              <svg style={{ width: 20, height: 20 }}>
                                <use xlinkHref="#guarantee" />
                              </svg>
                            </div>
                            <p className="text-subtitle color-700">
                              گارانتی اصالت و سلامت فیزیکی کالا
                            </p>
                          </div>
                        </div>
                        <div className="d-flex ai-center jc-end w-min-33-lg">
                          <div className="ml-6">
                            <div>
                              <div className="d-flex ai-center jc-start">
                                <span className="text-h4 ml-1 color-800">
                                  ۲۴۷,۰۰۰
                                </span>
                                <div className="d-flex ai-center jc-between">
                                  <div className="d-flex ai-center">
                                    <div className="d-flex mr-1">
                                      <svg
                                        style={{
                                          width: 14,
                                          height: 14,
                                          fill: "var(--color-icon-high-emphasis)",
                                        }}
                                      >
                                        <use xlinkHref="#toman" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <button
                              className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--primary__RKxUy radius-medium d-none d-flex-lg w-full"
                              data-add-to-cart-variant-id={30432361}
                            >
                              <div className="d-flex ai-center jc-center Button-module_btn__loading__47UHk">
                                <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                                <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                                <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                              </div>
                              <div className="d-flex ai-center jc-center relative grow-1">
                                افزودن به سبد
                              </div>
                            </button>
                            <button className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--primary__RKxUy radius-medium text-button-2 d-none-lg w-full">
                              <div className="d-flex ai-center jc-center Button-module_btn__loading__47UHk">
                                <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                                <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                                <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                              </div>
                              <div className="d-flex ai-center jc-center relative grow-1">
                                افزودن به سبد خرید
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="py-1 px-2 radius d-flex flex-row ai-center mt-3 mr-10 SellerSection_sellerSection__buyBoxPlus__X5P_8">
                        <span className="d-flex ai-center color-delivery-jet text-body2-strong ml-4">
                          <div className="d-flex ml-1">
                            <svg
                              style={{
                                width: 18,
                                height: 18,
                                fill: "var(--color-delivery-jet)",
                              }}
                            >
                              <use xlinkHref="#plus" />
                            </svg>
                          </div>
                          خدمات دیجی‌پلاس
                        </span>
                        <span className="d-flex ai-center color-500 text-caption">
                          امکان ارسال فوری (شهر تهران)
                        </span>
                      </div>
                    </div>
                    <span className="d-inline-flex ai-center pointer Anchor-module_Anchor--secondary__2Ou5G text-button-2 mt-3">
                      <span>مشاهده بیشتر</span>
                      <div className="d-flex">
                        <svg
                          style={{
                            width: 18,
                            height: 18,
                            fill: "var(--color-icon-secondary)",
                          }}
                        >
                          <use xlinkHref="#chevronLeft" />
                        </svg>
                      </div>
                    </span>
                  </div>          
                  <div>
                    <a
                      className="Link-module_Link__9P9LC"
                      target="_blank"
                      href="#"
                      dideo-checked="true"
                    >
                      <div
                        className="w-full px-4 d-flex"
                        data-cro-id="pdp-seller-info-cta"
                      >
                        <div className="py-3 d-flex grow-1 d-flex">
                          <div className="ml-4">
                            <div className="pos-relative">
                              <div className="d-flex">
                                <svg
                                  style={{
                                    width: 24,
                                    height: 24,
                                    fill: "var(--color-icon-high-emphasis)",
                                  }}
                                >
                                  <use xlinkHref="#seller" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex w-full">
                            <div>
                              <div className="d-flex ai-center mb-2 mb-1-lg">
                                <span>
                                  <p className="color-700 ml-2 text-subtitle">
                                   بیا تو بیوتی
                                  </p>
                                </span>
                              </div>
                              <div className="w-full d-flex ai-center content-center text-body-2">
                                <div className="pl-2 d-flex ai-center divider">
                                  <p
                                    className="ml-1 text-body2-strong"
                                    style={{ color: "var(--color-rating-3-4)" }}
                                  >
                                    ۸۶.۴%
                                  </p>
                                  <p className="color-500 text-no-wrap">
                                    رضایت از کالا
                                  </p>
                                </div>
                                <div className="pr-2 d-flex ai-center">
                                  <p className="color-500 ml-1">عملکرد</p>
                                  <p
                                    className="text-no-wrap text-body2-strong"
                                    style={{ color: "var(--color-rating-4-5)" }}
                                  >
                                    عالی
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full px-4 d-flex ai-center">
                    <div className="py-3 d-flex grow-1 border-t-200 d-flex ai-center">
                      <div className="ml-4">
                        <div className="d-flex">
                          <svg
                            style={{
                              width: 24,
                              height: 24,
                              fill: "var(--color-icon-high-emphasis)",
                            }}
                          >
                            <use xlinkHref="#guarantee" />
                          </svg>
                        </div>
                      </div>
                      <div className="d-flex w-full">
                        <p className="text-button-2 color-700">
                          گارانتی اصالت و سلامت فیزیکی کالا
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full px-4 pointer"
                    data-cro-id="pdp-shipment-info"
                  >
                    <div className="py-3 d-flex grow-1 border-t-200">
                      <div className="d-flex w-full">
                        <div className="d-flex flex-column w-full pos-relative pos-relative">
                          <span className="d-flex ai-center mb-1">
                            <div className="d-flex ml-3">
                              <svg
                                style={{
                                  width: 24,
                                  height: 24,
                                  fill: "var(--color-icon-secondary)",
                                }}
                              >
                                <use xlinkHref="#productAvailable" />
                              </svg>
                            </div>
                            <span className="text-subtitle-strong color-700">
                              موجود در انبار 
                            </span>
                          </span>
                          <ul className="d-flex flex-column">
                            <li className="d-flex ml-3 ai-center">
                              <div
                                className="pos-relative d-flex ai-center jc-center pos-relative d-flex ai-center jc-center as-stretch ml-3"
                                style={{ width: 24, minWidth: 24 }}
                              >
                                <div className="d-flex">
                                  <svg
                                    style={{
                                      width: 5,
                                      height: 5,
                                      fill: "var(--color-blue-primary)",
                                    }}
                                  >
                                    <use xlinkHref="#variationColor" />
                                  </svg>
                                </div>
                                <span
                                  className="pos-absolute d-block bg-200 top-0 ListItemBulletSlot_ListItemBulletSlot__line__Y_DnR"
                                  style={{ height: "calc(50% - 5px)" }}
                                />
                              </div>
                              <div className="d-flex mx-1">
                                <svg
                                  style={{
                                    width: 16,
                                    height: 16,
                                    fill: "var(--color-delivery-express)",
                                  }}
                                >
                                  <use xlinkHref="#deliveryExpress" />
                                </svg>
                              </div>
                              <p className="text-body-2 color-500 mr-1 ellipsis">
                                ارسال توسط فروشگاه
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex mr-auto color-400">
                          <svg
                            style={{
                              width: 24,
                              height: 24,
                              fill: "var(--color-icon-low-emphasis)",
                            }}
                          >
                            <use xlinkHref="#chevronLeft" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 d-flex ai-center">
                    <div className="py-3 d-flex grow-1 border-t-200 d-flex ai-center">
                      <div className="ml-4">
                        <div style={{ width: 24, height: 24 }}>
                          <img
                            className="w-100 d-inline-block lazyloaded"
                            data-src="/statics/img/svg/club-point.svg"
                            width={24}
                            height={24}
                            alt="دیجی‌کلاب"
                            style={{ objectFit: "contain" }}
                            src="/statics/img/svg/club-point.svg"
                          />
                        </div>
                      </div>
                      <div className="d-flex w-full">
                        <p className="text-button-2 color-700">
                          25 امتیاز خریداران 
                        </p>
                        <div className="mr-2 mt-1">
                          <div>
                            <div className="d-flex pointer">
                              <svg
                                style={{
                                  width: 18,
                                  height: 18,
                                  fill: "var(--color-icon-low-emphasis)",
                                }}
                              >
                                <use xlinkHref="#infoOutline" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pos-relative w-full w-auto-lg px-4-lg pb-4-lg">
                    <div className="py-3 px-5 p-0-lg pt-3-lg w-full w-auto-lg border-t-200-lg z-3 bg-000 shadow-fab-button shadow-none-lg BuyBoxFooter_buyboxFooter__actionWrapper__hIfpJ">
                      <div className="d-none-lg">
                        <div className="d-flex align-middle">
                          <div className="d-flex a-center flex-row-reverse mr-auto mb-3">
                            <div>
                              <div>
                                <div className="d-flex pointer">
                                  <svg
                                    style={{
                                      width: 18,
                                      height: 18,
                                      fill: "var(--color-icon-low-emphasis)",
                                    }}
                                  >
                                    <use xlinkHref="#infoOutline" />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="z-4 Tooltip_Tooltip__tooltip__MKAkT Tooltip_Tooltip__tooltip--inactive__TrLbR"
                                data-popper-reference-hidden="true"
                                data-popper-escaped="true"
                                data-popper-placement="bottom"
                                style={{
                                  position: "absolute",
                                  inset: "0px auto auto 0px",
                                  transform: "translate(0px, 200px)",
                                }}
                              >
                                این کالا توسط فروشنده آن، کیمویار تجارت،
                                قیمت‌گذاری شده‌ است.
                                <div />
                              </div>
                            </div>
                            <span className="text-caption color-500 ml-2">
                              قیمت فروشنده
                            </span>
                          </div>
                        </div>
                        <div className="d-flex ai-center mt-3-lg">
                          <div className="w-min-50 shrink-0">
                            <button className="relative d-flex ai-center user-select-none radius-medium text-button-2 d-none-lg w-full">
                              <div className="d-flex ai-center jc-center relative grow-1">
                                افزودن به سبد خرید
                              </div>
                            </button>
                          </div>
                          <div className="d-flex flex-column ai-end jc-start mr-auto text-h4 pr-4">
                            <div className="d-flex ai-center jc-end w-100">
                              <span className="line-through text-body-2 ml-1 color-300">
                                ۲۷۰,۰۰۰
                              </span>
                              <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700 shrink-0 mr-1">
                                <span>۱۰٪</span>
                              </div>
                            </div>
                            <div className="d-flex flex-row ai-center">
                              <span className="color-800 ml-1 text-h4">
                                ۲۴۳,۷۰۰
                              </span>
                              <div className="d-flex mr-1">
                                <svg
                                  style={{
                                    width: 14,
                                    height: 14,
                                    fill: "var(--color-icon-high-emphasis)",
                                  }}
                                >
                                  <use xlinkHref="#toman" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-none d-block-lg">
                        <div className="d-flex ai-center">
                          <div className="d-flex a-center">
                            <div>
                              <div>
                                <div className="d-flex pointer">
                                  <svg
                                    style={{
                                      width: 18,
                                      height: 18,
                                      fill: "var(--color-icon-low-emphasis)",
                                    }}
                                  >
                                    <use xlinkHref="#infoOutline" />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="z-4 Tooltip_Tooltip__tooltip__MKAkT Tooltip_Tooltip__tooltip--inactive__TrLbR"
                                data-popper-reference-hidden="false"
                                data-popper-escaped="false"
                                data-popper-placement="bottom"
                                style={{
                                  position: "absolute",
                                  inset: "0px auto auto 0px",
                                  transform: "translate(327px, 630px)",
                                }}
                              >
                                این کالا توسط فروشنده آن، کیمویار تجارت،
                                قیمت‌گذاری شده‌ است.
                                <div />
                              </div>
                            </div>
                            <span className="text-caption color-500 mr-2">
                              قیمت فروشنده
                            </span>
                          </div>
                          <div className="d-flex flex-column ai-end jc-start mr-auto text-h3">
                            <div className="d-flex ai-center jc-end w-100">
                              <span className="line-through text-body-2 ml-1 color-300">
                                ۲۷۰,۰۰۰
                              </span>
                              <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700 shrink-0 mr-1">
                                <span>۱۰٪</span>
                              </div>
                            </div>
                            <div className="d-flex flex-row ai-center">
                              <span className="color-800 ml-1 text-h4">
                                ۲۴۳,۷۰۰
                              </span>
                              <div className="d-flex mr-1">
                                <svg
                                  style={{
                                    width: 14,
                                    height: 14,
                                    fill: "var(--color-icon-high-emphasis)",
                                  }}
                                >
                                  <use xlinkHref="#toman" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                        <div className="d-flex ai-center">
                          <button
                            className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--primary__RKxUy radius-medium d-none d-flex-lg w-full"
                            data-cro-id="pdp-add-to-cart"
                            data-add-to-cart-variant-id={22355490}
                          >
                            <div className="d-flex ai-center jc-center Button-module_btn__loading__47UHk">
                              <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                              <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                              <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                            </div>
                            <div className="d-flex ai-center jc-center relative grow-1">
                              افزودن به سبد
                            </div>
                          </button>
                          <button
                            className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--primary__RKxUy radius-medium text-button-2 d-none-lg w-full"
                            data-cro-id="pdp-add-to-cart"
                          >
                            <div className="d-flex ai-center jc-center Button-module_btn__loading__47UHk">
                              <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                              <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                              <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N" />
                            </div>
                            <div className="d-flex ai-center jc-center relative grow-1">
                              افزودن به سبد خرید
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="Link-module_Link__9P9LC"
                  data-cro-id="pdp-how-pricing"
                  href="#"
                  dideo-checked="true"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
