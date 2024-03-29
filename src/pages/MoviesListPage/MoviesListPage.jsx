import MovieCard from "../../components/MovieCard/MovieCard";
import React, { useState } from 'react';
import "../MoviesListPage/MoviesListPage.css";



export default function MoviesListPage({ moviesList }) {
    const movieCards = moviesList.map((movie, index) => (
    <MovieCard movie={movie} index={index} key={index} />
  ));

  return (
    <>
      <h1>All Movies</h1>
      <div className="MovieList">{movieCards}</div>
    </>
  );
}
