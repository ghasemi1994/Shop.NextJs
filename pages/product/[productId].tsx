import Head from "next/head";
import styles from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { AiFillStar, AiOutlineLike } from "react-icons/ai";
import ProductViewer from "./components/productViewer/ProductViewer";
import BuyBox from "./components/BuyBox/BuyBox";
import SimilarProduct from "../../components/common/sliders/SimilarProducts/SimilarProduct";
import BuyBoxDetail from "./components/BuyBoxDetail/BuyBoxDetail";
import { useRouter } from "next/router";
import products from "../../constants/product";

export default function Index() {
  const [product, setProduct] = useState<any>({});
  const router = useRouter();
  const { productId } = router.query;
  useEffect(() => {
    var filter = products.find((a) => a.id === Number(productId));
    setProduct(filter);
  });

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
          <ProductViewer images={product?.images} />

          <div className="grow-1 w-min-0">
            <div className="d-flex ai-center w-full px-5 px-0-lg">
              <div>
                <h1 className="text-h4 color-900 mb-2">{product?.name}</h1>
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
                      <div
                        style={{ width: 16, height: 16 }}
                        className="d-flex ai-center jc-center"
                      >
                        <AiFillStar size="124px" color="orange" />
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
                      <AiOutlineLike size={18} />
                    </div>
                    <p className="ml-2 color-600 text-body-2">
                      ۸۰% (۹۹۹) نفر از خریداران، این کالا را پیشنهاد کرده اند.
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

              <BuyBox price={product?.price}/>
            </div>
          </div>
        </div>

        <BuyBoxDetail introduce={product?.introduce} />

        <SimilarProduct />
      </div>
    </>
  );
}
