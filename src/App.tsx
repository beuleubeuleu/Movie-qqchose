import React                                   from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home }                                from "./pages/Home";
import { DetailMovie }                         from "./pages/DetailMovie";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Home/>
      )
    },
    {
      path: "/movie/:id",
      element: <DetailMovie/>
    }
  ]);

  return (
      <div className="App">

        <RouterProvider router={ router }/>
      </div>
  );
}

export default App;
