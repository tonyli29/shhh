import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [result, setResult] = useState([]);
  const [sortAcsending, setSortAcsending] = useState(false);

  const loadTodos = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await result.json();
      setResult(todos);
    } catch (error) {
      console.log("HHELELOEOEOOE", error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleSort = (acsending) => {
    // const arrC = result doesnt work because in js arr are reference types so these 2 are links
    const arrC = [...result]; // new reference that isnt pointing to same thing in memory
    if (sortAcsending) {
      arrC.sort((a, b) => a.id - b.id);
    } else {
      arrC.sort((a, b) => b.id - a.id);
    }
    setResult(arrC);
    setSortAcsending(!sortAcsending);
  };

  const handleRemove = (id) => {
    const arrC = [...result].filter((item) => item.id !== id);
    setResult(arrC);
  };

  const renderTodos = () => {
    return result.map((item) => (
      <TodoItem id={item.id} title={item.title} remove={handleRemove} />
    ));
  };

  return (
    <div className="todo-container">
      <h1>Todo</h1>
      <button className="sort-button" onClick={() => handleSort(sortAcsending)}>
        Sort
      </button>
      {renderTodos()}
    </div>
  );
};

export default Todo;
