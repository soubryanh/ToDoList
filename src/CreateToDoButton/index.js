import React from "react";
import "./CreateToDoButton.css";

function CreateToDoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
    // Las funciones actualizadoras del estado nos permiten enviar funciones que iteren su estado de false a true
  };
  return (
    <button className="CreateToDoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateToDoButton };
