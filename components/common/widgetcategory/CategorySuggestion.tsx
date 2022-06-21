import React from "react";
import Image from "next/image";
import styles from './CategorySuggestion.module.css';

export default function CategorySuggestion() {
  return (
    <div className="w-full bg-000 px-5 px-4-lg py-3 pt-4-lg pb-10-lg ">
      <div className="text-center py-3 py-4-lg">
        <h2 className="text-h3 color-900">دسته‌بندی‌های پیشنهادی</h2>
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
