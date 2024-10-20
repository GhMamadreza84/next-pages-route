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
  const paths = data.map((user) => ({
    params: {
      userId: user.id.toString(),
    },
  }));
  return {
    paths,
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
