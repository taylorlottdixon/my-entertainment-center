import MovieSmallCard from "../../components/MovieSmallCard/MovieSmallCard";
import "../DashboardPage/DashboardPage.css"

export default function DashboardPage({ moviesList, user }) {
    const movieCards = moviesList.map((movie, index) => (
        <MovieSmallCard movie={movie} index={index} key={index} />
  ));

  return (
    <>
      <h1>Entertainment Dashboard</h1>
      <div className="DashboardBody">
        <div className="UserInfo">
            <h2>Welcome, {user.username}!</h2>
            <img src="images/logo.png" width={"80%"} alt="My Entertainment Center Logo" />
        </div>
        <div className="MediaRows">
            <div className="MediaCarousel">
                <h3>Trending</h3>
                <div className="MediaList">{movieCards}</div>
            </div>
            <div className="MediaCarousel">
                <h3>My Favorites</h3>
                <div className="MediaList">{movieCards}</div>
            </div>
            <div className="MediaCarousel">
                <h3>My Watchlist</h3>
                <div className="MediaList">{movieCards}</div>
            </div>
        </div>
      </div>
    </>
  );
}
