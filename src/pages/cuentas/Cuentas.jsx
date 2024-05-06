import React, {useEffect, useState} from "react";
import {NavBar} from "../../components";
import {FaArrowLeft} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import ModalResponseCuenta from "./response/CuentasResponse";
import useAuth from "../../hooks/useAuth";

function Cuentas() {
  const navigate = useNavigate();

  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({isError: false, message: ""});
  const [consultas, setCounsultas] = useState([]);
  const [solicitud, setSolicitud] = useState({});
  const [resData, setResData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:9000/api/cuenta/questions"
      );
      const result = await response.json();

      if (!result || !result.success) {
        setError({isError: true, message: result.message});
        return;
      }
      setCounsultas(result.data);
    } catch (error) {
      setError({isError: true, message: error.message});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sendSolicitud = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const payload = {
      idCliente: user.cliente?.documento_identidad,
      ...solicitud,
    };

    try {
      const send = await fetch("http://localhost:9000/api/cuenta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await send.json();
      if (!response || !response.success) {
        setError({isError: true, message: response.message});
        return;
      }
      setResData(response.data);
    } catch (error) {
      setError({isError: true, message: error.message});
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div>
      {resData && <ModalResponseCuenta cuentaData={resData} isOpen={true} />}
      <NavBar />
      {error.isError && (
        <Alert className="mt-5" severity="error">
          {error.message}
        </Alert>
      )}
      <section
        className="p-5 ml-5 cursor-pointer"
        onClick={(e) => handleBack(e)}
      >
        <FaArrowLeft color="#ed1218" size={40} />
      </section>
      <section className="flex justify-center">
        <section className="p-5 w-full">
          <article className="px-10">
            <h1 className="text-[#ed1218] text-4xl  text-bold">Cuenta</h1>
            <article className="flex justify-between mt-5 gap-28">
              <article className="w-full flex flex-col gap-2">
                <label className="text-ms">Cedula del Cliente</label>
                <input
                  readOnly
                  placeholder={user.cliente?.documento_identidad || ""}
                  className="w-full h-10 pl-5 rounded-2xl border border-solid border-black cursor-pointer"
                  type="text"
                />
              </article>
              <article className="w-full flex flex-col gap-2">
                <label className="text-ms">Nombre</label>
                <input
                  readOnly
                  className="w-full pl-5 h-10 rounded-2xl border border-solid border-black cursor-pointer"
                  placeholder={`${user.cliente?.nombre} ${user.cliente?.apellido}` || ""}
                  type="text"
                />
              </article>
            </article>
            <article className="mt-5">
              <label className="text-ms">Tipo Consulta</label>
              <select
                className="w-full pl-5 h-10 rounded-2xl border border-solid border-black"
                onChange={(event) => {
                  setSolicitud({[event.target.value]: true});
                }}
                id=""
              >
                <option value="">Seleccione una consulta</option>{" "}
                {/* Opción inicial */}
                {consultas?.map((consulta, index) => (
                  <option key={index} value={consulta.name}>
                    {consulta.label}
                  </option>
                ))}
              </select>
            </article>
            <article className="mt-10 w-full flex justify-center items-center">
              <button
                className="bg-[#ed1218] p-3 w-44 rounded-3xl text-white flex items-center justify-center"
                onClick={(e) => sendSolicitud(e)}
              >
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Consultar"
                )}
              </button>
            </article>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Cuentas;
