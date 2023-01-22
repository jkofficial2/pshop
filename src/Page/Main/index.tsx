import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchUser = () => {
  return fetch("http://localhost:5000/users").then((res) => res.json());
};

const GithubUser = ({ username }: { username: string }) => {
  const userQuery = useQuery([username], () => fetchUser());
  const data = userQuery.data;

  if (userQuery.isLoading) return <p>Loading ...</p>;

  // if (userQuery.isError) return <p>Error: {userQuery.error.message}, sorry!</p>;

  return <div className="">{JSON.stringify(data, null, 2)}</div>;
};

const Main = () => {
  // const userQuery = useQuery(["username"], () => fetchUser());
  // const data = userQuery.data;
  // console.log(data, "data");

  return (
    <>
      <h1 className="text-center mb-10">
        Главное правило жизни: &quot;Попробуй сделать, что хочешь, если не
        получилось, то попробуй по другому пока не получишь тот результат,
        который ждешь!&quot;
      </h1>
    </>
  );
};

export default Main;
