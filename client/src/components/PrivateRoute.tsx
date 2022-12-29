import { useSelector } from "react-redux";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { isAuth } = useSelector((state: any) => state.authSlice);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
