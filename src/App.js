// import "./App.css";
import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoList } from "./ToDoList";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
const all = [
  { text: "Glosery", completed: false },
  { text: "Bananas", completed: true },
  { text: "Pear", completed: false },
];

function App() {
  return (
    // Components
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      {/* <input placeholder="Buy supplements" /> */}
      <ToDoList>
        {all.map((all) => (
          <ToDoItem key={all.text} text={all.text} completed={all.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
