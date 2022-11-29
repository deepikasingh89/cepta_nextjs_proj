import React from "react";
import Logo from "./Head1";
import Head2 from "./Head2";
import Head3 from "./Head3";

const Header = () => {
  return (
    <div className="row bg-light d-flex justify-content-center align-items-center">
      <Logo />
      <Head2 />
      <Head3 />
    </div>
  );
};

export default Header;
