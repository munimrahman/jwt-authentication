import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import DashBoard from "./components/DashBoard/DashBoard";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Products from "./components/Products/Products";
import Protected from "./components/Protected/Protected";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authCheck = useAuthCheck();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          // can see all user (log in or log out)
          element: <Home />,
        },
        {
          path: "/login",
          element: (
            // only can see if not log in, if user logged in it will not visible to user
            <Login />
          ),
        },
        {
          path: "/registration",
          element: (
            // only can see if not log in, if user logged in it will not visible to user
            <Registration />
          ),
        },
        {
          path: "/protected",
          element: (
            // only can see after login both user and admin
            <Protected />
          ),
        },
        {
          path: "/dashboard",
          element: (
            // only can see after login and only for admin role
            <DashBoard />
          ),
        },
        {
          path: "/products",
          element: (
            // only can see after login and only for user
            <Products />
          ),
        },
      ],
    },
  ]);

  return authCheck && <RouterProvider router={router} />;
}

export default App;
