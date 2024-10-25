import React from "react";

const AlbumDetails = ({ album }) => {
  return (
    <h2>
      {album.id} - {album.user} | {album.title}
    </h2>
  );
};

export default AlbumDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/albums/${params.albumId}`);
  const data = res.json();
  return {
    props: {
      album: data,
    },
  };
}
