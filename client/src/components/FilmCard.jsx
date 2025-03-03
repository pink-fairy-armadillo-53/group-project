import React from 'react';

const FilmCard = ({ film }) => {
  return (
    //Things after || are placeholder for future data input
    <div className='film-card'>
      <img src={film.image || 'placeholder.jpg'} alt={film.name || 'Film Poster'} />
      <h1>{film.name || 'Film Name'}</h1>
      <button>Like</button>
    </div>
  );
};

export default FilmCard;