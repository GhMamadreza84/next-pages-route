// import React, { useEffect, useState } from "react";
import useSWR from "swr";

const url = "http://localhost:4000/todos";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Todos = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/todos")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  const { data, error } = useSWR(url, fetcher);
  return (
    <div>
      {/* {data.length ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title}
              <br></br>
              <br></br>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading ...</h1>
      )} */}
      {data ? (
        data.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Todos;
