import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Page: FC<PropsWithChildren<PageConfig>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <Header />
        <>{children}</>
        <Footer />
      </>
    </>
  );
};

export default Page;
