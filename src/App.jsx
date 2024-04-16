import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import {NotFoundPage, RegistroIdCliente} from "./pages";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="registro" />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="registro" element={<RegistroIdCliente />} />

        <Route element={<AuthLayout />}>
          <Route path="/home" element={<Home/>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
