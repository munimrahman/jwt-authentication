import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import DashBoard from "./components/DashBoard/DashBoard";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Products from "./components/Products/Products";

function App() {
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
          element: <Login />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
