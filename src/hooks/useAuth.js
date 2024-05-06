import {useState, useEffect} from "react";

// perfil: authUser, AuthClient

const useAuth = () => {
  // Estado para almacenar la información del usuario
  const [user, setUser] = useState({
    agente: null,
    cliente: null,
  });

  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  // Comprobamos si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const checkAuthentication = () => {
      // Comprobamos si hay un usuario autenticado en el localStorage
      const agenteJSON = localStorage.getItem("agente");
      const clienteJSON = localStorage.getItem("cliente");

      //parseamos la info del usuario
      const agente = JSON.parse(agenteJSON);
      const cliente = JSON.parse(clienteJSON);
      // Si hay un usuario, establecemos el estado del usuario con esa información
      setUser({
        agente: agenteJSON ? agente : null,
        cliente: clienteJSON ? cliente : null,
      });

      setTimeout(() => setLoading(false), 1000);
    };

    checkAuthentication();
  }, []);

  // Función para iniciar sesión
  const login = (userData, perfil) => {
    localStorage.setItem(perfil, JSON.stringify(userData));
    setUser((prevData) => {
      return {...prevData, [perfil]: userData};
    });
  };

  // Función para cerrar sesión
  const logout = (perfil) => {
    localStorage.removeItem(perfil);
    setUser((prevData) => {
      return {...prevData, [perfil]: null};
    });
  };

  // Devolvemos la información del usuario y las funciones de inicio y cierre de sesión
  return {
    user,
    loading,
    login,
    logout,
  };
};

export default useAuth;
