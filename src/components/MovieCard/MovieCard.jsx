import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss"

export default function MovieCard({ movie, index }) {
  const movieName = movie.title;
  const movieURL = `/movies/${movieName}`;
  const moviePoster = `https://image.tmdb.org/t/p/original/${movie.poster}`
  const moment = require('moment')

  return (
    <Link to={movieURL}>
      <div
        className="MovieCard"
        style={{
          backgroundImage: `url(${moviePoster})`
        }}
      >
        <h3 className="movie-card-title">{movie.title}</h3>
        <br></br>
        <p className="movie-list-release">Released: {moment(movie.released).format('M/D/YYYY')}</p>
      </div>
    </Link>
  );
}
