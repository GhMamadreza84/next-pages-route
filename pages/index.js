import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <h1>Ghmamadreza.ir</h1>
      <h2>{data}</h2>
    </div>
  );
}

export async function getStaticProps() {
  //  fetch data from api
  const data = "Mohammadreza Ghadiri";

  return {
    props: {
      data,
    },
  };
}
