import React from "react";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound/NotFound";

const AdminRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  const auth = useSelector((state) => state.auth);
  const isAdmin = auth?.user?.role === "admin" ? true : false;

  return isLoggedIn && isAdmin ? children : <NotFound />;
};

export default AdminRoute;
