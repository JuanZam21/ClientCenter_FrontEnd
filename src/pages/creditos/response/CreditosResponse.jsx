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

export default function ModalResponseCredito({creditoData, isOpen}) {
  const [open, setOpen] = useState(isOpen);
  const [data, setData] = useState(creditoData);

  useEffect(() => {
    setOpen(isOpen);
    setData(creditoData)
  }, [isOpen, creditoData]);


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
                Nombre Cliente:{" "}
                <span className="font-light">{`${data?.Persona?.nombre} ${data?.Persona?.apellido}`}</span>
              </h2>

              <h3 className="font-bold">
                Tipo de Credito:{" "}
                <span className="font-light">{data?.tipo_credito}</span>{" "}
              </h3>
              <div>
                {data?.monto_original && (
                  <h3 className="font-bold">
                    {" "}
                    Monto Original:{" "}
                    <span className="font-light">
                      {data?.monto_original}
                    </span>{" "}
                  </h3>
                )}

                {data?.saldo_pendiente && (
                  <h3 className="font-bold">
                    {" "}
                    Saldo Pendiente:{" "}
                    <span className="font-light">
                      {data?.saldo_pendiente}
                    </span>{" "}
                  </h3>
                )}
                {data?.tasa_interes && (
                  <h3 className="font-bold">
                    {" "}
                    Tasa Interes:{" "}
                    <span className="font-light">{data?.tasa_interes}</span>{" "}
                  </h3>
                )}
                {data?.fecha_inicio && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Inicio:{" "}
                    <span className="font-light">{data?.fecha_inicio}</span>{" "}
                  </h3>
                )}
                {data?.fecha_finalizacion && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Finalizacion:{" "}
                    <span className="font-light">
                      {data?.fecha_finalizacion}
                    </span>{" "}
                  </h3>
                )}
                {data?.estado_credito && (
                  <h3 className="font-bold">
                    {" "}
                    Estado:{" "}
                    <span className="font-light">
                      {data?.estado_credito}
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
