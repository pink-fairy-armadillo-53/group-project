// /routes/movieRoutes.js
const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Movie routes
router.get('/top-rated', movieController.getTopRatedMovies, (req, res) => {
    res.status(200).send(res.locals.topMovies.results);
});

module.exports = router;
