import { QueryClient } from "@tanstack/react-query";
import User from "../../src/Page/User";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";

interface Props {
  user: any;
}

const Profile: NextPage = (id: any) => <User id={id} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/users");
  const data = await res.json();
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(["users"], () =>
  //   fetch("http://localhost:5000/users").then((res) => res.json())
  // );
  const paths = data.map((data: any) => {
    return {
      params: { id: data.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  pageConfig: PageConfig;
}> = async (id: GetStaticPropsContext) => {
  // const id = context.params?.id as string;
  // const res = await fetch(`http://localhost:5000/users/${id}`);
  // const data = await res.json();
  // const user = data.data;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["profile", id], () =>
    fetch(`http://localhost:5000/users/${id}`).then((res) => res.json())
  );
  return {
    props: {
      pageConfig: {
        title: "PShop",
      },
      // data: data,
      
    },
    revalidate: 10,
  };
};

export default Profile;
