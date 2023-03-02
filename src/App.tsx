import React, { useEffect, useState }          from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home }                                from "./components/Home";
import { DiscoverList }             from "./datas";
import { DetailMovie }                         from "./components/DetailMovie";
import axios                                   from "axios";
import { CategoryType }                        from "./models/CategoryType";
import { MovieType } from "./models/MovieType";


function App() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const fetchMovies = (type: string) => {
    console.log(`fetching ${ type } movies`);
    axios.get(`https://api.themoviedb.org/3/movie/${type.toLowerCase().split(' ').join('_')}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-EU&page=1`)
    .then((res) =>{
      setMovieList(res.data.results);
    });
  };
  //useEffect for fetching categories
  useEffect(() => {
    axios
        .get<{ genres: CategoryType[] }>(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU`
        )
        .then((res) => {
          setCategoryList(res.data.genres);
        });
  }, []);

  //useEffect for fetching home page movies
  useEffect(() => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=fr-EU&page=1`
        )
        .then((res) => {
          setMovieList(res.data.results);
        });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Home
              discoverList={ DiscoverList }
              categoryList={ categoryList }
              onclick={ fetchMovies }
              data={ movieList }
          />
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
