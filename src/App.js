// import "./App.css";
import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoList } from "./ToDoList";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
const allDefault = [
  { text: "Glosery", completed: false },
  { text: "Bananas", completed: true },
  { text: "Pear", completed: true },
];

function App() {
  const [toDos, setToDos] = React.useState(allDefault); // this is a state
  const [searchValue, setSearchValue] = React.useState("");
  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length; // !! is double negative that means, positive/true
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = allDefault;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  return (
    // Components
    <React.Fragment>
      <ToDoCounter total={totalToDos} completed={completedToDos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedToDos.map((all) => (
          <ToDoItem key={all.text} text={all.text} completed={all.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
