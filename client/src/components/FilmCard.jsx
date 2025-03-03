import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const FilmCard = ({ film, onClick }) => {
  return (
    <div className='film-card' onClick={() => onClick(film)}> 
      <img 
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}` || 'placeholder.jpg'} 
        alt={film.name || 'Film Poster'} 
      />
      <div className="card-content">
        <h3>{film.title || 'Film Name'}</h3>
        <FaRegHeart />
      </div>
    </div>
  );
};

export default FilmCard;
