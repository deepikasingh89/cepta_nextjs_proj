import React from "react";
import Link from "next/link";
import style from "../styles/Header.module.css";

const Navbar = () => {
  return (
    <div className="row bg-info bg-opacity-50">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
