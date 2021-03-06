import React from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import styles from "./TopHeader.module.css";
import { useDispatch, useSelector } from "../../../store/store";
import { setShow, getShowState } from "../../../store/slices/menuSlice";
export default function TopHeader() {
  const { show } = useSelector(getShowState);
  const dispatch = useDispatch(); 
  return (
    <div
      className={`w-full d-flex flex-column bg-000 pos-relative top-header ${styles.top_header_desktop}`}
      style={{ borderBottom: "1px solid #f8f8f8" }}
    >
      <div className="w-full bg-000 pos-relative z-5">
        <div className=" d-flex w-full container-4xl-w mx-auto pos-relative jc-between px-4-md grow-1">
          <div
            className={`w-full py-3 d-flex pos-relative z-2 ${styles.top_header__container}`}
          >
            <div className="d-flex flex-1 ai-center grow-1">
              <a
                className="ml-5 shrink-0"
                data-cro-id="header-digikala"
                href="#"
                dideo-checked="true"
              >
                <div>
                  <img
                    src="/images/logo/logo.png"
                    alt="site-logo"
                    style={{ objectFit: "fill" }}
                    width={70}
                  />
                </div>
              </a>
              <div className="grow-1 ml-auto">
                <div className="pos-relative" style={{ width: "600px" }}>
                  <div
                    style={{ height: "44px" }}
                    data-cro-id="searchbox-click"
                    className="d-flex ai-center  bg-100 ellipsis grow-1 radius px-2 px-4-lg text-body-2"
                  >
                    <div className="d-flex ai-center jc-between grow-1 w-min-0">
                      <div className="d-flex pointer">
                        <BsSearch size={20} color="#a1a3a8" />
                      </div>
                      <span
                        data-cro-id="searchbox-type"
                        className="grow-1 px-2 px-4-lg ellipsis"
                      >
                        <div className="color-500 d-flex ai-center text-body-2">
                          ??????????
                        </div>
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-000 overflow-y-auto radius-md Popper-module_Popper__popper__GKn2x shadow-modal border-200 z-2 top-0  Popper-module_Popper__popper--animated-inactive__V7ulk"
                    style={{ position: "absolute", left: "0px", top: "0px" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="d-flex ai-center jc-end">
              <div className="header-item-left">
                <a href="#" className="menu-icon">
                  <i className="ion ion-md-search"></i>
                </a>
                <a href="#" className="menu-icon">
                  <i className="ion ion-md-heart"></i>
                </a>
                <a href="#" className="menu-icon">
                  <i className="ion ion-md-cart"></i>
                </a>
                <button
                  type="button"
                  className="menu-mobile-toggle"
                  onClick={() => dispatch(setShow(!show))}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <a
                className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-2 Button-module_btn--medium__7lzYn Button-module_btn--neutralOutlined__TvBmP Button-module_btn--black__DAqpj radius-medium whitespace-nowrap shrink-0 ml-2 ml-0-lg"
                data-cro-id="header-profile"
                href="#"
                dideo-checked="true"
              >
                <div className="d-flex ai-center jc-center Button-module_btn__loading__47UHk">
                  <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N"></div>
                  <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N"></div>
                  <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N"></div>
                </div>
                <div className="d-flex ai-center jc-center relative grow-1">
                  <div className="d-flex ml-2">
                    <HiOutlineLogin size={20} />
                  </div>
                  ???????? | ????????? ??????
                </div>
              </a>
              <span className="bg-200 mx-3 d-none d-block-lg"></span>
              <div className="pos-relative d-flex flex-column">
                <a
                  className="pos-relative d-inline-flex py-2 pr-2 pl-0 p-2-lg bg-000 radius"
                  data-cro-id="header-cart"
                  href="#"
                  dideo-checked="true"
                >
                  <div className="d-flex">
                    <BsCart4 size={25} color="#a1a3a8" />
                  </div>
                </a>
                <div className=" bg-000 radius shadow-3-bottom pos-absolute z-1 d-none">
                  <div className="d-flex ai-center py-2 px-3">
                    <a
                      className="d-flex ai-center mr-auto text-body2-strong color-secondary-500"
                      data-cro-id="header-see-cart"
                      href="#"
                      dideo-checked="true"
                    >
                      ????????????????? ?????? ????????
                      <div className="d-flex">svg</div>
                    </a>
                  </div>
                  <div className="overflow-auto">
                    <div className="py-6 px-0-lg bg-000 radius-lg">
                      <a
                        className="radius-medium bg-000 shadow-2-bottom shadow-none-lg d-block border px-4 py-3 mx-10 mx-0-lg d-block d-none-lg mx-5-xs mb-9"
                        href="#"
                        dideo-checked="true"
                      >
                        <div className="break-words py-3">
                          <div className="d-flex ai-center grow-1">
                            <div className="d-flex shrink-0 ml-2">svg</div>
                            <p className="grow-1 text-h5 color-900">
                              ???????? ???? ???????? ????????????
                            </p>
                            <div className="d-flex mr-2 shrink-0">svg</div>
                          </div>
                          <div className="pr-7 text-body-2 color-500">
                            ???????? ???????????? ???????????????? ???? ????????????? ???? ?????? ???????? ?????? ??????????
                            ????????????????? ???????? ????????.
                          </div>
                        </div>
                      </a>
                      <div className="d-flex jc-center">
                        <div style={{ width: "200px", height: "150px" }}></div>
                      </div>
                      <p className="text-h4 color-800 align-center mt-6">
                        ?????? ???????? ?????? ???????? ??????!
                      </p>
                    </div>
                  </div>
                  <div className="d-flex ai-center py-2 px-3 border-t">
                    <a
                      className="relative d-flex ai-center user-select-none Button-module_btn__daEdK text-button-1 Button-module_btn--large__D38zo Button-module_btn--primary__RKxUy radius-medium mr-auto"
                      data-cro-id="header-submit-order"
                      href="#"
                      dideo-checked="true"
                    >
                      <div className="d-flex ai-center jc-center Button-module_btn__loading__47UHk">
                        <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N"></div>
                        <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N"></div>
                        <div className="rounded-circle Loading-module_Loading__circle__VPFX- Loading-module_Loading__circle--low-emphasis__BFY3N"></div>
                      </div>
                      <div className="d-flex ai-center jc-center relative grow-1">
                        ???????? ?? ?????? ??????????
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
