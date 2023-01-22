import Main from "../src/Page/Main";
import type { GetStaticProps, NextPage } from "next";

const Landing: NextPage = () => <Main />;

export const getStaticProps: GetStaticProps<{
  pageConfig: PageConfig;
}> = async () => {
  return {
    props: {
      pageConfig: {
        title: "PShop",
      },
    },
    revalidate: 10,
  };
};

export default Landing;
