import { useRouter } from "next/router";
const User = () => {
  const router = useRouter();
  const id = router.query.userId;
  return <p>user # {id}</p>;
};

export default User;
