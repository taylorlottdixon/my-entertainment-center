const express = require('express');
const router = express.Router();
const showsCtrl = require('../../controllers/api/shows');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/shows'


//// Routes for daily database maintenance
// GET all shows from TMDB -- getAll()

// POST all new shows from TMDB -- create()

// UPDATE all shows from TMDB -- edit()

// DELETE show -- delete()


//// Routes for user-based show data
// GET favorite shows -- viewFav()

// GET owned shows -- viewOwned()

// GET trending shows -- viewTrend()

// GET show by id -- detail()

// POST rating to show -- addRating()

// POST update to rating -- editRating()

// DELETE rating from show -- removeRating()

// POST aggregate Rating from all users -- calcMEC()


module.exports = router;