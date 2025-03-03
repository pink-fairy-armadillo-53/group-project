// not sure about this -R
// passing down props of films to each film card and display them

import React, { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard';
import fetchMovie from '../services/fetchMovie'
const FilmContainer = () => {
  const [films, setFilms] = useState([]);
    //pulls fetches the movies and displays in browser
    const [movies, setMovies] = useState([])
    useEffect(()=>{
      fetchMovie().then(data=>{
        setMovies(data)
      })
      // console.log(movies)
    },[movies])
    
  useEffect(() => {
    // Placeholder for fetching films from an API
    const fetchFilms = async () => {
      // Example: const response = await fetch('/api/films');
      // const data = await response.json();
      const data = []; // Placeholder data
      setFilms(data);
    };

    fetchFilms();
  }, []);

  return (
    <div className='film-container'>
      {movies.map((movie, index) => (
        <FilmCard key={index} film={movie} />
      ))}
    </div>
  );
};

export default FilmContainer;