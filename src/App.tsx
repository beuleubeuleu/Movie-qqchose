import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { DiscoverList } from "./datas";
import { DetailMovie } from "./pages/DetailMovie";
import axios from "axios";
import { CategoryType } from "./types/CategoryType";
import { MovieType } from "./types/MovieType";
import { getHomePageMovies } from './api/Movie';

function App() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const fetchDiscoverMovies = (type: string) => {
    console.log(`fetching ${type} movies`);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${type
          .toLowerCase()
          .split(" ")
          .join("_")}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=fr-EU&page=1`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  };
  const fetchCategoryMovies = (type: string) => {
    console.log(`fetching ${type} movies`);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-EU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${type}`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  };
  //useEffect for fetching categories
  useEffect(() => {
    axios
      .get<{ genres: CategoryType[] }>(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-EU`
      )
      .then((res) => {
        setCategoryList(res.data.genres);
      });
  }, []);

  const getAllMovies = async () => {
    const movies = await getHomePageMovies()
    setMovieList(movies);
  }
  //useEffect for fetching home page movies
  useEffect(() => {
    getAllMovies();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          discoverList={DiscoverList}
          categoryList={categoryList}
          onclickDiscover={fetchDiscoverMovies}
          onclickCategory={fetchCategoryMovies}
          data={movieList}
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
