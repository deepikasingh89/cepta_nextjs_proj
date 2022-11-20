import React from "react";
import Image from "next/image/";
import styles from "../styles/Product.module.css";
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

 const Items = () => {
//   console.log("props", props);
//   const { productData } = props;
//   return (
//     <div className="container py-5">
//       <h2 className="mb-4">This is Products page</h2>
//       <div className="row">
//         {productData.map((item) => (
//           <div className="col-3">
//             <div className="productList mb-3">
//               <div class="card p-2">
//                 <div className="text-center">
//                   <Image
//                     src={item.image}
//                     width={200}
//                     height={200}
//                     className={styles.image}
//                   />
//                 </div>
//                 <div class="card-body pb-0">
//                   <h5>{item.title}</h5>
//                   <p>{item.category}</p>
//                   <p>{item.description}</p>
//                   <div className="mb-2">
//                     {" "}
//                     <b> Rs. {item.price}</b>
//                   </div>
//                 </div>
//               </div>

//               {/* <Image src={item.image}  width={100} height={100}/>
//                     <div> {item.category}</div>
//                     <div> {item.title}</div>
//                     <div> {item.price}</div>
//                     <div>{item.description}</div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
 };

export default Items;
