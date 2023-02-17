import React from "react";
import './DetailMovie.css';
import { MovieType } from '../models/MovieType';
import {useParams} from 'react-router-dom';
import { movieData } from "../datas";

export const DetailMovie = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const test = searchParams.get("id")
  // console.log(test);
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
          <p>{oneMovie.release_date.toString()}</p>
          <p>{oneMovie.genre.name}</p>
          <p>{oneMovie.vote_average}</p>
          </div>
        </div>

        <hr/>
        <div className="resume-movie">
          <h3>Synopsis</h3>
          <p>{oneMovie.overview}</p>
        </div>
      </div>
    </div>
  )
};
