import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function ModalIdClient({idClient, setIdClient}) {
    const [open, setOpen] = React.useState(true);
    const [id, setId] = React.useState(null);
  
    React.useEffect(() => {
      if (!idClient) {
        setOpen(true);
      }
    }, [idClient]);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setIdClient(id);
    };
  
    return (
      <div className="mt-10">
        <button
          onClick={handleOpen}
          className="bg-slate-500 ml-10 p-5 rounded-xl"
        >
          <span className="text-normal text-lg text-white">
            Ingresar Cedula del cliente
          </span>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{...style, width: 400}}>
            <h2 id="parent-modal-title" className="text-bold text-lg text-center">
              Ingresa el numero del documento de identidad
            </h2>
            <section
              id="parent-modal-description"
              className="mt-10 flex justify-center"
            >
              <input
                type="text"
                placeholder="Numero de documento"
                className="border-2 border-gray-300 p-2 rounded-lg"
                onChange={(e) => setId(e.target.value)}
              />
            </section>
            <section className="mt-10 flex justify-end">
              <button
                onClick={handleClose}
                className="bg-slate-500 ml-10 p-2 rounded-xl text-white"
              >
                Siguiente
              </button>
            </section>
          </Box>
        </Modal>
      </div>
    );
  }
  