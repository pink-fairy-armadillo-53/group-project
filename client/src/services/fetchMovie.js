const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movies/top-rated");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error from the client: services/fetchMovie");
  }
};

export default fetchTopRatedMovies;
