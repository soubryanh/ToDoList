import React from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const onComplete = () => {
    alert("Ya completaste el todo " + props.text);
  };
  const onDelete = () => {
    alert("Valeu " + props.text);
  };
  return (
    <section>
      <li className="ToDoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={onComplete}
        >
          C
        </span>
        <p
          className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}
        >
          {/* "${}" Se renombra la clase si recibe la propiedad complete, hace que se subraye*/}
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
          X
        </span>
      </li>
    </section>
  );
}

export { ToDoItem };
