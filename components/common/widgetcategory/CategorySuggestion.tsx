import React from "react";
import Image from "next/image";
import styles from "./CategorySuggestion.module.css";

export default function CategorySuggestion() {
  return (
    <div className="w-full d-flex flex-column jc-center align-items py-4 bg-000 mt-4 mt-6-lg">
      <div className="d-flex jc-between jc-center-lg ai-center px-2 px-5-lg pos-relative">
        <div className="d-flex jc-center ai-center mb-4">
          <div className="d-flex ml-2 "></div>
          <p className="text-h3 color-900">دسته بندی پيشنهادی</p>
        </div>    
      </div>
      <div className="d-grid grid-cols-2 grid-cols-4-lg gap-4 gap-3-lg gap-4-xl mx-5 mx-0-lg">
        <a href="#" className="w-full d-block position-relative">
          <img
            style={{ borderRadius: "15px" }}
            src="/images/suggestionCategory/1.jpg"
            alt="no-image"
            className="w-100 h-full lazyloaded"
          />
          {/* <Image
                src="/images/suggestionCategory/1.jpg"
                alt="no-image"
                layout="fill"
             
              /> */}
        </a>
        <a href="#" className="w-full d-block position-relative">
          <img
            style={{ borderRadius: "15px" }}
            src="/images/suggestionCategory/2.jpg"
            alt="no-image"
            className="w-100 h-full lazyloaded"
          />
          {/* <Image
                src="/images/suggestionCategory/1.jpg"
                alt="no-image"
                layout="fill"
             
              /> */}
        </a>
        <a href="#" className="w-full d-block position-relative">
          <img
            style={{ borderRadius: "15px" }}
            src="/images/suggestionCategory/3.jpg"
            alt="no-image"
            className="w-100 h-full lazyloaded"
          />
          {/* <Image
                src="/images/suggestionCategory/1.jpg"
                alt="no-image"
                layout="fill"
             
              /> */}
        </a>
        <a href="#" className="w-full d-block position-relative">
          <img
            style={{ borderRadius: "15px" }}
            src="/images/suggestionCategory/4.jpg"
            alt="no-image"
            className="w-100 h-full lazyloaded"
          />
          {/* <Image
                src="/images/suggestionCategory/1.jpg"
                alt="no-image"
                layout="fill"
             
              /> */}
        </a>
      </div>
    </div>
  );
}
