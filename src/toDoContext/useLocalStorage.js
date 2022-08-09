import React from "react";

// 👇Hook personalizado que recolecta info de LocalStorage
function useLocalStorage(ItemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setIteam] = React.useState(initialValue); // this is a state, array-Hooks

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(ItemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(ItemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); // JSON.parse() convierte un texto a objeto
        }

        setIteam(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 500);
  }, []);

  const saveItem = (newIteam) => {
    try {
      const stringIteam = JSON.stringify(newIteam);
      localStorage.setItem(ItemName, stringIteam);
      setIteam(newIteam);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
  // cuando se aumentan los parametros de un hook o estado se recomienda trabajar con objetos y no con arrays.
}

export { useLocalStorage };
