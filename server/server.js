///TESTED and WORKS AS EXPECTED
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

//movie controller
const movieController = require('./controllers/movieController')
//review controller
const reviewController = require("./controllers/reviewController");

//review controller
const reviewController = require("./controllers/reviewController");

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Allow cookies (if needed)
  }));

// movie controller for top rated movies
app.get('/api/movies/top-rated', movieController.getTopRatedMovies, (req, res) => {
    res.status(200).send(res.locals.topMovies.results)
 });

 //review controller to get a movie data
app.get(
  "/api/movies/:movieId",
  reviewController.getMovieDetails,
  (req, res) => {
    console.log(res.locals.getMovieDetails);
    res.status(200).send(res.locals.getMovieDetails);
  }
);

app.post("/api/reviews/add", reviewController.addMovieReview, (req, res) => {
  res.status(201).send(res.locals.addMovieReview);
});

app.get("/api/reviews/:movieId", reviewController.getMovieReview, (req, res) => {

  res.status(200).send(res.locals.getReviews);

});

// Basic route
app.get('/', (req, res) => { res.send('Hello from the backend!'); });




// Start the server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}/`);
});