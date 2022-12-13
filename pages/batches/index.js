import React from "react";
import Link from 'next/link';

export const getStaticProps = async () => {
  //api calls
  const response = await fetch(process.env.API_URL);
  const data = await response.json(); //to convert stringfy json to parsed json
  return {
    props: { productData: data },
  };
};

const Batches = (props) => {
  const { productData } = props;
  return (
    <div>
      <h2 className="text_nextjs">this is batch file</h2>
      {productData.map((item) => (
        // <div>
        //   <Link href={`/batches/${item.id}`}>{item.title}</Link>
        // </div>
        <div><Link href={`/batches/${item.id}`}>{item.title}</Link></div>
      ))}
    </div>
  );
};

export default Batches;
