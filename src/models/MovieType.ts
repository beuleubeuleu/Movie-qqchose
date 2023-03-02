import { CategoryType } from "./CategoryType";

export type  MovieType =
{
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string | Date;
  overview: string;
  genres: CategoryType[];
}

