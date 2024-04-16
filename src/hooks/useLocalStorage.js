import {useState, useEffect} from "react";

const UseLocalStorage = (key, initialValue) => {
  // Estado para almacenar el valor actual
  const [value, setValue] = useState(() => {
    // Comprobamos si ya hay un valor almacenado bajo la clave proporcionada
    const storedValue = localStorage.getItem(key);
    // Si hay un valor almacenado, lo devolvemos parseado, de lo contrario, devolvemos el valor inicial
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Utilizamos useEffect para actualizar el almacenamiento local cada vez que el valor cambie
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Devolvemos el valor y una función para actualizarlo
  return [value, setValue];
};

export default UseLocalStorage;
