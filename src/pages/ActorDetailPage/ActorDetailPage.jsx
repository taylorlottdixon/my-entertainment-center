import { useParams, Link } from "react-router-dom";
import "./ActorDetailPage.css";

export default function ActorDetailPage({ moviesList, actorsList }) {
  let { actorName } = useParams();
  const moment = require('moment')

  const thisActor = actorsList.find((actor) => actor.name === actorName);
  
  const actorPhoto = `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 101)}/200/300`

  let actorMovies = moviesList.filter((movie) => {
    console.log(movie)
    let inMovie = movie.cast.find((c) => c.actor === thisActor._id);
    return inMovie;
  });

  function movieURL(movie) {
    return `/movies/${movie}`;
  }

  function moviePoster(poster) {
    return `https://image.tmdb.org/t/p/original/${poster}`;
  }



  let imageURL = `https://image.tmdb.org/t/p/original/${thisActor.imagePath}`

  return (
    <div className="ActorDetail">
      <h1 className="actor-title">{thisActor.name}</h1>
      <div className="actor-movies">
        <h2>Movies:</h2>
        <ul>
          {actorMovies.map((movie) => (
            <li key={movie.title}>
              <Link to={movieURL(movie.title)}>{movie.title}</Link>
              <img src={moviePoster(movie.poster)} className="movies-poster" />
            </li>
          ))}
        </ul>
      </div>
      <img className="actor-image" src={imageURL} />
    </div>
  );
}
