// display compoenent that renders an array of top movies (say top 10?)

import React, { useState, useEffect } from 'react';

const Hero = ({ films }) => {
  const [currentFilmIndex, setCurrentFilmIndex] = useState(0);

  // Change film every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFilmIndex((prevIndex) => (prevIndex + 1) % films.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [films.length]);

  if (films.length === 0) {
    return <div>Loading...</div>;
  }

  const currentFilm = films[currentFilmIndex];
  const backgroundImage = currentFilm.image || 'placeholder.jpg';

  return (
    <div
      className='hero'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='hero-content'>
        <h1>{currentFilm.name || 'Film Name'}</h1>
        <p>Release Date: {currentFilm.releaseDate || 'Release Date'}</p>
        <p>Score: {currentFilm.score || 'Score'}</p>
      </div>
    </div>
  );
};

export default Hero;
