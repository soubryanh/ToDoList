import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <h2 className="ToDoCounter">
      {completed} of {total} tasks completed
    </h2>
  );
}

export { ToDoCounter };
