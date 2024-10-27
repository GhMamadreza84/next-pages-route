import React, { useState } from "react";

const TodoDetails = ({ todo }) => {
  const [data, setData] = useState(todo || {});

  const updateHandler = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/todos/${id}`);
      if (!res.ok) throw new Error("Failed to fetch data.");
      const updatedData = await res.json();
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>
        {data.id} - {data.title}
      </h2>
      <h3>{`${data.completed}`}</h3>
      <button onClick={() => updateHandler(data.id)}>Update</button>
    </div>
  );
};

export default TodoDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/todos/${params.todoId}`);

  const data = await res.json();
  return {
    props: {
      todo: data,
    },
  };
}
