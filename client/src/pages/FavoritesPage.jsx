import React, { useState, useEffect } from 'react';
import FilmContainer from '../containers/FilmContainer';

const FavoritesPage = ({ userId }) => {
  const [likedFilms, setLikedFilms] = useState([]);

  useEffect(() => {
    // Placeholder for fetching liked films from MongoDB
    const fetchLikedFilms = async () => {
      // Example: const response = await fetch(`/api/user/${userId}/favorites`);
      // const data = await response.json();
      const data = []; // Placeholder data
      setLikedFilms(data);
    };

    fetchLikedFilms();
  }, [userId]);

  return (
    <div className='favorites-page'>
      <h1>Your Favorite Films</h1>
      <FilmContainer films={likedFilms} />
    </div>
  );
};

export default FavoritesPage;