const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/movies'


//// Routes for daily database maintenance
// GET all movies from TMDB -- getAll()

// POST all new movies from TMDB -- create()

// UPDATE all movies from TMDB -- edit()

// DELETE movie -- delete()


//// Routes for user-based movie data
// GET favorite movies -- viewFav()

// GET owned movies -- viewOwned()

// GET trending movies -- viewTrend()

// GET movie by id -- detail()

// POST rating to movie -- addRating()

// POST update to rating -- editRating()

// DELETE rating from movie -- removeRating()

// POST aggregate Rating from all users -- calcMEC()



module.exports = router;