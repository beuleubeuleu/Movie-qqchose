import React from 'react';
import './MovieCard.css';
import { MovieType } from '../models/MovieType';
import {Link} from 'react-router-dom';


type MovieCardProps = {
  movieData: MovieType;
}

export const MovieCard = ({movieData}: MovieCardProps) =>{


  return (
    <li className="movie-container">
      <Link to={`/movie/${movieData.id}`} className="card-movie">
        <img src={movieData.poster_path} alt="movie_poster" />
        <div className="movie-info">
          <h3>{movieData.title}</h3>
        </div>
      </Link>
    </li>
  );
};
