import {useState, useEffect} from "react";

const useAuth = () => {
  // Estado para almacenar el estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Comprobamos si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const checkAuthentication = () => {
      // Comprobamos si hay un token de autenticación en el localStorage
      const token = localStorage.getItem("authToken");
      // Si hay un token, establecemos isAuthenticated en true, de lo contrario en false
      setIsAuthenticated(!!token);
    };

    checkAuthentication();
  }, []);

  // Función para iniciar sesión
  const login = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  // Devolvemos el estado de autenticación y las funciones de inicio y cierre de sesión
  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
