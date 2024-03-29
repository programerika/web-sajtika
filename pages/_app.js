import Layout from "../components/Layout";
import "w3-css/w3.css";
import "../styles/globals.css";
import "@mdi/font/css/materialdesignicons.css";
import "regenerator-runtime/runtime";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
