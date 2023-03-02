import axios            from "axios";
import { CategoryType } from "../types/CategoryType";

export const getCategories = () => {
  return axios.get<{ genres: CategoryType[] }>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU`)
              .then((res) => res.data.genres);
}