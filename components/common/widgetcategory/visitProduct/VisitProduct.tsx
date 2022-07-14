import React from "react";
import styles from "./VisitProduct.module.css";
import { BiChevronLeft } from "react-icons/bi";
import products from "../../../../constants/product";
import Link from "next/link";
export default function VisitProduct() {
  return (
    <>
      <div
        className={`d-grid bg-100 grid-cols-1 radius-large-lg border-200-lg overflow-hidden grid-cols-4-lg mt-6 ${styles.widget_visit__product_main}`}
      >
        {[1, 2, 3, 4].map((num, idx) => (
          <div key={idx}>
            <div
              className="d-flex flex-column w-full h-full px-5 py-2 bg-000"
              key={idx + 100}
            >
              <div className="d-flex ai-center">
                <div className="d-flex flex-column mb-2 w-full">
                  <div className="w-full d-flex ai-center jc-between">
                    <div className="d-flex ai-center">
                      <div className="user-select-none"></div>
                      <h4 className="text-h5 color-800">ريمل</h4>
                    </div>
                  </div>
                  <p className="text-caption color-500">
                    بر اساس بازدیدهای شما
                  </p>
                </div>
              </div>

              <div
                className={`d-grid bg-100 gap-px min-h-62 grid-cols-2 flex-1 h-full ${styles.widget_visit__product_content}`}
              >
                {products.slice(11, 15).map((item, index) => (
                  <a
                    key={index}
                    target="blank"
                    className="w-full d-flex ai-center bg-000 jc-center p-2 pos-relative"
                    href={`/product/${item.id}`}
                  >
                    <span className="d-flex ai-center radius rounded-none-lg h-full">
                      <div className="h-full">
                        <img
                          className="w-100 w-full ratio-1-1 d-inline-block lazyloaded"
                          alt=""
                          src={item.image}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </span>
                  </a>
                ))}
              </div>

              <div className="d-flex ai-center jc-center mt-1 mb-3">
                <a
                  className="d-inline-flex ai-center pointer Anchor-module_Anchor--secondary__2Ou5G text-button-2"
                  href="/search/category-mobile-phone/"
                  dideo-checked="true"
                >
                  <span>مشاهده</span>
                  <BiChevronLeft />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
