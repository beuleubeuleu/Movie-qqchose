import React, { useEffect, useState } from "react";
import "./DetailMovie.css";
import { MovieType }                  from "../models/MovieType";
import { useParams }                  from "react-router-dom";
import axios                          from "axios";

export const DetailMovie = () => {
  let { id } = useParams();
  const [oneMovie, setOneMovie] = useState<MovieType>();

  useEffect(() => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/${ id }?api_key=${ process.env.REACT_APP_API_KEY }&language=fr-EU&page=1`
        )
        .then((res) => {
          setOneMovie(res.data);
        });
  });

  if ( !oneMovie ) return null

  return (
      <div className="detailMovie-container">
        <a className="btn-back-movie" href="/">&#8592; Back</a>
        <div className="info-movie">
          <div className="primary-detail">

              <div className="primary-detail-image">
                <img src={ "https://image.tmdb.org/t/p/original/" + oneMovie.poster_path } alt="movie_poster"/>
              </div>
              <div className="detail-info">
                <h3>{ oneMovie.title }</h3>
                <p>Release Date: <span className="movie-info">{ oneMovie.release_date.toString() }</span></p>
                <p>Genre:  <span
                    className="movie-info">{ oneMovie.genres.map(categoryType => categoryType.name + " ") }</span></p>
                <p>Consumer Score: <span className="movie-info">{ oneMovie.vote_average }</span></p>
            </div>

          </div>
          <hr className={ "line" }/>

          <div className="resume-movie">
            <h3>Synopsis</h3>
            <p>{ oneMovie.overview }</p>
          </div>
        </div>
      </div>
  )
};
