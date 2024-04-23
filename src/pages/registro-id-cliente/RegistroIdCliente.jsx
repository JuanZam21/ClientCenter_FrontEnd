import React, {useEffect} from "react";
import {ModalIdClient} from "../../components";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

function RegistroIdCliente() {
  const [idClient, setIdClient] = React.useState(null);
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div>
      {" "}
      <ModalIdClient idClient={idClient} setIdClient={setIdClient} />
    </div>
  );
}

export default RegistroIdCliente;
