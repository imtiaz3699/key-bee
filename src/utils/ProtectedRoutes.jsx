import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/userContext";
import { routes } from "./routes";
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/" replace />;
  } else {
    <Navigate to={routes?.DASHBOARD} replace />;
  }
  return children;
};

export default ProtectedRoute;
