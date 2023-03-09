import React, { useEffect, useState } from "react";
import "./DetailMovie.css";
import { MovieType }                  from "../types/MovieType";
import { useParams }                  from "react-router-dom";
import { getMovieById }               from "../api/Movie";

export const DetailMovie = () => {
  let { id } = useParams();
  const [oneMovie, setOneMovie] = useState<MovieType>();

  const getOneMovie = async () => {
    if (!id) return null;
    const movie = await getMovieById(id)
    setOneMovie(movie)
  }

  useEffect(() => {
    getOneMovie()
  });

  if (!oneMovie) return null;

  return (
    <div className="detailMovie-container">
      <a className="btn-back-movie" href="/">
        &#8592; Back
      </a>
      <div className="info-movie">
        <div className="primary-detail">
          <div className="primary-detail-image">
            <img
              src={
                "https://image.tmdb.org/t/p/original/" + oneMovie.poster_path
              }
              alt={ "affiche non disponible pour le film " + oneMovie.title }
            />
          </div>
          <div className="detail-info">
            <h3>{oneMovie.title}</h3>
            <p>
              Release Date:{" "}
              <span className="movie-info">
                {oneMovie.release_date.toString()}
              </span>
            </p>
            <p>
              Genre:{" "}
              <span className="movie-info">
                {oneMovie.genres.map((categoryType) => categoryType.name + " ")}
              </span>
            </p>
            <p>
              Consumer Score:{" "}
              <span className="movie-info">{oneMovie.vote_average}</span>
            </p>
          </div>
        </div>
        <hr className={"line"} />

        <div className="resume-movie">
          <h3>Synopsis</h3>
          <p>{oneMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};
