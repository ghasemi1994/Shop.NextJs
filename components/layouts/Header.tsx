import React from "react";
import styles from "../../styles/Header.module.css";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <header className="header position-fixed w-full top-0 left-0 bg-000 shadow-1-bottom">
      <TopHeader />
      <Navbar />
    </header>
  );
}
