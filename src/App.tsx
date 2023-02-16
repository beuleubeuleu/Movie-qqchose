import React                                   from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home }         from "./components/Home";
import { CategoryList, movieData } from "./datas";

const fetchMovies = (type: string) => {
  console.log(`fetching ${ type } movies`);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home categoryList={CategoryList} onclick={fetchMovies} data={movieData} />
  }
  /*{
   path:'/movie/:id',
   }*/
])

function App() {

  return (
      <div className="App">

        <RouterProvider router={router}/>

      </div>
  );
}

export default App;
