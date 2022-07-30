import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (busqueda) => {
    console.log(busqueda.target.value);
    setSearchValue(busqueda.target.value);
  };
  return (
    <input
      className="ToDoSearch"
      placeholder="What is your task?"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };
