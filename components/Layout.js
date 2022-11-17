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
          content="Full stack software developer team from Serbia. Software development, microservices, react.js, vue.js, typescript, go lang, java, spring boot, c# .net, kubernetes, postgres, mongodb, sql server, apache kafka, redis"
        />
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
