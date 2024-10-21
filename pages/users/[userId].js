const User = ({ data }) => {
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
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  if (!data.name) {
    return {
      notFound: true,
    };
  }
  console.log(params);
  return {
    props: {
      data,
    },
  };
}
