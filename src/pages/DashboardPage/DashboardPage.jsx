import MovieCard from "../../components/MovieCard/MovieCard";
import "../DashboardPage/DashboardPage.css"
import * as data from "../../data.json";

export default function DashboardPage({ movies, user }) {
    const movieList = JSON.stringify(data)
    const movieids = movieList.results.map(a => a.id)
    const movieCards = movieids.map((movie, index) => (
    <MovieSmallCard movie={movie} index={index} key={index} />
  ));

  return (
    <>
      <h1>Entertainment Dashboard</h1>
      <div className="UserInfo">
        <h2>Welcome, {user.username}!</h2>
        <img src="images/logo.png" width={"80%"} alt="My Entertainment Center Logo" />
      </div>
      <div className="MediaRows">
        <div className="MediaCarousel">
            <h3>Trending</h3>
            <div className="MovieList">{movieCards}</div>
        </div>
        <div className="MediaCarousel">
            <h3>My Favorites</h3>
            <div className="MovieList">{movieCards}</div>
        </div>
        <div className="MediaCarousel">
            <h3>My Watchlist</h3>
            <div className="MovieList">{movieCards}</div>
        </div>
      </div>
    </>
  );
}
