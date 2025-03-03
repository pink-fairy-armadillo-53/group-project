import React from "react";
import ReviewContainer from '../containers/ReviewContainer';

const Modal = ({ film, onClose }) => {
  if (!film) return null; // Prevents rendering if no movie is selected
    console.log(film)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="modal-container">
        <div className="modal-image">
          <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}` } alt={film.title} />
        </div>
        <div className="modal-content">
          <h3 className="modal-header">{film.title}</h3>
         <div className="modal-description">
         <p>{film.overview}</p>
         <p><strong>Release Date:</strong> {film.release_date
         }</p>
         </div>
         <ReviewContainer film={film.id} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
