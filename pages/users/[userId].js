import { useRouter } from "next/router";

const User = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1> User Details:</h1>
      <h3>Name :{data.name}</h3>
      <h3>Email :{data.email}</h3>
    </div>
  );
};

export default User;

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const userData = data.slice(0, 4);
  const paths = userData.map((user) => ({
    params: {
      userId: user.id.toString(),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();

  console.log(params);
  return {
    props: {
      data,
    },
  };
}
