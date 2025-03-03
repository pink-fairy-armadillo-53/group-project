///TESTED and WORKS AS EXPECTED
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')
//movie controller
const movieController = require('./controllers/movieController')

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
 
// Basic route
app.get('/', (req, res) => { res.send('Hello from the backend!'); });




// Start the server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}/`);
});