import React from "react";

const TodoDetails = ({todo}) => {
  return (
    <div>
      {todo.id} - {todo.title}
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
