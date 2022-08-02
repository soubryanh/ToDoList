import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../toDoContext";

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
