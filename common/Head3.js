import React from "react";
import Link from "next/link";

const Head3 = () => {
  return (
    <div className="col-8">
      <ul className="navbar-nav sm-icons mr-0 d-block float-right text-end">
        <li className="float-left d-inline-block m-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </li>
        <li className="float-left d-inline-block m-3">
          {/* <button type="button" className={style.login_btn}>
            <Link href="/login">Login</Link>
          </button> */}
          <button type="button" className="btn btn-outline-info">
            <Link href="/login">Login</Link>
          </button>
        </li>
        <li className="float-left d-inline-block m-3">
          <button type="button" className="btn btn-outline-info">
            <Link href="/registration" className="">
              Register
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Head3;
