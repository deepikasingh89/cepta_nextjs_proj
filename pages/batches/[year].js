import React from "react";
export const getStaticPaths = async() => {
//   const arr = ["2022", "2021", "2020", "2019", "2018"];
const response = await fetch("https://fakestoreapi.com/products");  
const arr = await response.json(); 
const paths = arr.map((item) => {
    return {
      params: { year: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false, // if page fail goto 404
  };
};

export const getStaticProps = async (context) => {
  console.log("context", context.params);
  const temp = context.params.year;
  const response = await fetch("https://fakestoreapi.com/products/"+temp);
  const data = await response.json(); 
  return {
    props: {
      res: data,
      notFound: false, // if page fail goto 404
    },
  };
};
const Year = ({ res }) => {
  console.log("context", res);
  return (
    <div>
      <h2>Batch page - {res.title}</h2>
    </div>
  );
};

export default Year;
