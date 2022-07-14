import React from "react";
import styles from "./BuyBoxDetail.module.css";

interface IProps {
  introduce: string;
}
export default function BuyBoxDetail(props: IProps) {
  return (
    <>
      <div
        className="w-full d-none d-block-lg pos-sticky z-2 bg-000 Tabs_Tabs__UIuM4 mt-5"
        style={{ top: 72 }}
      >
        <div className="">
          <ul className="d-flex pos-relative border-b-200">
            <div>
              <li
                className="pos-relative px-4 py-2 d-flex flex-row ai-center grow-1 jc-center grow-0-lg color-primary-500 text-subtitle-strong pointer text-body2-strong"
                data-cro-id="pdp-scroll-menu"
              >
                معرفی
                <div className="pos-absolute bottom-0 opacity-1 Tab_Tab__border__Ya_JB" />
              </li>
            </div>
            <div>
              <li
                className="pos-relative px-4 py-2 d-flex flex-row ai-center grow-1 jc-center grow-0-lg text-subtitle color-500 pointer text-body2-strong"
                data-cro-id="pdp-scroll-menu"
              >
                مشخصات
                <div className="pos-absolute bottom-0 opacity-0 Tab_Tab__border__Ya_JB" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="d-flex w-full">
        <div className="grow-1 w-min-0">
          <article
            className="mt-4-lg px-5 px-0-lg pb-5"
            style={{ borderBottom: "8px solid var(--color-neutral-100)" }}
            id="PdpShortReview"
          >
            <div className="break-words py-3">
              <div className="d-flex ai-center grow-1">
                <h2 className="grow-1 text-h5">معرفی</h2>
              </div>
              <div className="mt-2 Title-module_Title__line__gGmPh Title-module_Title__line--red__jWT3P" />
            </div>
            <div className="text-body-1 color-800">{props?.introduce}</div>
            <div className="d-flex content-between w-full overflow-x-scroll overflow-x-hidden-lg mt-4" />
          </article>
          <section
            className="mt-4-lg px-5 px-0-lg pb-5 ProductContent_PdpProductContent__sectionBorder__mVezV"
            id="specification"
          >
            <div className="d-none d-block-lg">
              <div className="break-words py-3 d-none d-block-lg">
                <div className="d-flex ai-center grow-1">
                  <h2 className="grow-1 text-h5 color-900">مشخصات</h2>
                </div>
                <div className="mt-2 Title-module_Title__line__gGmPh Title-module_Title__line--red__jWT3P" />
              </div>
            </div>
            <div className="mt-4 grow-1">
              <div className="d-flex flex-column flex-row-lg pb-6 py-4-lg PdpSpecification_PdpSpecification__main__QRzvW">
                <p
                  className={`w-full ml-12-lg text-h5 color-700 shrink-0 mb-3 mb-0-lg ${styles.pd_Specification}`}
                >
                  مشخصات
                </p>
                <div className="w-full w-auto-lg grow-1">
                  <div className="w-full d-flex last ">
                    <p className="ml-4 text-body-1 color-500 py-2 py-3-lg p-2-lg shrink-0 ">
                      وزن
                    </p>
                    <div className="border-b py-2 py-3-lg grow-1">
                      <p className="d-flex ai-center w-full text-body-1 color-900 break-words">
                        ۳ گرم
                      </p>
                    </div>
                  </div>
                  <div className="w-full d-flex last ">
                    <p className="ml-4 text-body-1 color-500 py-2 py-3-lg p-2-lg shrink-0 ">
                      ماندگاری
                    </p>
                    <div className="border-b py-2 py-3-lg grow-1">
                      <p className="d-flex ai-center w-full text-body-1 color-900 break-words">
                        ۱۲ ساعت{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full d-flex last ">
                    <p className="ml-4 text-body-1 color-500 py-2 py-3-lg p-2-lg shrink-0 ">
                      شماره رنگ
                    </p>
                    <div className="border-b py-2 py-3-lg grow-1">
                      <p className="d-flex ai-center w-full text-body-1 color-900 break-words">
                        ۲۲{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full d-flex last ">
                    <p className="ml-4 text-body-1 color-500 py-2 py-3-lg p-2-lg shrink-0 ">
                      شماره مجوز
                    </p>
                    <div className="border-b py-2 py-3-lg grow-1">
                      <p className="d-flex ai-center w-full text-body-1 color-900 break-words">
                        {" "}
                        ۳۴/۱۳۶۳۱-۲{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full d-flex last ">
                    <p className="ml-4 text-body-1 color-500 py-2 py-3-lg p-2-lg shrink-0 ">
                      سایر مشخصات
                    </p>
                    <div className="border-b py-2 py-3-lg grow-1">
                      <p className="d-flex ai-center w-full text-body-1 color-900 break-words">
                        سایز کوچک ماندگاری مناسب فاقد هرگونه فلزات سنگین
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="d-inline-flex ai-center pointer text-button-2">
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
          </section>
        </div>
        <div
          className={`d-none mr-10 pos-relative ${styles.minibox_buybox__wrapper}`}
        >
          <div className="pos-sticky " style={{ top: "135.031px" }}>
            <div
              className={`pl-5 mb-2 mt-5 text-body-2 bg-100 radius p-4 border-200 ${styles.miniBuyBox}`}
            >
              <div
                className="d-flex ai-center py-2 text-h5"
                style={{ color: "rgb(230, 18, 61)" }}
              >
                فروش ویژه
              </div>
              <div className="d-flex border-b-200 pb-3 mb-3">
                <div
                  className="radius shrink-0"
                  style={{ width: 80, height: 80 }}
                >
                  <img
                    className="w-100 d-inline-block ls-is-cached lazyloaded"
                    data-src="https://dkstatics-public.digikala.com/digikala-products/119900648.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                    width={80}
                    height={80}
                    alt="رژ لب جامد الیزا مدل Mini شماره ۲۲ "
                    style={{ objectFit: "contain" }}
                    src="https://dkstatics-public.digikala.com/digikala-products/119900648.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                  />
                </div>
                <div className="d-flex flex-column mr-5">
                  <p className="ellipsis-2">
                    رژ لب جامد الیزا مدل Mini شماره ۲۲{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex mb-2">
                <div className="ml-2 d-flex ai-center jc-center">
                  <div className="d-flex">
                    <svg
                      style={{
                        width: 18,
                        height: 18,
                        fill: "var(--color-icon-high-emphasis)",
                      }}
                    >
                      <use xlinkHref="#guarantee" />
                    </svg>
                  </div>
                </div>
                <div className="color-700 text-body-2">
                  گارانتی اصالت و سلامت فیزیکی کالا{" "}
                </div>
              </div>
              <div className="d-flex mb-2">
                <div className="ml-2 d-flex ai-center jc-center">
                  <div className="d-flex">
                    <svg
                      style={{
                        width: 18,
                        height: 18,
                        fill: "var(--color-icon-low-emphasis)",
                      }}
                    >
                      <use xlinkHref="#productIdeal" />
                    </svg>
                  </div>
                </div>
                <div className="color-700 text-body-2">موجود در انبار ما </div>
              </div>
              <div className="pos-relative w-full w-auto-lg">
                <div className="py-3 px-5 p-0-lg pt-3-lg w-full w-auto-lg border-t-200-lg z-3 bg-000 shadow-fab-button shadow-none-lg BuyBoxFooter_buyboxFooter__actionWrapper__hIfpJ">
                  <div className="d-none-lg">
                    <div className="d-flex align-middle" />
                    <div className="d-flex ai-center mt-3-lg">
                      <div className="w-min-50 shrink-0">
                        <button
                          className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--primary__RKxUy radius-medium d-none d-flex-lg w-full"
                          data-add-to-cart-variant-id={7622509}
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
                      <div className="d-flex flex-column ai-end jc-start mr-auto text-h4 pr-4">
                        <div className="d-flex ai-center jc-end w-100">
                          <span className="line-through text-body-2 ml-1 color-300">
                            ۲۵,۰۰۰
                          </span>
                          <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700 shrink-0 mr-1">
                            <span>۲۴٪</span>
                          </div>
                        </div>
                        <div className="d-flex flex-row ai-center">
                          <span className="color-800 ml-1 text-h4">۱۹,۰۰۰</span>
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
                      <div className="d-flex flex-column ai-end jc-start mr-auto text-h3">
                        <div className="d-flex ai-center jc-end w-100">
                          <span className="line-through text-body-2 ml-1 color-300">
                            ۲۵,۰۰۰
                          </span>
                          <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700 shrink-0 mr-1">
                            <span>۲۴٪</span>
                          </div>
                        </div>
                        <div className="d-flex flex-row ai-center">
                          <span className="color-800 ml-1 text-h4">۱۹,۰۰۰</span>
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
                        data-cro-id="pdp-mini-add-to-cart"
                        data-add-to-cart-variant-id={7622509}
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
                        data-cro-id="pdp-mini-add-to-cart"
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
            <div />
          </div>
        </div>
      </div>
    </>
  );
}
