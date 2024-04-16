import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useAuth from "../../hooks/useAuth";
import {Alert, Button, CircularProgress} from "@mui/material";

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

export default function ModalIdClient({idClient, setIdClient}) {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState({isError: false, message: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);

  const {isAuthenticated} = useAuth();

  useEffect(() => {
    if (!idClient) {
      setOpen(true);
    }
  }, [idClient]);

  const handleClose = async () => {
    setIsLoading(true);
    try {
      const findClient = await fetch(`http://localhost:3001/clients/${id}`);
      const response = await findClient.json();
    } catch (error) {
      setError({isError: true, message: "El cliente no existe"});
      return;
    } finally {
      setIsLoading(false);
    }

    if (!isAuthenticated) return;
    setOpen(false);
    setIdClient(id);
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
            Ingresa el numero del documento de identidad
          </h2>
          <section
            id="parent-modal-description"
            className="mt-10 flex justify-center"
          >
            <input
              type="text"
              placeholder="Número de documento"
              className="border-2 border-gray-300 p-2 rounded-lg text-lg"
              onChange={(e) => setId(e.target.value)}
            />
          </section>
          <section className="mt-10 flex justify-center">
            <button
              onClick={handleClose}
              className="bg-[#ed1218] p-3 w-20 rounded-3xl text-white flex items-center justify-center"
            >
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Ingresar"
              )}
            </button>
          </section>
          {error.isError && (
            <Alert className="mt-5" severity="error">
              {error.message}
            </Alert>
          )}
        </Box>
      </Modal>
    </div>
  );
}