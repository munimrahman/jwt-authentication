import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const role = user?.role;
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };
  return (
    <div className="navbar bg-base-100 px-20 border-b">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          JWT Auth
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {user && (
            <li>
              <Link to={"/protected"}>Protected</Link>
            </li>
          )}
          {user?.role === "user" && (
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          )}
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Log In</Link>
              </li>
              <li>
                <Link to={"/registration"}>Registration</Link>
              </li>
            </>
          )}
        </ul>
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li onClick={handleLogOut}>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
