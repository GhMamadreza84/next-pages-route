import React, { useEffect, useState } from "react";

const Todos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
