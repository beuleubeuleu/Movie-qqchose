import React                                   from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home }         from "./components/Home";
import { CategoryList, movieData, DiscoverList } from "./datas";
import { DetailMovie } from "./components/DetailMovie";


const fetchMovies = (type: string) => {
  console.log(`fetching ${ type } movies`);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home discoverList={DiscoverList} categoryList={CategoryList} onclick={fetchMovies} data={movieData} />
  },
  {
   path:'/movie/:id',
   element: <DetailMovie  />
   }
])

function App() {

  return (
      <div className="App">

        <RouterProvider router={router}/>

      </div>
  );
}

export default App;
