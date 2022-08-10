import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoContext } from "../toDoContext";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ToDosError } from "../ToDosError";
import { ToDosLoading } from "../ToDosLoading";
import { EmptyToDos } from "../EmptyTodos";

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
        {error && <ToDosError error={error} />}
        {loading && <ToDosLoading />}
        {!loading && !searchedToDos.lenght && <EmptyToDos />}
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
