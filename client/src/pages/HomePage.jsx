import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import FilmContainer from '../containers/FilmContainer';

const HomePage = () => {
  const [topRatedFilms, setTopRatedFilms] = useState([]);
  const [allFilms, setAllFilms] = useState([]);

  useEffect(() => {
    // Placeholder for fetching top-rated films from an API
    const fetchTopRatedFilms = async () => {
      // Example: const response = await fetch('/api/films/top-rated');
      // const data = await response.json();
      const data = []; // Placeholder data
      setTopRatedFilms(data);
    };

    // Placeholder for fetching all films from an API
    const fetchAllFilms = async () => {
      // Example: const response = await fetch('/api/films');
      // const data = await response.json();
      const data = []; // Placeholder data
      setAllFilms(data);
    };

    fetchTopRatedFilms();
    fetchAllFilms();
  }, []);

  return (
    <div className='home-page'>
      <Hero films={topRatedFilms} />
      <h2>Top Rated Films</h2>
      <FilmContainer films={topRatedFilms} />
      <h2>All Films</h2>
      <FilmContainer films={allFilms} />
    </div>
  );
};

export default HomePage;