import React, { useEffect, useState }            from "react";
import { Navbar }       from "../components/Navbar";
import { MovieList }    from "../components/MovieList";
import { CategoryType } from "../types/CategoryType";
import { MovieType }    from "../types/MovieType";
import Searchbar        from "../components/Searchbar";
import { DiscoverList }                                                    from "../datas";
import { getCategories } from "../api/Categories";
import { getMoviesByCategories, getMoviesByDiscover, getMoviesBySearch, getNowPlayingMovies } from "../api/Movie";





export const Home = () => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  const getAllMovies = async () => {
    const movies = await getNowPlayingMovies()
    setMovieList(movies);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  
  const getCategoryList = async () => {
    const categories = await getCategories()
    setCategoryList(categories)
  }

  useEffect(() => {
    getCategoryList()
  }, []);

  const getCategoryMovies = async (category:string) => {
    const movies = await getMoviesByCategories(category)
    setMovieList(movies);
  }

  const fetchCategoryMovies = (category: string) => {
    getCategoryMovies(category)
  };
  
  const fetchDiscoverMovies = (discover: string) => {
    getDiscoverMovies(discover)
  };

  const getDiscoverMovies = async (discover:string) => {
    const movies = await getMoviesByDiscover(discover)
    setMovieList(movies);
  }

  const getSearchMovies = async (search:string) => {
    const movies = await getMoviesBySearch(search)
    setMovieList(movies)
  }

  const fetchSearchedMovies = (search: string) => {
    getSearchMovies(search)
  }

  return (
      <div className="Home">
        <header className="App-header">
          <Navbar
              discoverList={ DiscoverList }
              categoryList={categoryList}
              onclickDiscover={ fetchDiscoverMovies }
              onclickCategory={ fetchCategoryMovies }
          />
        </header>

        <MovieList data={ movieList }/>
        <Searchbar onSubmitSearch={fetchSearchedMovies} />
      </div>
  );
};
