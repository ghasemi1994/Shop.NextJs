import React, { ReactNode } from "react";
import styles from "../../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}
export default function Layout({ children }: PropType) {
  return (
    <>
      <div className="h-100 d-flex flex-column bg-000 ai-center">
        <Header />
        <div
          className={`grow-1 bg-000 d-flex flex-column w-100 align-items-center shrink-0 ${styles.main}`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
