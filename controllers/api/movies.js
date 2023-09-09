const Movie = require('../../models/movie');
import * as theMovieDb from "../../themoviedb";

module.exports = {
    getAll,
    create,
    edit,
    delete: deleteMovie,
    addFav,
    removeFav,
    viewFav,
    viewOwned,
    viewTrend,
    detail,
    addRating,
    editRating,
    removeRating,
    calcMEC,
};

function getAll() {

}

async function create(req, res) {
    try {
        // Add the user to the db
        const movie = await Movie.create(req.body);
        // token will be a string
        const token = createJWT(movie);
        // Yes, we can serialize a string
        res.json(token);
      } catch (err) {
        // Probably a dup email
        res.status(400).json(err);
      }
}