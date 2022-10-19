import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Components/Router/Router";

function App() {
  return (
    <>
      <main>
      <RouterProvider router={route}></RouterProvider>
      </main>
    </>
  );
}

export default App;
