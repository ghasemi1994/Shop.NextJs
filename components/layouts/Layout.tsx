import React, { ReactNode } from "react";
import styles from "../../styles/Layout.module.css";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}
export default function Layout({ children }: PropType) {
  return (
    <>
      <div id="__next">
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
