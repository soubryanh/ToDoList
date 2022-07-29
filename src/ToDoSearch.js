import React from "react";
import "./ToDoSearch.css";

function ToDoSearch() {
  const onSearchValueChange = (busqueda) => {
    console.log(busqueda.target.value);
  };
  return (
    <input
      className="ToDoSearch"
      placeholder="What is your task?"
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };
