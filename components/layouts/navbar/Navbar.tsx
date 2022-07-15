import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useOnclickOutside } from "../../../hooks/useOnClickOutside";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "../../../store/store";
import { setShow, getShowState } from "../../../store/slices/menuSlice";
import Link from "next/link";
import { categories } from "../../../constants/category";
interface IProps {
  className?: string;
}
export default function Navbar(props: IProps) {
  const [hide, setHide] = useState<boolean>(false);
  const { show } = useSelector(getShowState);
  const dispatch = useDispatch();
  const notifyDomNode = useOnclickOutside(() => {
    if (show) dispatch(setShow(false));
  });
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHide(false);
      } else {
        setHide(true);
      }
      prevScrollpos = currentScrollPos;
    });
  }, [hide]);

  return (
    <section
      className={`wrapper ${hide ? styles.navbar_header_desktop__hide : ""} ${
        styles.navbar_mobile_hide
      }`}
      style={{ height: "55px" }}
    >
      <div className="header-item-right">
        <h2 className="h2">
          <Link href="/">بیا تو بیوتی</Link>
        </h2>
      </div>
      <div className="header-item-center">
        <div className={`overlay ${show ? "active" : ""}`}></div>
        <nav
          className={`menu ${show ? "active" : ""}`}
          id="menu"
          ref={notifyDomNode}
        >
          <div className="menu-mobile-header">
            <button type="button" className="menu-mobile-arrow">
              <i className="ion ion-ios-arrow-back"></i>
            </button>
            <div className="menu-mobile-title"></div>
            <button type="button" className="menu-mobile-close">
              <i className="ion ion-ios-close"></i>
            </button>
          </div>
          <ul className="menu-section">
            <li className="menu-item">
              <Link href="/">خانه</Link>
              <link></link>
            </li>
            <li className="menu-item-has-children">
              <a href="#">
                محصولات <MdKeyboardArrowDown />
              </a>
              <div className="menu-subs menu-mega menu-column-4">
                <div className="list-item text-center">
                  <a href="#">
                    {/* <Image
                        src="/images/product/product-01.jpg"
                        loading="lazy"
                        alt="Product Images"                        
                        width="20"
                        height="30"
                      /> */}
                    <h4 className="title">Product One</h4>
                  </a>
                </div>
                <div className="list-item text-center">
                  <a href="#">
                    {/* <Image
                        src="/images/product/product-01.jpg"
                        loading="lazy"
                        alt="Product Images"
                        width="20px"
                        height="20px"
                      /> */}
                    <h4 className="title">Product Two</h4>
                  </a>
                </div>
                <div className="list-item text-center">
                  <a href="#">
                    {/* <Image
                        src="/images/product/product-01.jpg"
                        loading="lazy"
                        alt="Product Images"
                        layout="fill"
                      /> */}
                    <h4 className="title">Product Three</h4>
                  </a>
                </div>
                <div className="list-item text-center">
                  <a href="#">
                    {/* <Image
                        src="/images/product/product-01.jpg"
                        loading="lazy"
                        alt="Product Images"
                        layout="fill"
                      /> */}
                    <h4 className="title">Product Four</h4>
                  </a>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children">
              <a href="#">
                دسته بندی <MdKeyboardArrowDown />
              </a>
              <div className="menu-subs menu-mega menu-column-4">
                <div className="list-item d-grid gap-4" style={{gridTemplateColumns:"140px 140px"}}>
                  {categories?.map((item, index) => (
                    <div className="" key={item.id}>
                      <h3 className="title">{item.title}</h3>
                      <ul>
                        {item?.children?.map((sub, idx) => (
                          <li key={idx}>
                            <a href="#">{sub.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="menu-item-has-children">
              <a href="#">
                حساب کاربری <MdKeyboardArrowDown />
              </a>
              <div className="menu-subs menu-column-1">
                <ul>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Questions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Term of Cookies</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a href="#">منابع</a>
            </li>
            <li className="menu-item">
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="header-item-left">
        <a href="#" className="menu-icon">
          <i className="ion ion-md-search"></i>
        </a>
        <a href="#" className="menu-icon">
          <i className="ion ion-md-heart"></i>
        </a>
        <a href="#" className="menu-icon">
          <i className="ion ion-md-cart"></i>
        </a>
        <button type="button" className="menu-mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div> */}
    </section>
  );
}
