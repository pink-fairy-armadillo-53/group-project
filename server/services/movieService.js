const path = require('path');
/// require dotenv and specify the .env path to access the environment variables.
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
//pass environment variables for the api key and token 
const authToken = process.env.AUTHORIZATION_TOKEN
const apiKey = process.env.API_KEY
//options with all of the json header content
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };
  //function to fetch the movie data based on the endpoint passed
const fetchMovies = async (endpoint)=>{
    try{
       const response = await fetch(BASE_URL+endpoint, options)
       const data = await response.json();
       console.log(data)
    }catch(error){
      console.log(error)
    }
}
module.exports = fetchMovies