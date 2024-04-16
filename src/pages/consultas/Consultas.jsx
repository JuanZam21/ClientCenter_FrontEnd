import React from "react";
import { GridCards } from "../../components";
import Container from "@layouts/Container";

const titles = [
  {
    title: "Fecha de corte",
    href: "/fecha_corte",
  },
  {
    title: "Cupo disponible",
    href: "/cupo_disponible",
  },
  {
    title: "Ultimos movimientos",
    href: "/ultimos_movimientos",
  },
  {
    title: "Estado de cuenta",
    href: "/estado_de_cuenta",
  },
  {
    title: "Pago mínimo",
    href: "/pago_minimo",
  },
  {
    title: "Pago total",
    href: "/pagos_totales",
  },
  {
    title: "Pago anticipado",
    href: "/pago_anticipado",
  }
];





function Consultas() {
  return (
    <Container>
      <GridCards dataCards={titles} />
    </Container>
  );
}

export default Consultas;
