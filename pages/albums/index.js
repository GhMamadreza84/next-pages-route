import Link from "next/link";

const Albums = ({ albums }) => {
  // console.log(albums);
  return (
    <div>
      {albums.map((album) => (
        <Link key={album.id} href={`/albums/${album.id}`}>
          <h3>{album.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Albums;

export async function getServerSideProps() {
  console.log("generating Albums page");
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  return {
    props: {
      albums: data,
    },
  };
}
