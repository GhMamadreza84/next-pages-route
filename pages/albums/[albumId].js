import React from "react";

const AlbumDetails = ({ album }) => {
  console.log(album);
  return (
    <h2>
      {album.id} - {album.userId} | {album.title}
    </h2>
  );
};

export default AlbumDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/albums/${params.albumId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      album: data,
    },
  };
}
