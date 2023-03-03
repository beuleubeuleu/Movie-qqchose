import React, { useEffect, useState }                                      from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider }                             from "react-router-dom";
import { Home }                                                            from "./pages/Home";
import { DiscoverList }                                                    from "./datas";
import { DetailMovie }                                                     from "./pages/DetailMovie";
import { CategoryType }                                                    from "./types/CategoryType";
import { MovieType }                                                                          from "./types/MovieType";
import { getMoviesByCategories, getMoviesByDiscover, getMoviesBySearch, getNowPlayingMovies } from './api/Movie';
import { getCategories }                                                                      from "./api/Categories";

function App() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  const getCategoryList = async () => {
    const categories = await getCategories()
    setCategoryList(categories)
  }
  const getAllMovies = async () => {
    const movies = await getNowPlayingMovies()
    setMovieList(movies);
  }
  const getDiscoverMovies = async (discover:string) => {
    const movies = await getMoviesByDiscover(discover)
    setMovieList(movies);
  }
  const getCategoryMovies = async (category:string) => {
    const movies = await getMoviesByCategories(category)
    setMovieList(movies);
  }
  const getSearchMovies = async (search:string) => {
    const movies = await getMoviesBySearch(search)
    setMovieList(movies)
  }
  //useEffect for fetching home page
  useEffect(() => {
    getAllMovies();
    getCategoryList()
  }, []);

  const fetchDiscoverMovies = (discover: string) => {
    getDiscoverMovies(discover)
  };
  const fetchCategoryMovies = (category: string) => {
    getCategoryMovies(category)
  };
  const fetchSearchedMovies = (search: string) => {
    getSearchMovies(search)
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          discoverList={DiscoverList}
          categoryList={categoryList}
          onclickDiscover={fetchDiscoverMovies}
          onclickCategory={fetchCategoryMovies}
          onSubmitSearch={fetchSearchedMovies}
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
