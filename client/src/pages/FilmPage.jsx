import React, { useState, useEffect } from 'react';
import FilmInfo from '../components/FilmInfo';
import Trailer from '../components/Trailer';
import ReviewContainer from '../containers/ReviewContainer';

const FilmPage = ({ match }) => {
  const [film, setFilm] = useState(null);
  const filmId = match.params.id;

  useEffect(() => {
    // Placeholder for fetching film details from an API
    const fetchFilm = async () => {
      // Example: const response = await fetch(`/api/films/${filmId}`);
      // const data = await response.json();
      const data = {}; // Placeholder data
      setFilm(data);
    };

    fetchFilm();
  }, [filmId]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className='film-page'>
      <FilmInfo film={film} />
      <Trailer filmId={filmId} />
      <ReviewContainer filmId={filmId} />
    </div>
  );
};

export default FilmPage;