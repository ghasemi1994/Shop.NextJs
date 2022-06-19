import React from "react";
import Image from "next/image";
interface IProps {
  className?: string;
}
export default function PupolarBrands(props: IProps) {
  return (
 
      <div className="w-full bg-white py-3 d-flex flex-column align-items-center p-4">
        {/* <div className="text-center mb-9-lg mb-6">
          <h3 className="text-h3 color-900">برند های محبوب</h3>
        </div> */}
        <div className="d-flex flex-row flex-wrap alig-items-center w-100 justify-content-between">
          <div className="brand-list__item">
            <a href="#" className="brand-list__item-link">
              <Image
                src="/images/brands/brand01.webp"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </a>
          </div>
          <div className="brand-list__item">
            <a href="#" className="brand-list__item-link">
              <Image
                src="/images/brands/brand02.webp"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </a>
          </div>
          <div className="brand-list__item">
            <a href="#" className="brand-list__item-link">
              <Image
                src="/images/brands/brand03.webp"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </a>
          </div>
          <div className="brand-list__item">
            <a href="#" className="brand-list__item-link">
              <Image
                src="/images/brands/brand04.webp"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </a>
          </div>

          <div className="brand-list__item">
            <a href="#" className="brand-list__item-link">
              <Image
                src="/images/brands/brand05.webp"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </a>
          </div>

          <div className="brand-list__item">
            <a href="#" className="brand-list__item-link">
              <Image
                src="/images/brands/brand06.webp"
                alt="no-image"
                layout="fill"
                width={170}
                height={170}
              />
            </a>
          </div>
        </div>
      </div>
    
  );
}
