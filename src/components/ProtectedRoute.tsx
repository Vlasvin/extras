import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return element;
};

export default ProtectedRoute;
