import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("toDos_v1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length; // !! is double negative that means, positive/true
  // aquí se busca la cantidad de toDos marcados como completados.
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }
  // aquí filtramos los toDos para encontrar el que corresponda con lo que escriba el user

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    // lo que está dentro de la función sirve como condicional para comparar dos valores.
    //por cada toDo vamos a ver si nuestro toDo.text incluye esos parámetros.
    const newToDos = [...toDos];
    // newToDos[toDoIndex].completed = true;
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
    saveToDos(newToDos);
  };

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text,
    });
    saveToDos(newToDos);
  };
  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };
  //Función Busca el item que coinside con el mismo texto entre los arrays y cambia el estado a completado para subrayar la tarea.
  // Usar el método split to delete an item directly in the array 'newToDos', sin entrar al index

  // useEffect is apply to manage posible error on loading

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        completeToDo,
        deleteToDo,
        setOpenModal,
        openModal,
        addToDo,
      }}
    >
      {" "}
      {/* este componente va a envolver toda nuestra aplicación */}
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
