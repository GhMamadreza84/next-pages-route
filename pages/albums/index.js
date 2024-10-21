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
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  return {
    props: {
      albums: data,
    },
  };
}
