import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Alert, CircularProgress} from "@mui/material";
import Logo from "../../assets/img/logo.png";
import useAuth from "../../hooks/useAuth";
import "./style/login.css";

function Login() {
  const navigate = useNavigate();

  const {user, loading, login} = useAuth();

  useEffect(() => {
    if (user?.agente && !loading) {
      navigate("/dashboard");
    }
  }, [user.agente, loading, navigate]);

  const [error, setError] = useState({isError: false, message: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({id: "", password: ""});

  const HandleLogin = async () => {
    setIsLoading(true);

    try {
      const findClient = await fetch(`http://localhost:9000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...dataLogin}),
      });
      const response = await findClient.json();

      if (!response || !response.success) {
        setError({isError: true, message: response.message});
        return;
      }
      login(response.data, "agente");
    } catch (error) {
      setError({isError: true, message: error.message});
    } finally {
      setIsLoading(false);
    }
  };

  const handleData = (e) => {
    setDataLogin({...dataLogin, [e.target.name]: e.target.value});
  };

  return (
    <div className="bg pt-14 text-white">
      {error.isError && (
        <Alert className="absolute top-2 w-full" severity="error">
          {error.message}
        </Alert>
      )}
      <section className="flex pl-24">
        <article className="flex items-center">
          <img className="w-28" src={Logo} alt="" />
          <span className="font-bold text-2xl">Client Center</span>
        </article>
        <article></article>
      </section>
      <section className="mt-5 flex justify-around items-center">
        <article className="ml-5">
          <h1 className="font-bold text-5xl">
            Resuelve tus dudas <p> al instante</p>
          </h1>
          <p className="font-light mt-5 text-2xl">Asesores 100% calificados</p>
        </article>
        <article className="bg-slate-100 w-1/4 rounded-xl">
          <form action="" className="text-[#ed1218] mt-5 p-5 space-y-5">
            <h2 className="font-bold">Inicia sesión</h2>
            <article className="flex-col flex">
              <label htmlFor="">NO. de Cédula</label>
              <input
                className="border rounded-2xl p-2 text-black"
                type="text"
                name="id"
                onChange={handleData}
                placeholder="Ingresa tu cédula"
              />
            </article>
            <article className="flex-col flex">
              <label htmlFor="">Clave</label>
              <input
                name="password"
                className="border rounded-2xl p-2 text-black"
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={handleData}
              />
            </article>
          </form>
          <article
            className="bg-gray-500 p-2 flex justify-center cursor-pointer"
            onClick={HandleLogin}
          >
            <button className=" text-white font-bold">
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Ingresar"
              )}
            </button>
          </article>
        </article>
      </section>
    </div>
  );
}

export default Login;
