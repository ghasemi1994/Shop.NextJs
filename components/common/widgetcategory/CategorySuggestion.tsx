import React from "react";
import Image from "next/image";

export default function CategorySuggestion() {
  return (
    <div className="radius-large-lg position-relative px-5 px-0-lg pb-3 pb-0-lg category-sugges">
      <div className="text-center py-3 py-4-lg">
        <h2 className="text-h3 color-900">دسته‌بندی‌های پیشنهادی</h2>
      </div>
      <div className="d-grid">
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
