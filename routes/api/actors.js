const express = require('express');
const router = express.Router();
const actorsCtrl = require('../../controllers/api/actors');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/actors'

router.get('/', actorsCtrl.index)
router.get('/:actorName', actorsCtrl.show)

//// Routes for daily database maintenance
// GET all actors from TMDB -- getAll()

// POST all new actors from TMDB -- create()

// UPDATE all actors from TMDB -- edit()

// DELETE actor -- delete()


//// Routes for user-based actor data
// GET favorite actors -- viewFav()

// GET actor by id -- detail()


module.exports = router;