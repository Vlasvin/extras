import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/AuthContext";

const PublicRoute = () => {
  const authContext = useAuth();

  const { user } = authContext || {};

  return !user ? <Outlet /> : <Navigate to="/visas/usa/visa-form" />;
};

export default PublicRoute;
