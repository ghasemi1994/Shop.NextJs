import React from "react";

export default function TopHeader() {
  return (
    <div
      className=" top-header w-full d-flex align-items-center justify-content-around"
      style={{ height: "50px", backgroundColor: "rgb(171, 221, 214)", color: "#000" }}
    >
      <div className="top-header-right">TopHeader Right</div>
      <div className="top-header-center">TopHeader Center</div>
      <div className="top-header-left">TopHeader Left</div>  
    </div>
  );
}
