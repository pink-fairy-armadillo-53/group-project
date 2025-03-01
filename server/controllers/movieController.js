///TESTED and WORKS AS EXPECTED
const fetchMovies = require('../services/movieService')

const MovieController ={

async getTopRatedMovies (req, res, next){
    try{
        const topMovies = await fetchMovies("top_rated")
        res.locals.topMovies = topMovies;
    return next()
    }catch(error){
        return next({
            log:`error from MovieController.getTopRatedMovies: ${error}`,
            status:500,
            message:{err:"error getting top rated movies"}
          })
    }
}
}

module.exports = MovieController;