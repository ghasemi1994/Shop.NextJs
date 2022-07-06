import React from "react";
import styles from "./ServiceMain.module.css";

export default function ServiceMain() {
  return (
    <>
      <div className="d-flex my-8 ai-center jc-between select-none d-flex-lg gap-3 flex-wrap gap-4 gap-3-lg gap-4-xl mx-5 mx-0-lg">
        <a
          className="d-flex py-3 flex-row ai-center jc-center text-center grow-1 bg-100 radius-large"
          data-cro-id="footer-features"
          href="#"
          dideo-checked="true"
        >
          <div style={{ width: "56px", height: "56px" }}>
            <img
              className="w-100 ls-is-cached lazyloaded"
              width="56"
              height="56"
              alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
              style={{ objectFit: "cover" }}
              src="/images/footer/express-delivery.svg"
            />
          </div>
          <div className="mr-1 color-700">
            <h2>تحویل سریع</h2>
            <p className="text-caption">در کمترین زمان ممکن</p>
          </div>
        </a>
        <a
          className="d-flex py-3 flex-row ai-center jc-center text-center grow-1 bg-100 radius-large"
          data-cro-id="footer-features"
          href="#"
          dideo-checked="true"
        >
          <div style={{ width: "56px", height: "56px" }}>
            <img
              className="w-100 ls-is-cached lazyloaded"
              width="56"
              height="56"
              alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
              style={{ objectFit: "cover" }}
              src="/images/footer/cash-on-delivery.svg"
            />
          </div>
          <div className="mr-1 color-700">
            <h2>تضمین قیمت</h2>
            <p className="text-caption ">بهترین قیمت بازار</p>
          </div>
        </a>
        <a
          className="d-flex py-3 flex-row ai-center jc-center text-center grow-1 bg-100 radius-large"
          data-cro-id="footer-features"
          href="#"
          dideo-checked="true"
        >
          <div style={{ width: "56px", height: "56px" }}>
            <img
              className="w-100 ls-is-cached lazyloaded"
              width="56"
              height="56"
              alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
              style={{ objectFit: "cover" }}
              src="/images/footer/support.svg"
            />
          </div>
          <div className="mr-1 color-700">
            <h2>پشتیبانی عالی</h2>
            <p className="text-caption">24 ساعته، 7 روز هفته</p>
          </div>
        </a>
 
        <a
          className="d-flex py-3 flex-row ai-center jc-center text-center grow-1 bg-100 radius-large"
          data-cro-id="footer-features"
          href="#"
          dideo-checked="true"
        >
          <div style={{ width: "56px", height: "56px" }}>
            <img
              className="w-100 ls-is-cached lazyloaded"
              width="56"
              height="56"
              alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
              style={{ objectFit: "cover" }}
              src="/images/footer/original-products.svg"
            />
          </div>
          <div className="color-700">
            <h2>اصالت کالاها</h2>
            <p className="text-caption color-700">از برترین برندها</p>
          </div>
        </a>
      </div>
    </>
  );
}
