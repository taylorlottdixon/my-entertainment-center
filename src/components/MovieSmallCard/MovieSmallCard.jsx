import React from "react";
import { Link } from "react-router-dom";

export default function MovieSmallCard({ movie, index }) {
  const movieName = movie.original_title;
  const movieURL = `/movies/${movieName}`;
  return (
    <Link to={movieURL}>
      <div
        className="MovieCard"
        style={{
          backgroundImage: `url('https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 101)}/200/300')`
        }}
      >
        <h3 className="movie-list-title">{movie.original_title}</h3>
      </div>
    </Link>
  );
}
