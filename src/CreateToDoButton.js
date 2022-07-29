import React from "react";
import "./CreateToDoButton.css";

function CreateToDoButton(props) {
  const OnclickButton = () => {
    alert("la buena mi socio");
  };
  return (
    <button className="CreateToDoButton" onClick={OnclickButton}>
      +
    </button>
  );
}

export { CreateToDoButton };
