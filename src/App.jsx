import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import {NotFoundPage, RegistroIdCliente, Home, Tarjetas} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="registro" />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="registro" element={<RegistroIdCliente />} />

        <Route element={<AuthLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/tarjetas" element={<Tarjetas />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
