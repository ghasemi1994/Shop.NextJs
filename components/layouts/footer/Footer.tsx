import React from "react";
import { MdExpandLess } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-000 border-t border-n-200 pt-8 mt-12">
      <div className="container-4xl-w mx-auto">
        <div className="px-5">
          <div className="d-flex jc-between ai-center select-none">
            <div className="ml-4" style={{ height: "30px" }}>
              <h3>سریع بیا تو بيوتی </h3>
            </div>
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn
             Button-module_btn--neutralOutlined__TvBmP Button-module_btn--black__DAqpj radius-medium d-flex jc-center ai-center px-3 px-4-sm py-1 radius pointer"
            >
              <div className="d-flex ai-center jc-center relative grow-1 font-primary">
                <span className="color-400 ml-2">بازگشت به بالا</span>
                <div className="d-flex">
                  <MdExpandLess size={20} className="color-400" />
                </div>
              </div>
            </button>
          </div>

          <div className="mb-8 mt-4 mt-3-md mb-0-md d-flex ai-center flex-wrap flex-nowrap-lg text-body-2 color-700">
            <p className="shrink-0" data-cro-id="footer-phonenumber">
              تلفن پشتیبانی ۰۰۰۰ - ۰۲۱
            </p>
            <div className="px-5 color-400 d-none d-block-md"> | </div>
            <p className="w-full mt-1 w-auto-md mt-0-md">
              ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
            </p>
          </div>

          <div className="d-flex my-8 ai-center jc-between select-none d-flex-lg">
            <a
              className="d-flex py-3 flex-column ai-center jc-between text-center grow-1"
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
              <p className="text-caption color-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
            </a>
            <a
              className="d-flex py-3 flex-column ai-center jc-between text-center grow-1"
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
              <p className="text-caption color-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
            </a>
            <a
              className="d-flex py-3 flex-column ai-center jc-between text-center grow-1"
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
              <p className="text-caption color-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
            </a>
            <a
              className="d-flex py-3 flex-column ai-center jc-between text-center grow-1"
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
                  src="/images/footer/days-return.svg"
                />
              </div>
              <p className="text-caption color-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
            </a>
            <a
              className="d-flex py-3 flex-column ai-center jc-between text-center grow-1"
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
              <p className="text-caption color-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
            </a>
          </div>

          <div className="d-flex flex-wrap w-full jc-between mb-8">
            <div className="d-block grow-1-lg w-50 w-unset-lg">
              <p className="color-700 text-h5 mb-2 d-block">با بیوتی</p>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-with-digikala"
                href="#"
                dideo-checked="true"
              >
                اتاق خبر بیوتی
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-with-digikala"
                href="#"
                dideo-checked="true"
              >
                فروش در بیوتی
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-with-digikala"
                href="#"
                dideo-checked="true"
              >
                فرصت‌های شغلی
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-with-digikala"
                href="#"
                dideo-checked="true"
              >
                تماس با بیوتی
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-with-digikala"
                href="#"
                dideo-checked="true"
              >
                درباره بیوتی
              </a>
            </div>

            <div className="d-block grow-1-lg w-50 w-unset-lg">
              <p className="color-700 text-h5 mb-2 d-block">خدمات مشتریان</p>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-customer-service"
                href="/faq/"
                dideo-checked="true"
              >
                پاسخ به پرسش‌های متداول
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-customer-service"
                href="/faq/question/83/"
                dideo-checked="true"
              >
                رویه‌های بازگرداندن کالا
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-customer-service"
                href="/page/terms/"
                dideo-checked="true"
              >
                شرایط استفاده
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-customer-service"
                href="/page/privacy/"
                dideo-checked="true"
              >
                حریم خصوصی
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-customer-service"
                href="/page/bug-report/"
                dideo-checked="true"
              >
                گزارش باگ
              </a>
            </div>

            <div className="d-block grow-1-lg w-50 w-unset-lg d-none d-block-md">
              <p className="color-700 text-h5 mb-2 d-block">
                راهنمای خرید از بیوتی
              </p>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-buying-guide"
                href="/faq/question/649/"
                dideo-checked="true"
              >
                نحوه ثبت سفارش
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-buying-guide"
                href="/faq/question/79/"
                dideo-checked="true"
              >
                رویه ارسال سفارش
              </a>
              <a
                className="text-body-1 color-500 mb-2 d-block"
                data-cro-id="footer-buying-guide"
                href="/faq/question/81/"
                dideo-checked="true"
              >
                شیوه‌های پرداخت
              </a>
            </div>

            <div className="w-100 w-unset-lg shrink-0">
              <div className="w-full d-flex d-block-lg flex-row-lg jc-between ai-start mt-8 mt-0-sm">
                <h4 className="mb-3 text-h5 color-700">همراه ما باشید!</h4>
                <div className="d-flex ai-center">
                  <a
                    className="ml-6 ml-8-lg"
                    data-cro-id="footer-instagram"
                    href="#"
                    dideo-checked="true"
                  >
                    <div className="d-flex">
                      <svg
                        style={{
                          width: "40px",
                          height: "40px",
                          fill: "var(--color-icon-low-emphasis)",
                        }}
                      >
                        <use href="#instagram"></use>
                      </svg>
                    </div>
                  </a>
                  <a
                    className="ml-6 ml-8-lg"
                    data-cro-id="footer-twitter"
                    href="#"
                    dideo-checked="true"
                  >
                    <div className="d-flex">
                      <svg
                        style={{
                          width: "40px",
                          height: "40px",
                          fill: "var(--color-icon-low-emphasis)",
                        }}
                      >
                        <use href="#instagram"></use>
                      </svg>
                    </div>
                  </a>
                  <a
                    className="ml-6 ml-8-lg"
                    data-cro-id="footer-linkedin"
                    href="#"
                    dideo-checked="true"
                  >
                    <div className="d-flex">
                      <svg
                        style={{
                          width: "40px",
                          height: "40px",
                          fill: "var(--color-icon-low-emphasis)",
                        }}
                      >
                        <use href="#instagram"></use>
                      </svg>
                    </div>
                  </a>
                  <a
                    className=""
                    data-cro-id="footer-aparat"
                    href="#"
                    dideo-checked="true"
                  >
                    <div className="d-flex">
                      <svg
                        style={{
                          width: "40px",
                          height: "40px",
                          fill: "var(--color-icon-low-emphasis)",
                        }}
                      >
                        <use href="#instagram"></use>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-column flex-row-lg mb-7 px-5-lg radius color-000 select-none py-2 ai-center jc-between"
            style={{ backgroundColor: "#3c4b6d" }}
          >
            <div className="d-flex ai-center color-white mb-4 mb-0-lg">
              <div
                className="shrink-0"
                style={{ width: "44px", height: "44px" }}
              >
                <h2>بیوتی</h2>
              </div>
              <div className="text-h3 shrink-0 mr-4">دانلود اپلیکیشن</div>
            </div>
          </div>

          <div className="d-flex ai-start jc-between border-t py-8 border-n-200 flex-wrap flex-nowrap-lg">
            <div className="ml-10-lg ml-0">
              <h1 className="mb-2 text-body1-strong">
                فروشگاه اینترنتی بیوتی، بررسی، انتخاب و خرید آنلاین
              </h1>
              <p className="color-500 text-body-2">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی بیوتی سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              </p>
            </div>
            <div className="w-full w-auto-lg d-flex ai-center mt-4 mt-0-lg jc-center jc-end-lg"></div>
            <div className="w-full w-auto-lg d-flex ai-center mt-4 mt-0-lg jc-center jc-end-lg">
              <div className="pointer p-2 p-4-lg d-flex ai-center jc-center border-200 radius mr-2">
                <div style={{ width: "75px", height: "75px" }}>
                  <img src="https://i-wordpress.ir/woodland/zomorod/wp-content/uploads/2020/01/samandehi.png" className="w-100" style={{objectFit:"contain"}}/>
                </div>
              </div>
              <div className="pointer p-2 p-4-lg d-flex ai-center jc-center border-200 radius mr-2">
                <div style={{ width: "75px", height: "75px" }}>
                <img src="https://i-wordpress.ir/woodland/zomorod/wp-content/uploads/2020/01/enamad.png" className="w-100" style={{objectFit:"contain"}}/>
                </div>
              </div>
              <a
                className="pointer p-2 p-4-lg d-flex ai-center jc-center border-200 radius mr-2"
                target=""
                href="#"
                dideo-checked="true"
              >
                <div style={{ width: "75px", height: "75px" }}>
                <img src="https://i-wordpress.ir/woodland/zomorod/wp-content/uploads/2020/01/samandehi.png" className="w-100" style={{objectFit:"contain"}}/>
                </div>
              </a>
            </div>
          </div>

          <div className="d-flex text-caption color-500 text-center ai-center flex-column jc-between border-t py-8">
            (فروشگاه آنلاین بيوتی)
          </div>
        </div>
      </div>
    </footer>
  );
}
