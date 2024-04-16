import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Importa tu hook useAuth

const AuthLayout = () => {
  const {isAuthenticated} = useAuth();

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to='registro' />
  );
};

export default AuthLayout;
