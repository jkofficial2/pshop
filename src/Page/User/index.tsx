import { useQuery } from "@tanstack/react-query";

const User = (id: any) => {
  // console.log(id, 'id');
  // const profile = useQuery({
  //   queryKey: ["profile", id],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/users/${id}`).then((res) => res.json()),
  // });
  return <div>user</div>;
};
export default User;
