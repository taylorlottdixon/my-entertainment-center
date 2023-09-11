const Movie = require('../../models/movie');

module.exports = {
    index,
    create,
    show,
    // edit,
    // delete: deleteMovie,
    // addFav,
    // removeFav,
    // viewFav,
    // viewOwned,
    viewTrend,
    // detail,
    // addRating,
    // editRating,
    // removeRating,
    // calcMEC,
};

async function index(req, res) {
    const movies = await Movie.find({}).sort('title').exec();
    // re-sort based upon the sortOrder of the populated categories
    res.json(movies);
}
  
async function show(req, res) {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
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
        res.status(400).json(err);
      }
}

async function viewTrend(req, res) {
    try {
        const movie = await Movie.find(req.body);
        res.json(movie);
    } catch (err) {
        res.status(400).json(err);
    }
}