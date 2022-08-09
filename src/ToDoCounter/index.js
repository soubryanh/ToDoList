import React from "react";
import "./ToDoCounter.css";
import { ToDoContext } from "../toDoContext";

function ToDoCounter() {
  const { totalToDos, completedToDos } = React.useContext(ToDoContext);
  return (
    <h2 className="ToDoCounter">
      {completedToDos} of {totalToDos} tasks completed
    </h2>
  );
}

export { ToDoCounter };
