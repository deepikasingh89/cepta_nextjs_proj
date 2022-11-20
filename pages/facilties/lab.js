import React from "react";
export const getStaticProps = async () => {
  return {
    props: { footerStatus: false },
  };
  // const response = await fetch("https:\\fakestoreapi.com/products");
  // const data = await response.json();
  // return {
  //   props: { productData: data },
  // };
};

const lab = () => {
  return (
    <div>
      <h2>this is lab file</h2>
    </div>
  );
};

export default lab;
