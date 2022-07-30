import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI({
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
}) {
  return (
    // Components
    <React.Fragment>
      <ToDoCounter total={totalToDos} completed={completedToDos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedToDos.map((all) => (
          <ToDoItem
            key={all.text}
            text={all.text}
            completed={all.completed}
            onComplete={() => completeToDo(all.text)}
            onDelete={() => deleteToDo(all.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUI };
