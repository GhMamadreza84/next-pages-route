import { useRouter } from "next/router";
const User = () => {
  const router = useRouter();
  console.log(router);
  return <p>user # {router.query.userId}</p>;
};

export default User;
