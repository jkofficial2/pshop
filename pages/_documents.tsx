/* eslint-disable @next/next/google-font-display */
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="Modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
