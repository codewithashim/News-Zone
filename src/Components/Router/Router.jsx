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
      {
        path: "/",
        loader: () => fetch("http://localhost:8080/news"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cetagory/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:8080/cetagory/${params.id}`);
        },
        element: <Cetagory></Cetagory>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:8080/news/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
