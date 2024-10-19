import React from "react";
const Users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>{user.name}</li> <br></br>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: { users: data },
  };
}
