import React from "react";
import Image from "next/image";
import styles from "./Category.module.css";

interface IProps {
  className?: string;
}
export default function Category(props: IProps) {
  return (
    <div className="w-full bg-white py-3 d-flex flex-column align-items-center">
      <style jsx>{`
        .hp-categories-icons {
          width: 20%;
        }
      `}</style>

      <div className="text-center mb-9-lg mb-6">
        <h3 className="text-h3 color-900">دسته بندی های بيوتی</h3>
      </div>
      <div className="category-container w-full d-flex flex-wrap align-items-start flex-row">
        <span className="hp-categories-icons">
          <a href="#" className="d-flex flex-column align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ width: "170px", height: "170px" }}
            >
              <Image
                src="/images/categories/category6.png"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </div>
            <p className="text-body2-strong color-900 mt-2 text-center fs-12">
              زیبایی و سلامت
            </p>
          </a>
        </span>

        <span className="hp-categories-icons">
          <a href="#" className="d-flex flex-column align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ width: "170px", height: "170px" }}
            >
              <Image
                src="/images/categories/category2.png"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </div>
            <p className="text-body2-strong color-900 mt-2 text-center">
             لوازم برقی
            </p>
          </a>
        </span>

        <span className="hp-categories-icons">
          <a href="#" className="d-flex flex-column align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ width: "170px", height: "170px" }}
            >
              <Image
                src="/images/categories/category3.png"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </div>
            <p className="text-body2-strong color-900 mt-2 text-center">
             عطر و ادکلن
            </p>
          </a>
        </span>

        <span className="hp-categories-icons">
          <a href="#" className="d-flex flex-column align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ width: "170px", height: "170px" }}
            >
              <Image
                src="/images/categories/category4.jpg"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </div>
            <p className="text-body2-strong color-900 mt-2 text-center">
              اصلاح صورت 
            </p>
          </a>
        </span>

        <span className="hp-categories-icons">
          <a href="#" className="d-flex flex-column align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ width: "170px", height: "170px" }}
            >
              <Image
                src="/images/categories/category5.jpg"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </div>
            <p className="text-body2-strong color-900 mt-2 text-center">
              زیبایی و سلامت
            </p>
          </a>
        </span>     

      </div>
    </div>
  );
}
