import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
 
  const users = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
  ];
  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>User {user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default index;
