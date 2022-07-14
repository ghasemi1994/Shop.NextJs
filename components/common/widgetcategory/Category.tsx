import React from "react";
import Image from "next/image";
import styles from "./Category.module.css";
import { categories } from "../../../constants/category";

interface IProps {
  classNameName?: string;
}
export default function Category(props: IProps) {
  return (
    <div className="w-full d-flex flex-column jc-center align-items py-4 bg-000 mt-4 mt-6-lg">
      <div className="d-flex jc-center ai-center mb-4">
        <div className="d-flex ml-2 ">
          <svg
            style={{
              width: "24px",
              height: "24px",
              fill: "var(--color-icon-rating-0-2)",
            }}
          >
            <use href="#topBrands"></use>
          </svg>
        </div>
        <p className="text-h3 color-900">دسته بندی های بیوتی</p>
      </div>
      <div className="w-full d-flex ai-start jc-between flex-wrap gap-5 gap-y-6 gap-0-lg gap-y-8-lg">
        {categories?.map((item, index) => (
          <span
            key={index}
            data-cro-id="hp-categories-icons"
            className="WidgetMainCategory_WidgetMainCategory__box__Q3xg0"
          >
            <a
              className="d-flex flex-column ai-center user-select-none w-full p-0-lg mx-0-lg"
              href="#"
              dideo-checked="true"
            >
              <div
                className="d-flex ai-center jc-center"
                style={{ width: "135px", height: "135px" }}
              >
                <img
                  className="w-100 h-100 d-inline-block lazyloaded"
                  width="170"
                  height="170"
                  alt="کالای دیجیتال"
                  style={{ objectFit: "contain" }}
                  src="/images/categories/category1.png"
                />
              </div>
              <p className="text-body2-strong color-900 mt-2 align-center">
                {item.title}
              </p>
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
