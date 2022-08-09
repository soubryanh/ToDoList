import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoContext } from "../toDoContext";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";

function AppUI() {
  const {
    deleteToDo,
    completeToDo,
    searchedToDos,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

  return (
    // Components
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <p>Todo mal</p>}
        {loading && <p>Ahí vamos!</p>}
        {!loading && !searchedToDos.lenght && <p>Deu certo</p>}
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
      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
      <CreateToDoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
