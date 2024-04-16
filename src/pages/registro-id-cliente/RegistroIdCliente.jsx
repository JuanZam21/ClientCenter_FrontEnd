import React from "react";
import {ModalIdClient} from "../../components";

function RegistroIdCliente() {
  const [idClient, setIdClient] = React.useState(null);
  return (
    <div>
      {" "}
      <ModalIdClient idClient={idClient} setIdClient={setIdClient} />
    </div>
  );
}

export default RegistroIdCliente;
