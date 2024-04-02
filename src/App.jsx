import Container from "@layouts/Container";
import * as React from "react";
import {GridCards, ModalIdClient} from "./components";

function App() {
  const [idClient, setIdClient] = React.useState(null);
  return (
    <>
      <Container>
        <section className="pt-20">
          <h1 className="text-bold text-5xl">Bienvenido a Client Center</h1>
        </section>
      </Container>
      <ModalIdClient idClient={idClient} setIdClient={setIdClient} />
      <section className="px-16 mt-10">{idClient && <GridCards />}</section>
    </>
  );
}

export default App;
