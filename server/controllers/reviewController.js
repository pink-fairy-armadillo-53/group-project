const express = require("express");
const app = express();
const Review = require("../dbModels");
const authToken = process.env.AUTHORIZATION_TOKEN;
const apiKey = process.env.API_KEY;

const path = require("path");
/// require dotenv and specify the .env path to access the environment variables.
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
console.log("apiKey:" + apiKey);
console.log("authToken:" + authToken);

const reviewController ={}
reviewController.getMovieDetails = async(req,res,next)=>{
  const { movieId } = req.params;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details from moviedb");
    }
    const movieData = await response.json();
    res.locals.getMovieDetails = movieData;
    return next();
  } catch(error){
    return next({
        log:`error from reviewController.getMovieDetails: ${error}`,
        status:500,
        message:{err:"error getting one movie detail"}
      })
}
};

//add a movie review
reviewController.addMovieReview = async(req, res, next)=>{
  try {
    const { username,user_id, movie_id, publish_date, content, stars } = req.body;
    const newReview = new Review({ username,user_id, movie_id, publish_date, content, stars});

    const addedReview = await newReview.save();
    res.locals.addMovieReview = addedReview;
    return next();
  } catch(error){
    return next({
        log:`error from reviewController.addMovieReview: ${error}`,
        status:500,
        message:{err:"error adding a movie review"}
      })
}
};

// Get Reviews for a Movie
reviewController.getMovieReview = async(req, res, next) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.findOne({ movieId });
    res.locals.getReviews = reviews
    return next();
  } catch(error){
    return next({
        log:`error from reviewController.getMovieReview: ${error}`,
        status:500,
        message:{err:"error getting a movie review"}
      })
}};

module.exports = reviewController;
