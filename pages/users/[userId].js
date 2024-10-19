import { useRouter } from "next/router";
import React from "react";

const User = () => {
  const router = useRouter();
  const userId = router.query.userId;
  return <div>User #{userId || <p>loading</p>}</div>;
};

export default User;
