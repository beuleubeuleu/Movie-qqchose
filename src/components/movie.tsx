import React from 'react';
import './movie.css';
import { MovieType } from '../models/Movie';

type MovieProps = {
  movie: MovieType;
}

export const Movie = ({movie}: MovieProps) =>{
  return (
    <div className="movie-container">
      <div className="card-movie">
        <img src={movie} alt="movie_poster" />
        <div className="movie-info">
          <h3>Movie title</h3>
        </div>
      </div>
    </div>
  );
};
