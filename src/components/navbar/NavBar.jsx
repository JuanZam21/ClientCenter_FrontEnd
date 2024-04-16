import React from "react";
import Logo from "../../assets/img/logo.png";
import {FaUserAlt} from "react-icons/fa";

function NavBar() {
  return (
    <nav className="bg-[#ed1218] flex justify-between text-white text-2xl h-16 ">
      <div className="flex w-1/4 items-center ml-10">
        <img className="w-14 h-14" src={Logo} alt="" />
        <div>Client Center</div>
      </div>

      <div className="flex w-1/4 items-center">
        <FaUserAlt />
        <div className="ml-1">¡Hola Alexander!</div>
      </div>
    </nav>
  );
}

export default NavBar;
