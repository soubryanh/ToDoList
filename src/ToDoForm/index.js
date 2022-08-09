import React from "react";
// import ReactDOM from "dom-react";
import { ToDoContext } from "../toDoContext";
import "./toDoForm.css";

function ToDoForm() {
  const [newToDoValue, setNewToDoValue] = React.useState("");
  const { addToDo, setOpenModal } = React.useContext(ToDoContext);

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };
  //   Aqui recibiremos lo que escriba el usuario. Aquí creamos un listener
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (reload) => {
    reload.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a new task</label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Write your task"
      />
      <div className="toDoForm-buttonContainer">
        <button
          type="buttom"
          className="toDoForm-button toDoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="toDoForm-button toDoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
