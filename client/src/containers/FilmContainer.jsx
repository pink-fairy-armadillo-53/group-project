import React, { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import Modal from "../components/Modal";
import fetchMovies from "../services/fetchMovie";

const FilmContainer = () => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  const cardClick = (movie) => {
    console.log("Film clicked:", movie); 
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  return (
    <div className="film-container">
      {movies.map((movie, index) => (
        <FilmCard key={index} film={movie} onClick={() => cardClick(movie)} />
      ))}

      {modalOpen && (
        <Modal film={selectedMovie} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default FilmContainer;
