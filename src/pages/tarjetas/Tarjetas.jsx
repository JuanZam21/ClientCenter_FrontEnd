import React from "react";
import {NavBar} from "../../components";

function Tarjetas() {
  return (
    <div>
      <NavBar />
      <section className="flex justify-center">
        <section className="p-10 w-full">
          <article className="px-10">
            <h1 className="text-[#ed1218] text-4xl  text-bold">Tarjetas</h1>
            <article className="flex justify-between mt-5 gap-28">
              <article className="w-full flex flex-col gap-2">
                <label className="text-ms">Cedula del Cliente</label>
                <input
                  placeholder="1.193.154.954"
                  className="w-full h-10 pl-5 rounded-2xl border border-solid border-black"
                  type="text"
                />
              </article>
              <article className="w-full flex flex-col gap-2">
                <label className="text-ms">Nombre</label>
                <input
                  className="w-full pl-5 h-10 rounded-2xl border border-solid border-black"
                  placeholder="Alexander"
                  type="text"
                />
              </article>
            </article>
            <article className="mt-5">
              <label className="text-ms">Tipo Consulta</label>
              <select
                className="w-full pl-5 h-10 rounded-2xl border border-solid border-black"
                id=""
              >
                {consultas.map((consulta) => (
                  <option value={consulta.value}>{consulta.label}</option>
                ))}
              </select>
            </article>
          </article>
        </section>
      </section>
    </div>
  );
}

const consultas = [
  {
    value: "fecha_de_emision",
    label: "Fecha de emisión",
  },
  {value: "fecha_corte", label: "Fecha corte"},
  {
    value: "fecha_vencimiento",
    label: "Fecha de vencimiento",
  },
  {
    value: "cupo_total",
    label: "Cupo total",
  },
  {
    value: "cupo_disponible",
    label: "Cupo disponible",
  },
  {
    value: "saldo_actual",
    label: "Saldo actual",
  },
  {
    value: "tasa_de_interes",
    label: "Tasa de interes",
  },
  {
    value: "estado_tarjeta",
    label: "Estado de la tarjeta",
  },
  {
    value: "ccv",
    label: "CCV",
  },
  {
    value: "pago_minimo",
    label: "Pago minimo",
  },
  {
    value: "pago_total",
    label: "Pago total",
  },
  {
    value: "pago_anticipado",
    label: "Pago anticipado",
  },
  {
    value: "ultimos_movimientos",
    label: "Ultimos movimientos",
  },
  {
    value: "Programa_puntos",
    label: "Programa de puntos",
  },
];

export default Tarjetas;
