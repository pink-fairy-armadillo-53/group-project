// not sure about this -R
// passing down props of films to each film card and display them

import React, { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard';

const FilmContainer = () => {
  const [films, setFilms] = useState([]);

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
      {films.map((film, index) => (
        <FilmCard key={index} film={film} />
      ))}
    </div>
  );
};

export default FilmContainer;