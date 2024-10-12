import Link from "next/link";

const index = () => {
  return (
    <>
      <h1>Users List</h1>
      <ul>
        <li>
          <Link href="/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/users/2">User 2</Link>
        </li>
      </ul>
    </>
  );
};

export default index;
