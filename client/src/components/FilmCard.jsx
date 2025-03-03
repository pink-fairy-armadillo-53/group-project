import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

const FilmCard = ({ film }) => {

  return (
    //Things after || are placeholder for future data input
    <div className='film-card'>
      <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`|| 'placeholder.jpg'} alt={film.name || 'Film Poster'} />
      <div className="card-content">
      <h3>{film.title || 'Film Name'}</h3>
      <FaRegHeart/>
      </div> 
    </div>
  );
};

export default FilmCard;