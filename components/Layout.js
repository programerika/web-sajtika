import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Programerika</title>
        <meta
          name="description"
          content="Full stack software developer team from Serbia. Software development, microservices, react.js, spring boot, kubernetes, postgres, mongodb, sql server, apache kafka, rabbit mq, redis. "
        />
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
