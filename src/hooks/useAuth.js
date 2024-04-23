import { useState, useEffect } from "react";

const useAuth = () => {
  // Estado para almacenar la información del usuario
  const [user, setUser] = useState(null);

  // Comprobamos si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const checkAuthentication = () => {
      // Comprobamos si hay un usuario autenticado en el localStorage
      const userJSON = localStorage.getItem("authUser");
      // Si hay un usuario, establecemos el estado del usuario con esa información
      setUser(userJSON ? JSON.parse(userJSON) : null);
    };

    checkAuthentication();
  }, []);

  // Función para iniciar sesión
  const login = (userData) => {
    localStorage.setItem("authUser", JSON.stringify(userData));
    setUser(userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  // Devolvemos la información del usuario y las funciones de inicio y cierre de sesión
  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
