import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
  const {children,footerStatus} =props;
  console.log("footerStatus", footerStatus);
  return (
    <div className="container-xxl">
      <Header/>
      <Navbar/>
        {children}
        {!footerStatus && <Footer/>}
    </div>
  );
};

export default Layout;
