import React from "react";
import "./MovieCard.css";
import { MovieType } from "../types/MovieType";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movieData: MovieType;
};

export const MovieCard = ({ movieData }: MovieCardProps) => {
  return (
    <li className="movie-container">
      <Link to={`/movie/${movieData.id}`} className="card-movie">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movieData.poster_path}
          alt={ "affiche non disponible pour le film " + movieData.title }
        />
        <div className="movie-info">
          <h3>{movieData.title}</h3>
        </div>
      </Link>
    </li>
  );
};
