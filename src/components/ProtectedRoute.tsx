import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/AuthContext";

const ProtectedRoute = () => {
  const authContext = useAuth();

  const { user } = authContext || {};

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
