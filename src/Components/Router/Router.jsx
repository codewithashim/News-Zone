import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Cetagory from "../Cetagory/Catagory/Cetagory";
import News from "../News/News/News";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/cetagory/:id",
        element: <Cetagory></Cetagory>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
