theMovieDb.movies.getPopular({}, successCB, errorCB)


import MovieCard from "../../components/MovieCard/MovieCard";
import "../DashboardPage/DashboardPage.css";

export default function DashboardPage({ movies, user }) {
  const movieCards = movies.map((movie, index) => (
    <MovieCard movie={movie} index={index} key={index} />
  ));

  return (
    <>
      <h1>All Movies</h1>
      <div className="MovieList">{movieCards}</div>
    </>
  );
}
