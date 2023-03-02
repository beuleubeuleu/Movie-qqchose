import axios from "axios";

export const getNowPlayingMovies = () => {
  return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU&page=1`)
              .then(res => res.data.results);
}

export const getMovieById = (id: string) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU&page=1`)
              .then((res) => res.data);
}

export const getMoviesByDiscover = (discover: string) => {
  let discoverForFetching: string = discover.toLowerCase()
                                            .split(" ")
                                            .join("_");
  return axios.get(`https://api.themoviedb.org/3/movie/${ discoverForFetching }?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU&page=1`)
              .then(res => res.data.results);
}

export const getMoviesByCategories = (category: string) => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${ category }`)
              .then((res) => res.data.results);
}