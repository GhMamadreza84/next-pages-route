// import React, { useEffect, useState } from "react";
import useSWR from "swr";

const url = "http://localhost:4000/todos";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Todos = () => {
  const { data, error } = useSWR(url, fetcher);
  return (
    <div>
      {data ? (
        data.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Todos;
