import React from "react";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const StudentRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const isUser = auth?.user?.role === "user" ? true : false;

  return isLoggedIn && isUser ? children : <Navigate to={"/login"} />;
};

export default StudentRoute;
