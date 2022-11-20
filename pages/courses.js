import React from "react";
import Styles from "../styles/Courses.module.css";
import Image from 'next/image';
export const getStaticProps = async () => {
  //api calls
  // return {
  //   props: { footerStatus: false },
  // };
   const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json(); //to convert stringfy json to parsed json
  return {
    props: { productData: data },
  };
};
const courses = (props) => {
  console.log("props", props);
  const { productData } = props;
  return (
    // <div>
    //   <h2>this is courses file</h2>
    // </div>
    <>
      <center>
        <h2>BIGGEST DEALS ON TOP BRANDS</h2>
      </center>
      <div className="container">
        <div className="row">
          {productData.map((item) => (
            <div className="card mb-4 p-3 ">
              <img src={item.image} alt=".." width={400} height={300} />

              <div class="card-body">
                <h4 class="card-title">{item.title}</h4>
                <p class="card-text">{item.description}</p>
                <h6>
                  Rs. {item.price} - <span class="fa fa-star checked"></span>{" "}
                </h6>
                {/* <a href="javascript:void(0)" class="btn btn-primary">
                  See Profile
                </a> */}
              </div>
              <div className="card-footer">
                <small className="mx-auto">{item.category} - </small> &nbsp;
                <button className="btn btn-danger float-right btn-sm">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default courses;
