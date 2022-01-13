import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link
            rel="favicon"
            href="../public/favicon.ico"
          />          
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>

        <body className="w3-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
