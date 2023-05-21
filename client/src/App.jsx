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
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute/AdminRoute";
import UserRoute from "./Routes/UserRoute/UserRoute";

function App() {
  const authCheck = useAuthCheck();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "/registration",
          element: (
            <PublicRoute>
              <Registration />
            </PublicRoute>
          ),
        },
        {
          path: "/protected",
          element: (
            <PrivateRoute>
              <Protected />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          ),
        },
        {
          path: "/products",
          element: (
            <UserRoute>
              <Products />
            </UserRoute>
          ),
        },
      ],
    },
  ]);

  return authCheck && <RouterProvider router={router} />;
}

export default App;
