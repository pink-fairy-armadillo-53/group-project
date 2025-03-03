import React from "react";

const Modal = ({ film, onClose }) => {
  if (!film) return null; // Prevents rendering if no movie is selected
    console.log(film.title)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="modal-image">
          <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}` } alt={film.title} />
        </div>
        <div className="modal-content">
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          <p><strong>Release Date:</strong> {film.releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
