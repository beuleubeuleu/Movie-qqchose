import React from 'react';
import './Movie.css';
import { MovieType } from '../models/Movie';

type MovieProps = {
  movie: MovieType;
}

export const Movie = ({movie}: MovieProps) =>{
  return (
    <div className="movie-container">
      <div className="card-movie">
        <img src={movie.poster_path} alt="movie_poster" />
        <div className="movie-info">
          <h3>{movie.title}</h3>
        </div>
      </div>
    </div>
  );
};
