import React from "react";
import {NavBar} from "../../components";
import {FaCreditCard} from "react-icons/fa6";
import {GiReceiveMoney} from "react-icons/gi";
import {MdAccountBalanceWallet} from "react-icons/md";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import {IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home() {
  const navigate = useNavigate();
  const {logout} = useAuth();

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/registro");
  };
  return (
    <section>
      <NavBar />
      <div
        className="flex items-center  text-xl justify-end mr-10 mt-2 cursor-pointer"
        onClick={(e) => {
          handleLogout(e);
        }}
      >
        <article className="flex gap-1 shadow-lg rounded-md items-center p-2">
          <IoIosLogOut />
          Cerrar sesion
        </article>
      </div>
      <div className="flex justify-center mt-5 text-5xl text-slate-600">
        <h1>Atención al cliente</h1>
      </div>
      <section className="flex  justify-center mt-10 text-white text-xl">
        <section className="flex flex-col gap-5">
          <div className="flex gap-10">
            <article>
              <button
                className="bg-[#ed1218] rounded-lg px-4 py-1 flex items-center gap-1"
                onClick={(e) => handleNavigation(e, "/tarjetas")}
              >
                <FaCreditCard />
                Tarjetas
              </button>
            </article>
            <article>
              <button
                className="bg-[#ed1218] rounded-lg px-4 py-1 flex items-center gap-1"
                onClick={(e) => handleNavigation(e, "/creditos")}
              >
                <GiReceiveMoney />
                Créditos
              </button>
            </article>
          </div>
          <div className="flex gap-5">
            <article>
              <button
                className="bg-[#ed1218] rounded-lg px-4 py-1 flex items-center gap-1"
                onClick={(e) => handleNavigation(e, "/cuentas")}
              >
                <MdAccountBalanceWallet />
                Cuentas
              </button>
            </article>
            <article>
              <button
                className="bg-[#ed1218] rounded-lg px-4 py-1 flex items-center gap-1"
                onClick={(e) => handleNavigation(e, "/transacciones")}
              >
                <FaMoneyBillTransfer />
                Transacciones
              </button>
            </article>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Home;
