import {useNavigate} from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./style/bienvenida.css";

function Bienvenida() {
  const navigate = useNavigate();

  const redirectLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="bg pt-12 text-white pl-20 flex flex-col items-start">
      <section className="flex">
        <article className="flex items-center">
          <img className="w-28" src={Logo} alt="" />
          <span className="font-bold text-2xl">Client Center</span>
        </article>
      </section>
      <section className="mt-20 flex">
        <article className="ml-5">
          <h1 className="font-bold text-5xl">
            Resuelve tus dudas <p> al instante</p>
          </h1>
          <p className="font-light mt-5 text-2xl">Asesores 100% calificados</p>
          <button className="border  px-5 rounded-2xl mt-3" onClick={redirectLogin}>
            <span className="font-bold text-2xl">Ingresa</span>
          </button>
        </article>
      </section>
    </div>
  );
}

export default Bienvenida;
