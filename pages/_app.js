import Layout from '../common/Layout'
import '../styles/globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  console.log("pageProps", pageProps);
  return (
    <Layout footerStatus={pageProps.footerStatus}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
