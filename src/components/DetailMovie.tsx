import React from "react";
import './DetailMovie.css';
import { MovieType } from '../models/MovieType';
import {useSearchParams} from 'react-router-dom';

export const DetailMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const test = searchParams.get("id")
  console.log(test);
  
  return (
    <div className="detailMovie-container">

      {/* <div className="primary-detail">
        <img src={detailMovie.poster_path} alt="movie_poster" />
        <div className="detail-info">
        <h3>{detailMovie.title}</h3>
        <p>{detailMovie.release_date.toString()}</p>
        <p>{detailMovie.genre.name}</p>
        <p>{detailMovie.vote_average}</p>
        </div>
      </div>

      <hr/>
      <div className="resume-movie">
        <h3>Synopsis</h3>
        <p>{detailMovie.overview}</p>
      </div> */}
    </div>
  )
};
