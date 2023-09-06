import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, index }) {
  const movieName = movie.title;
  const movieURL = `/movies/${movieName}`;
  return (
    <Link to={movieURL}>
      <div
        className="MovieCard"
        style={{
          backgroundImage: `url(${movie.posterPath})`
        }}
      >
        <h3 className="movie-list-title">{movie.title}</h3>
        <br></br>
        <p className="movie-list-release">Released: {movie.releaseDate}</p>
      </div>
    </Link>
  );
}
