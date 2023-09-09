import MovieCard from "../../components/MovieCard/MovieCard";
import React, { useState } from 'react';
import "../MoviesListPage/MoviesListPage.css";
import * as movieService from "../../utilities/movies-service";
import moviedata from "../../movie_ids_09_06_2023.json";


export default function MoviesListPage({ movies }) {
    const movieids = moviedata.map(a => a.id)
//     const trendingMovies = useState([])
  
//     const movieCards = movies.map((movie, index) => (
//     <MovieCard movie={movie} index={index} key={index} />
//   ));

  return (
    <>
      <h1>All Movies</h1>
      <button onClick={movieService.fullDBMovies(movieids)}></button>
      {/* <div className="MovieList">{movieCards}</div> */}
    </>
  );
}
