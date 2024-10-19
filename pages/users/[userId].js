const User = () => {
  return <div>User </div>;
};

export default User;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`jsonplaceholder.typicode/users/${params.userId}`);
  const data = await res.json();
  console.log(params);
  return {
    props: {
      data,
    },
  };
}
