import axios from 'axios';
import { MovieType } from '../types/MovieType';

export const getHomePageMovies = () => {
  const movies = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=fr-EU&page=1`)
  .then(res => res.data.results)
  return movies;
}

