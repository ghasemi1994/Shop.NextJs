import React, { ReactNode } from "react";
import styles from "../../styles/Layout.module.css";
import Navbar from "../layouts/Navbar";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}
export default function Layout({ children }: PropType) {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </>
  );
}
