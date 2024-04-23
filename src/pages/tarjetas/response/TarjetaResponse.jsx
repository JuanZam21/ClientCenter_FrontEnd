import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalResponseTarjeta({tarjetaData, isOpen}) {
  const [open, setOpen] = useState(isOpen);
  const [data, setData] = useState(tarjetaData);

  useEffect(() => {
    setOpen(isOpen);
    setData(tarjetaData)
  }, [isOpen, tarjetaData]);

  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div className="mt-10">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style, width: 400}}>
          <h2
            id="parent-modal-title"
            className="text-bold text-xl text-center text-[#ed1218]"
          >
            Respuesta al Cliente
          </h2>
          <section
            id="parent-modal-description"
            className="mt-10 flex justify-center"
          >
            <section className="bg-[#ed1218] w-96 h-32 rounded-md p-5 text-white">
              <h2 className="font-bold">
                Nombre titular:{" "}
                <span className="font-light">{data?.nombre_titular}</span>
              </h2>

              <h3 className="font-bold">
                Tipo de tarjeta:{" "}
                <span className="font-light">{data?.Tipo_tarjeta?.name}</span>{" "}
              </h3>
              <div>
                {data?.fecha_emision && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Emision:{" "}
                    <span className="font-light">
                      {data?.fecha_emision}
                    </span>{" "}
                  </h3>
                )}

                {data?.fecha_vencimiento && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Vencimiento:{" "}
                    <span className="font-light">
                      {data?.fecha_vencimiento}
                    </span>{" "}
                  </h3>
                )}
                {data?.fecha_corte && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Corte:{" "}
                    <span className="font-light">{data?.fecha_corte}</span>{" "}
                  </h3>
                )}
                {data?.cupo_total && (
                  <h3 className="font-bold">
                    {" "}
                    Cupo Total:{" "}
                    <span className="font-light">{data?.cupo_total}</span>{" "}
                  </h3>
                )}
                {data?.tasa_interes && (
                  <h3 className="font-bold">
                    {" "}
                    Tasa Interes:{" "}
                    <span className="font-light">
                      {data?.tasa_interes}
                    </span>{" "}
                  </h3>
                )}
                {data?.estado_tarjeta && (
                  <h3 className="font-bold">
                    {" "}
                    Estado Tarjeta:{" "}
                    <span className="font-light">
                      {data?.estado_tarjeta}
                    </span>{" "}
                  </h3>
                )}
                {data?.pago_minimo && (
                  <h3 className="font-bold">
                    {" "}
                    Pago Minimo:{" "}
                    <span className="font-light">
                      {data?.Tpago_minimo}
                    </span>{" "}
                  </h3>
                )}
                {data?.pago_total && (
                  <h3 className="font-bold">
                    {" "}
                    Pago Total:{" "}
                    <span className="font-light">{data?.pago_total}</span>{" "}
                  </h3>
                )}
                {data?.programa_puntos && (
                  <h3 className="font-bold">
                    {" "}
                    Programa Puntos:{" "}
                    <span className="font-light">
                      {data?.programa_puntos}
                    </span>{" "}
                  </h3>
                )}
              </div>
            </section>
          </section>
          <section className="mt-10 flex justify-center"></section>
        </Box>
      </Modal>
    </div>
  );
}
