import React from "react";

const TodoItem = (props) => {
  const { id, title, remove } = props;

  return (
    <div className="todo-item">
      <h1 className="todo-title">
        {id}: {title}
      </h1>
      <button onClick={() => remove(id)}>x</button>
    </div>
  );
};

export default TodoItem;
