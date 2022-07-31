import React from "react";
import "./CreateToDoButton.css";

function CreateToDoButton(props) {
  const onClickButton = (mensajito) => {
    alert(mensajito);
  };
  return (
    <button className="CreateToDoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateToDoButton };
