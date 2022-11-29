import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Courses.module.css";
//ssr page
export const getServerSideProps = async (context) => {
  // const router = useRouter();
 //  const { id } = router.query;
 const id=context.params.id;
  //api calls
  const response = await fetch("https://fakestoreapi.com/products/"+id);
  const data = await response.json(); //to convert stringfy json to parsed json
  return {
    props: { productData: data },
  };
};

const ProductId = ({ productData }) => {
  // const router = useRouter();
  // const { id } = router.query;
  console.log("id", productData);
  //const { productData } = props;
  return (
    <div className="container mt-3 p-3">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  {
                    <img
                      src={productData.image}
                      alt="{item.title}"
                      className={styles.image_tag}
                    />
                  }
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{productData.title}</h3>
              <div className="rating">
                <span className="review-no">
                  {productData.rating.rate} Ratings
                </span>
              </div>
              <p className="product-description">{productData.description}</p>
              <h4 className="price">
                Current Price: <span>Rs. {productData.price}</span>
              </h4>
              <div>
                <button type="button" className="btn btn-outline-info">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
