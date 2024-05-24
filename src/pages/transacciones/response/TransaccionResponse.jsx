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

export default function ModalResponseTransaccion({transacciontaData, isOpen}) {
  const [open, setOpen] = useState(isOpen);
  const [data, setData] = useState(transacciontaData);

  useEffect(() => {
    setOpen(isOpen);
    setData(transacciontaData);
  }, [isOpen, transacciontaData]);

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
                Descripcion:{" "}
                <span className="font-light">{data?.descripcion}</span>
              </h2>

              <h3 className="font-bold">
                Tipo Transacción:{" "}
                <span className="font-light">
                  {data?.Tipo_transaccion?.name}
                </span>{" "}
              </h3>
              <div>
                {data?.fecha_transaccion && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha transaccion:{" "}
                    <span className="font-light">
                      {data?.fecha_transaccion}
                    </span>{" "}
                  </h3>
                )}

                {data?.monto && (
                  <h3 className="font-bold">
                    {" "}
                    Monto: <span className="font-light">
                      {data?.monto}
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
