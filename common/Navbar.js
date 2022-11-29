import React from "react";
import Link from "next/link";
import style from "../styles/Header.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="row bg-info bg-opacity-50">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={[
                style.nav_list,
                "navbar-nav me-auto mb-2 mb-lg-0 p-3",
              ].join(" ")}
            >
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/">Home</Link>
              </li>
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/about">About</Link>
              </li>
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/courses">Courses</Link>
              </li>
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/facilities">Facilities</Link>
              </li>
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/batches">Batches</Link>
              </li>
              <li className={[style.nav_link, "nav-item"].join(" ")}>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
