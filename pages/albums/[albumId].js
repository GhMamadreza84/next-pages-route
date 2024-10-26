import { redirect } from "next/dist/server/api-utils";
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
  console.log('Generating Album Details Page | Dynamic SSR')
  const { params } = context;
  const res = await fetch(`http://localhost:4000/albums/${params.albumId}`);
  const data = await res.json();

  if (!data.title) {
    return {
      // notFound: true,
      redirect: {
        destination: "/albums",
      },
    };
  }

  return {
    props: {
      album: data,
    },
  };
}
