import { useParams, Link } from "react-router-dom";
import "./MovieDetailPage.scss";

import AdvisoryCard from "../../components/AdvisoryCard/AdvisoryCard"; 

export default function MovieDetailPage({ moviesList, actorsList }) {

    let { movieName } = useParams();
    const moment = require('moment')

    const movie = moviesList.find((movie) => movie.title === movieName);
    let thisCast = movie.cast.map((actor) => {
        let actorName = actorsList.find((a) => a._id === actor.actor)
        return {"actorName": actorName.name, "actorRole": actor.role}
    })
    const moviePoster = `https://image.tmdb.org/t/p/original/${movie.poster}`
    function actorURL(actor) {
        return `/actors/${actor}`;
    }

    return (
        <div className="MovieDetail">
            <h1 className="movie-title">{movie.title}</h1>
            {/* <button className="favorite" onClick={setFavorite(!isFavorite)}></button> */}
            <div className="movie-info-block">
                <h2 className="movie-rating">{movie.mpaaRating}</h2>
                <h2 className="movie-release">Released: {moment(movie.released).format('M/D/YYYY')}</h2>
                <h2 className="movie-length">Length: {Math.floor(movie.length/60)}hrs {movie.length%60}mins</h2>
            </div>
            <div className="movie-tagline">
                <h2>Tagline: </h2>
                <p>{movie.tagline}</p>
                <h2>Overview: </h2>
                <p>{movie.overview}</p>
            </div>
            <ul className="movie-cast">
                <h3 className="cast-title">Cast</h3>
                {thisCast.map((actor) => (
                    <li className="actor-names">
                        <Link to={actorURL(actor.actorName)}>{actor.actorName}</Link>
                        <p>as {actor.actorRole}</p>
                    </li>
                ))}
            </ul>
            <img src={moviePoster} alt="Movie Poster" className="movie-poster" />
            <AdvisoryCard movie={movie} />
        </div>
    );
}
