import React, { useState, useEffect } from 'react';

const ReviewContainer = ({ filmId }) => {
  const [reviewContent, setReviewContent] = useState('');
  const [reviewScore, setReviewScore] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Placeholder for fetching reviews from MongoDB
    const fetchReviews = async () => {
      // Example: const response = await fetch(`/api/reviews?filmId=${filmId}`);
      // const data = await response.json();
      const data = []; // Placeholder data
      setReviews(data);
    };

    fetchReviews();
  }, [filmId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Placeholder for review submission logic
    console.log('Review submitted:', { filmId, reviewContent, reviewScore });
    setReviewContent('');
    setReviewScore(0);
  };

  const handleStarClick = (score) => {
    setReviewScore(score);
  };

  return (
    <div className='review-container'>
      <form onSubmit={handleReviewSubmit}>
        <textarea 
          placeholder='Write a review...' 
          value={reviewContent} 
          onChange={(e) => setReviewContent(e.target.value)}
        />
        <div className='star-rating'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star} 
              className={star <= reviewScore ? 'star filled' : 'star'} 
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button type='submit'>Submit Review</button>
      </form>
      <h1>Review Container</h1>
      <div className='review-list'>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;