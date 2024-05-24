import React, {useEffect} from "react";
import {NavBar} from "../../components";
import {FaCreditCard} from "react-icons/fa6";
import {GiReceiveMoney} from "react-icons/gi";
import {MdAccountBalanceWallet} from "react-icons/md";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import {IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../../components/footer/Footer";

function Home() {
  const navigate = useNavigate();
  const {user, loading, logout} = useAuth();

  useEffect(() => {
    if (!user.cliente && !loading) {
      navigate("/registro");
    }
  }, [user.cliente, loading, navigate]);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <section>
      <NavBar />
      <section className="ml-14">
        <div className=" font-bold mt-5 text-5xl text-slate-600">
          <h1>Atención al cliente</h1>
        </div>
        <section className="flex  justify-start mt-10 text-white text-xl">
          <section className="flex flex-col gap-5 font-semibold">
            <button
              className="bg-[#ed1218] rounded-full px-6 py-3 flex items-center gap-1"
              onClick={(e) => handleNavigation(e, "/tarjetas")}
            >
              <FaCreditCard />
              Tarjetas
            </button>
            <button
              className="bg-[#ed1218] rounded-full px-6 py-3 flex items-center gap-1"
              onClick={(e) => handleNavigation(e, "/creditos")}
            >
              <GiReceiveMoney />
              Créditos
            </button>
            <button
              className="bg-[#ed1218] rounded-full px-6 sm:px-14 py-3 flex items-center gap-1"
              onClick={(e) => handleNavigation(e, "/cuentas")}
            >
              <MdAccountBalanceWallet />
              Cuentas
            </button>
            <button
              className="bg-[#ed1218] rounded-full px-6 py-3 flex items-center gap-1"
              onClick={(e) => handleNavigation(e, "/transacciones")}
            >
              <FaMoneyBillTransfer />
              Transacciones
            </button>
          </section>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default Home;
