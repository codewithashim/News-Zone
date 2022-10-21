import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Cetagory from "../Cetagory/Catagory/Cetagory";
import News from "../News/News/News";
import PriveteRoute from "./PriveteRoute";
import TramsAndConditions from "../TramsAndCondition/TramsAndConditions";
import Profile from "../Profile/Profile";

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
        element: (
          <PriveteRoute>
            <News></News>
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8080/news/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/trams", element: <TramsAndConditions></TramsAndConditions> },
      {
        path: "/profile",
        element: (
          <PriveteRoute>
            <Profile></Profile>
          </PriveteRoute>
        ),
      },

      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
