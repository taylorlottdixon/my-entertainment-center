const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/movies'


// GET all movies from my database
router.get('/', moviesCtrl.index)
router.get('/:movieName', moviesCtrl.show)

//// Routes for daily database maintenance
// GET all movies from TMDB -- getAll()

// POST all new movies from TMDB -- create()
router.post('/', moviesCtrl.create)
// UPDATE all movies from TMDB -- edit()

// DELETE movie -- delete()


//// Routes for user-based movie data
// GET favorite movies -- viewFav()

// GET owned movies -- viewOwned()

// GET trending movies -- viewTrend()
router.get('/', moviesCtrl.viewTrend)

// GET movie by id -- detail()

// POST rating to movie -- addRating()

// POST update to rating -- editRating()

// DELETE rating from movie -- removeRating()

// POST aggregate Rating from all users -- calcMEC()



module.exports = router;