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
    <div className="bg pt-14 text-white">
      <section className="flex justify-around items-center">
        <article className="flex items-center">
          <img className="w-32" src={Logo} alt="" />
          <span className="font-bold text-2xl">Client Center</span>
        </article>
        <article>
          <button className="border  px-5 rounded-2xl" onClick={redirectLogin}>
            <span className="font-light">Ingresa</span>
          </button>
        </article>
      </section>
      <section className="mt-20 flex justify-around">
        <article className="ml-5">
          <h1 className="font-bold text-5xl">
            Resuelve tus dudas <p> al instante</p>
          </h1>
          <p className="font-light mt-5">Asesores 100% calificados</p>
        </article>
        <article></article>
      </section>
    </div>
  );
}

export default Bienvenida;
