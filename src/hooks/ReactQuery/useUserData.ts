import { useQuery } from "@tanstack/react-query";

interface getUsers {
  id?: number;
}

export const getUsers = async () => {
  return fetch("http://localhost:5000/users").then((res) => res.json());
};

export const useUserData = () => {
  const usersData = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return usersData;
};
