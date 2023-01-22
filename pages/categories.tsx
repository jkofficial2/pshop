import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getUsers } from "hooks/ReactQuery/useUserData";
import Categories from "../src/Page/Categories";
import type { GetStaticProps, NextPage } from "next";

interface Props {
  users: any;
}

const CategoriesLanding: NextPage<Props> = () => <Categories />;

export const getStaticProps: GetStaticProps<{
  pageConfig: PageConfig;
}> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["users"], () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  // const users = dehydrate(queryClient).queries[0].state;
  return {
    props: {
      pageConfig: {
        title: "PShop",
      },
      // users,
      dehydratedState: dehydrate(queryClient),
      fallback: "blocking",
    },
    revalidate: 10,
  };
};

export default CategoriesLanding;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/users");
//   const data = await res.json();

//   const paths = data.map((data: any) => {
//     return {
//       params: { id: data.id.toString() },
//     };
//   });
//   return {
//     fallback: "blocking",
//     paths,
//   };
// };
// export async function getStaticProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery({
//     queryKey: ['posts', 10],
//     queryFn: () => fetchPosts(10),
//   })

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }
// const res = await fetch("http://localhost:5000/users");
// const users = await res.json();
// console.log(res);

// const paths = data.map((data: any) => {
//   return {
//     params: { data },
//   };
// });
