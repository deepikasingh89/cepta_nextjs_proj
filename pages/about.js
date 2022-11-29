import React  from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Image from 'next/image';
import Head from 'next/head';
import styles from "../styles/About.module.scss";
const about = () =>{
    return (
      <>
        <Head>
          <title>About page</title>
        </Head>
        <div>
          <h2 className={styles.about_text}>This is about file</h2>
          {/* <Header></Header>
        <Navbar></Navbar>
        <Footer></Footer> */}
        </div>
        <Image src="/ssr-nextjs-reactjs.png" width={400} height={300}></Image>
      </>
    );
}

export default about