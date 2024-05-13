import {NavBar} from "../../components";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useRef} from "react";

function generarDatosHistorialLlamadas(cantidad) {
  const estados = ["activo", "pendiente", "resuelto"];
  const fechaInicio = new Date(2024, 0, 1); // 1 de enero de 2024
  const fechaFin = new Date(); // Fecha actual
  const datos = [];

  for (let i = 0; i < cantidad; i++) {
    const fecha = new Date(
      fechaInicio.getTime() +
        Math.random() * (fechaFin.getTime() - fechaInicio.getTime())
    )
      .toISOString()
      .split("T")[0];

    const duracionLlamada = Math.floor(Math.random() * 30) + 1; // Duración entre 1 y 30 minutos
    const estado = estados[Math.floor(Math.random() * estados.length)];
    const idCliente = Math.floor(Math.random() * 1000) + 1; // ID de cliente entre 1 y 1000
    const idEmpleado = Math.floor(Math.random() * 100) + 1; // ID de empleado entre 1 y 100

    datos.push({
      id_cliente: idCliente,
      id_empleado: idEmpleado,
      duracion_llamada: duracionLlamada,
      estado: estado,
      fecha: fecha,
    });
  }

  return datos;
}

const datos = generarDatosHistorialLlamadas(100);

export default function Dashboard() {
  const refBarras = useRef(null);
  const refPastel = useRef(null);
  const refEscala = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const datosGraficoBarras = {
      labels: datos.map((d) => d.fecha),
      datasets: [
        {
          label: "Duración de las llamadas (minutos)",
          data: datos.map((d) => d.duracion_llamada),
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    };

    const datosGraficoPastel = {
      labels: ["Activo", "Pendiente", "Resuelto"],
      datasets: [
        {
          data: [
            datos.filter((d) => d.estado === "activo").length,
            datos.filter((d) => d.estado === "pendiente").length,
            datos.filter((d) => d.estado === "resuelto").length,
          ],
          backgroundColor: [
            "rgba(255,99,132,0.2)",
            "rgba(54,162,235,0.2)",
            "rgba(255,206,86,0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const datosGraficoEscala = {
      labels: datos.map((d) => d.fecha),
      datasets: [
        {
          label: "Tus llamadas",
          data: datos.map((d) => d.id_empleado),
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };

    // Crear los gráficos
    const barrasChart = new window.Chart(refBarras.current.getContext("2d"), {
      type: "bar",
      data: datosGraficoBarras,
      options: {responsive: true},
    });

    const pastelChart = new window.Chart(refPastel.current.getContext("2d"), {
      type: "pie",
      data: datosGraficoPastel,
      options: {responsive: true},
    });

    const escalaChart = new window.Chart(refEscala.current.getContext("2d"), {
      type: "line",
      data: datosGraficoEscala,
      options: {responsive: true},
    });

    return () => {
      // Destruir los gráficos antes de desmontar el componente
      barrasChart.destroy();
      pastelChart.destroy();
      escalaChart.destroy();
    };
  }, []);

  const handleRedirectHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center text-xl justify-start ml-3 mt-10 cursor-pointer text-white">
        <article
          className="flex gap-1 shadow-lg rounded-md items-center p-2 bg-[#ed1218]"
          onClick={handleRedirectHome}
        >
          Nueva llamada{" "}
        </article>
      </div>

      <section className="mt-5 flex justify-around gap-5 sm:flex-row flex-col">
        <article className="w-full h-60 shadow-xl ">
          <canvas ref={refBarras}></canvas>
        </article>
        <article className="w-full h-60 shadow-xl flex justify-center ">
          <canvas ref={refPastel}></canvas>
        </article>
        <article className="w-full h-60 shadow-xl">
          <canvas ref={refEscala}></canvas>
        </article>
      </section>
    </>
  );
}
