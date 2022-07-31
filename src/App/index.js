import React from "react";
import { AppUI } from "./AppUI";

// const allDefault = [
//   { text: "Glosery", completed: false },
//   { text: "Bananas", completed: true },
//   { text: "Pear", completed: true },
// ];
// 👇Hook personalizado que recolecta info de LocalStorage
function useLocalStorage(ItemName, initialValue) {
  const localStorageItem = localStorage.getItem(ItemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(ItemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem); // JSON.parse() convierte un texto a objeto
  }
  const [item, setIteam] = React.useState(parsedItem); // this is a state, array-Hooks

  const saveItem = (newIteam) => {
    const stringIteam = JSON.stringify(newIteam);
    localStorage.setItem(ItemName, stringIteam);
    setIteam(newIteam);
  };

  return [item, saveItem];
}

function App() {
  const [toDos, saveToDos] = useLocalStorage("toDos_v1", []);

  const [searchValue, setSearchValue] = React.useState("");

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

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  //Función Busca el item que coinside con el mismo texto entre los arrays y cambia el estado a completado para subrayar la tarea.
  // Usar el método split to delete an item directly in the array 'newToDos', sin entrar al index

  return (
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
