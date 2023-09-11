import React from "react";
import { Link } from "react-router-dom";
import "./MovieSmallCard.scss"
import { fetchPoster } from '../../utilities/poster-api'

export default function MovieSmallCard({ movie, index }) {
  const movieName = movie.title;
  const movieURL = `/movies/${movieName}`;

  const moviePoster = `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 101)}/200/300`
  
  return (
    <Link to={movieURL}>
      <div
        className="MovieCard"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster})`,
          // backgroundImage: `url(${fetchPoster(movie.tmdbIDRef, movie.poster)})`
        }}
      >
        <h3 className="movie-list-title">{movieName}</h3>
      </div>
    </Link>
  );
}
