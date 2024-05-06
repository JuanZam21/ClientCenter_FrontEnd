import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import {
  NotFoundPage,
  RegistroIdCliente,
  Home,
  Tarjetas,
  Creditos,
  Cuentas,
  Transacciones,
  Bienvenida,
  Login,
  Dashboard,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/" element={<Bienvenida />} />
        <Route path="/login" element={<Login />} />

        <Route element={<AuthLayout perfil={"agente"} path={"/login"} />}>
          <Route path="/dashboard" element={<Dashboard />} />;
          <Route path="/registro" element={<RegistroIdCliente />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/tarjetas" element={<Tarjetas />}></Route>
          <Route path="/creditos" element={<Creditos />}></Route>
          <Route path="/cuentas" element={<Cuentas />}></Route>
          <Route path="/transacciones" element={<Transacciones />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
