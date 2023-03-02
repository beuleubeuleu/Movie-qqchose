import React from "react";
import { MovieCard } from "./MovieCard";
import { MovieType } from "../types/MovieType";
import "./MovieList.css";

type MovieListProps = {
  data: MovieType[];
};

export const MovieList = ({ data }: MovieListProps) => {
  return (
    <ul className={"movie-list"}>
      {data.map((movie: MovieType) => (
        <MovieCard movieData={movie} key={movie.id} />
      ))}
    </ul>
  );
};
