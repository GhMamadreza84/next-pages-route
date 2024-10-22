const Albums = ({ albums }) => {
  console.log(albums);
  return (
    <div>
      {albums.map((album) => (
        <h3 key={album.id}>{album.title}</h3>
      ))}
    </div>
  );
};

export default Albums;

export async function getServerSideProps() {
  console.log("generating Albums page");
  const res = await fetch("http://localhost:4000/albums");
  const data = await res.json();
  return {
    props: {
      albums: data,
    },
  };
}
