import React from "react";
import './DetailMovie.css';
import { MovieType } from '../models/MovieType';
import {useParams} from 'react-router-dom';
import { movieData } from "../datas";

export const DetailMovie = () => {
  let {id} = useParams();
  const oneMovie:MovieType = movieData[parseInt(id!)]

  return (
    <div className="detailMovie-container">
      <a className="btn-back-movie"  href='/'>&#8592; Back</a>
      <div className="info-movie">
        <div className="primary-detail">
          <img src={oneMovie.poster_path} alt="movie_poster" />
          <div className="detail-info">
          <h3>{oneMovie.title}</h3>
          <p>Release Date: <span className="movie-info">{oneMovie.release_date.toString()}</span></p>
          <p>Genre: <span className="movie-info">{oneMovie.genre.name}</span></p>
          <p>Consumer Score: <span className="movie-info">{oneMovie.vote_average}</span></p>
          </div>
        </div>

        <hr className={"line"} />

        <div className="resume-movie">
          <h3>Synopsis</h3>
          <p>{oneMovie.overview}</p>
        </div>
      </div>
    </div>
  )
};
