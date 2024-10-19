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
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
      { params: { userId: "4" } },
      { params: { userId: "5" } },
      { params: { userId: "6" } },
      { params: { userId: "7" } },
      { params: { userId: "8" } },
      { params: { userId: "9" } },
      { params: { userId: "10" } },
    ],
    fallback: false,
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
