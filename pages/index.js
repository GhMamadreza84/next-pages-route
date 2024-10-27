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
  console.log('Generating Home Page | SSG')

  //  fetch data from api
  const data = await fetch("https://jsonplaceholder.typicode.com/albums");
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
