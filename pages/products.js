import React from "react";
import Link from "next/link";
import styles from "../styles/Courses.module.css";

export const getStaticProps = async () => {
  //api calls
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json(); //to convert stringfy json to parsed json
  return {
    props: { productData: data },
  };
};

const products = (props) => {
  const { productData } = props;
  return (
    <div class="row">
      {/* <h2 className="text_nextjs">this is product file</h2> */}
      {productData.map((item) => (
        <div class="col-md-3  mt-3">
          <Link
            href={`/products/${item.id}`}
            className={styles.productdetail_list}
          >
            <div className="card">
              <div className="card-body d-flex flex-row">
                {/* <img src={item.image} alt="{item.title}" width={50} height={50} /> */}
                <div>
                  <h5 className={styles.product_title}>{item.title}</h5>
                </div>
              </div>
              <div
                className="bg-image hover-overlay ripple rounded-0 text-center"
                data-mdb-ripple-color="light"
              >
                <img
                  src={item.image}
                  alt="{item.title}"
                  width={150}
                  height={200}
                />
              </div>
              <div className="card-body">
                <p className={[styles.product_desc, "card-text"].join(" ")}>
                  {item.description}
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Rs. {item.price}</b>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default products;
