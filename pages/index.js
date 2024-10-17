import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
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
  const data = await fetch("http://localhost:4000/posts");
  const res = await data.json();
  return {
    props: {
      posts: res,
    },
  };
}
