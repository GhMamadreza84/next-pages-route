// import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const url = "https://jsonplaceholder.typicode.com/todos";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Todos = () => {
  const { data, error } = useSWR(url, fetcher);
  return (
    <div>
      {data ? (
        data.map((todo) => (
          <Link href={`/todos/${todo.id}`} key={todo.id}>
            <h3>{todo.title}</h3>
          </Link>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Todos;
