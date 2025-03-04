// Child compenent that renders a film poster image and a user's review
import React from 'react';
const ReviewCard = ({ author, date, content }) => {
  return (
    <div className="review-card">
      <div>
        <h3>{author}</h3>
        <h4>Published: {date}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default ReviewCard;