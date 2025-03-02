import React, { useState, useEffect } from 'react';
import ReviewCard from '../components/ReviewCard';

const MyReviewsPage = ({ userId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Placeholder for fetching user reviews from MongoDB
    const fetchUserReviews = async () => {
      // Example: const response = await fetch(`/api/user/${userId}/reviews`);
      // const data = await response.json();
      const data = []; // Placeholder data
      setReviews(data);
    };

    fetchUserReviews();
  }, [userId]);

  return (
    <div className='my-reviews-page'>
      <h1>Your Reviews</h1>
      <div className='review-list'>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviewsPage;