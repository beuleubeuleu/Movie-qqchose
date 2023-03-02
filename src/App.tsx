import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { movieData } from "./datas";
import { DetailMovie } from "./components/DetailMovie";
import axios from "axios";
import { CategoryType } from "./models/CategoryType";

const fetchMovies = (type: string) => {
  console.log(`fetching ${type} movies`);
};

function App() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  useEffect(() => {
    axios
      .get<{ genres: CategoryType[] }>(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setCategoryList(res.data.genres);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          categoryList={categoryList}
          onclick={fetchMovies}
          data={movieData}
        />
      ),
    },
    {
      path: "/movie/:id",
      element: <DetailMovie />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
