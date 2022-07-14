import React from "react";
import styles from "../../index.module.css";
import { BsShieldFillCheck, BsCheckLg, BsStarFill } from "react-icons/bs";
import { sepratorMoney } from "../../../../utils/TextConvertor";

interface IProps {
  price: number;
}
export default function BuyBox(props: IProps) {
  return (
    <div className={`mr-3-l ${styles.info_section_buy_box}`}>
      <div className="radius-medium-lg border-200-lg bg-000 grow-1 ">
        <div>
          <a href="#">
            <div
              className="w-full px-4 d-flex"
              data-cro-id="pdp-seller-info-cta"
            >
              <div className="py-3 d-flex grow-1 d-flex">
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
                        <p className="color-500 text-no-wrap">رضایت از کالا</p>
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
            <div className="ml-2">
              <div className="d-flex">
                <BsShieldFillCheck
                  size={15}
                  color="var(--color-icon-high-emphasis)"
                />
              </div>
            </div>
            <div className="d-flex w-full">
              <p className="text-button-2 color-700">
                گارانتی اصالت و سلامت فیزیکی کالا
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 pointer" data-cro-id="pdp-shipment-info">
          <div className="py-3 d-flex grow-1 border-t-200">
            <div className="d-flex w-full">
              <div className="d-flex flex-column w-full pos-relative pos-relative">
                <span className="d-flex ai-center mb-1">
                  <div className="d-flex ml-2">
                    <BsCheckLg
                      size={15}
                      color="var(--color-icon-high-emphasis)"
                    />
                  </div>
                  <span className="text-subtitle-strong color-700">
                    موجود در انبار ما
                  </span>
                </span>
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
            <div className="ml-2">
              <BsStarFill size={15} color="var(--color-icon-high-emphasis)" />
            </div>
            <div className="d-flex w-full">
              <p className="text-button-2 color-700">25 امتیاز خریداران</p>
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
            <div className="d-none d-block-lg">
              <div className="d-flex ai-center">
                <div className="d-flex a-center">
                  <span className="text-caption color-500 mr-2">
                    قیمت محصول
                  </span>
                </div>
                <div className="d-flex flex-column ai-end jc-start mr-auto text-h3">
                  <div className="d-flex ai-center jc-end w-100">
                    <span className="line-through text-body-2 ml-1 color-300">
                      {sepratorMoney(props?.price)}
                    </span>
                    <div className="px-1 color-white radius-large text-body2-strong d-flex ai-center jc-center ProductPrice_ProductPrice__discountWrapper__bx4mc bg-p-700 shrink-0 mr-1">
                      <span>۱۰٪</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row ai-center">
                    <span className="color-800 ml-1 text-h4">
                      {sepratorMoney(props?.price)}
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
                  className="relative d-flex ai-center user-select-none Button-module_btn__daEdK 
                  text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--primary__RKxUy radius-medium d-none d-flex-lg w-full"
                >
                  <div className="d-flex ai-center jc-center relative grow-1">
                    افزودن به سبد
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
