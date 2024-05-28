import React from "react";
import Logo from "../../assets/img/logo.png";
import {FaUserAlt} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import LongMenu from "../menu/Menu";
import {MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {HiOutlinePhoneMissedCall} from "react-icons/hi";
import {IoIosLogOut} from "react-icons/io";
import {config} from "../../config/config";

function NavBar() {
  const navigate = useNavigate();
  const {user, logout} = useAuth();

  const handleLogout = (e, entityLogout, navigateTo) => {
    if (e) {
      e.preventDefault();
    }
    if (entityLogout === "agente") {
      logout("cliente");
    }

    logout(entityLogout);
    navigate(navigateTo);
  };

  const handleFinalizarLlamada = async (
    e,
    estado,
    entityLogout,
    navigateTo
  ) => {
    e.preventDefault();
    try {
      debugger;
      const updateHistory = await fetch(`${config.baseUrl}/call_duration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idCliente: user.cliente?.documento_identidad,
          idEmpleado: user.agente?.documento_identidad,
          estado,
          fechaFinalizacion: new Date(),
        }),
      });
      const response = await updateHistory.json();
      if (!response || !response.success) {
        setError({isError: true, message: response.message});
        return;
      }

      handleLogout(null, entityLogout, navigateTo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-[#ed1218] flex justify-between text-white text-2xl h-16">
      <div className="flex w-1/4 items-center ml-10">
        <img className="w-14 h-14" src={Logo} alt="" />
        <div>Client Center</div>
      </div>

      <div className="flex w-1/4 items-center">
        <FaUserAlt />
        <div className="ml-1 text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          ¡Hola {user.agente?.nombre} {user.agente?.apellido}!
        </div>
        <LongMenu>
          {user.cliente && (
            <MenuItem
              onClick={(e) =>
                handleFinalizarLlamada(e, "resuelto", "cliente", "/registro")
              }
            >
              <span className="mr-2">
                <HiOutlinePhoneMissedCall />
              </span>
              Finalizar llamada
            </MenuItem>
          )}
          <MenuItem onClick={(e) => handleLogout(e, "agente", "/login")}>
            <span className="mr-2">
              <IoIosLogOut />
            </span>
            Cerrar sesión
          </MenuItem>
        </LongMenu>
      </div>
    </nav>
  );
}

export default NavBar;
