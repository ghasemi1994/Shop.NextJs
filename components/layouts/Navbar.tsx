import React from "react";
import Link from "next/link";
import navStyles from "../../styles/Nav.module.css";

export default function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
