import React from "react";
const Users = () => {
  return <div>Users</div>;
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {},
  };
}
