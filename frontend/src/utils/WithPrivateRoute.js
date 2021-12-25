import React from "react";
import { Navigate } from "react-router-dom";

const WithPrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("recipe"));

  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default WithPrivateRoute;
