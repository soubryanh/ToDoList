import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoContext } from "../toDoContext";

function AppUI() {
  return (
    // Components
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />

      <ToDoContext.Consumer>
        {(value) => {
          <ToDoList>
            {value.error && <p>Todo mal</p>}
            {value.loading && <p>Ahí vamos!</p>}
            {!value.loading && !value.searchedToDos.lenght && <p>Deu certo</p>}
            {value.searchedToDos.map((all) => (
              <ToDoItem
                key={all.text}
                text={all.text}
                completed={all.completed}
                onComplete={() => value.completeToDo(all.text)}
                onDelete={() => value.deleteToDo(all.text)}
              />
            ))}
          </ToDoList>;
        }}
      </ToDoContext.Consumer>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUI };
