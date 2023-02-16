import React from 'react';
import './MovieCard.css';
import { MovieType } from '../models/MovieType';


type MovieCardProps = {
  movieData: MovieType;
}

export const MovieCard = ({movieData}: MovieCardProps) =>{
  return (
    <li className="movie-container">
      <div className="card-movie">
        <img src={movieData.poster_path} alt="movie_poster" />
        <div className="movie-info">
          <h3>{movieData.title}</h3>
        </div>
      </div>
    </li>
  );
};
