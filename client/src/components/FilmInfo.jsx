// Child component that displays film image, name, description, aggregated reviews, and a button for users to add to favorites

import React from 'react';

const FilmInfo = ({ film }) => {
  const handleAddToFavorites = () => {
    // Placeholder for adding to favorites logic
    console.log(`Adding film to favorites: ${film.name}`);
    // Example: await fetch('/api/user/favorites', { method: 'POST', body: JSON.stringify({ filmId: film.id }) });
  };

  return (
    <div className='film-info'>
      <img src={film.image || 'placeholder.jpg'} alt={film.name || 'Film Poster'} />
      <h1>{film.name || 'Film Name'}</h1>
      <p>{film.description || 'Film Description'}</p>
      <p>Release Date: {film.releaseDate || 'Release Date'}</p>
      <p>Genre: {film.genre || 'Genre'}</p>
      <p>Score: {film.score || 'Score'}</p>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default FilmInfo;