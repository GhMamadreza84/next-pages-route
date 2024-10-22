export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      <h1>Ghmamadreza.ir</h1>
      <ul>
        {posts.map((post) => (
          <>
            <li key={post.id}>{post.title}</li> <br></br>
          </>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  //  fetch data from api
  const data = await fetch("http://localhost:4000/albums");
  const res = await data.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: res,
    },
  };
}
