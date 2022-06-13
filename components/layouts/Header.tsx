import React from "react";
import headerStyles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Shopping</span>
        Next.js Demo
      </h1>

      <p className={headerStyles.description}>
        Keep in touch with the programming world
      </p>
    </div>
  );
}
