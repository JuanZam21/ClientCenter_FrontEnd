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

export default function ModalResponseCuenta({cuentaData, isOpen}) {
  const [open, setOpen] = useState(isOpen);
  const [data, setData] = useState(cuentaData);

  useEffect(() => {
    setOpen(isOpen);
    setData(cuentaData)
  }, [isOpen, cuentaData]);


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
                Tipo de Cuenta:{" "}
                <span className="font-light">{data?.Tipo_cuenta?.name}</span>{" "}
              </h3>
              <div>
                {data?.saldo_actual && (
                  <h3 className="font-bold">
                    {" "}
                    Saldo Actual:{" "}
                    <span className="font-light">
                      {data?.saldo_actual}
                    </span>{" "}
                  </h3>
                )}

                {data?.fecha_apertura && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Apertura:{" "}
                    <span className="font-light">
                      {data?.fecha_apertura}
                    </span>{" "}
                  </h3>
                )}
                {data?.fecha_cierre && (
                  <h3 className="font-bold">
                    {" "}
                    Fecha Cierre:{" "}
                    <span className="font-light">{data?.fecha_cierre}</span>{" "}
                  </h3>
                )}
                {data?.beneficios && (
                  <h3 className="font-bold">
                    {" "}
                    Beneficios:{" "}
                    <span className="font-light">{data?.beneficios}</span>{" "}
                  </h3>
                )}
                {data?.estado_cuenta && (
                  <h3 className="font-bold">
                    {" "}
                    Estado:{" "}
                    <span className="font-light">
                      {data?.estado_cuenta}
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
