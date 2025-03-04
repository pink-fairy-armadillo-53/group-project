import React, { useState, useEffect } from 'react';
import ReviewCard from '../components/ReviewCard';
import dotenv from 'dotenv';
import path from 'path'
// dotenv.config({path: path.join(__dirname, '../../.env')});
// const authToken = process.env.AUTHORIZATION_TOKEN
// console.log(authToken)
const ReviewContainer = ({ filmId }) => {
  const [reviewContent, setReviewContent] = useState('');
  const [reviewScore, setReviewScore] = useState(0);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGQwMTQzNjE3YjViMzcxMzIwMjMyOTMxYTgxNmRjNCIsIm5iZiI6MTc0MDc5OTkxNy4xMzIsInN1YiI6IjY3YzI3ZmFkNzE4MDRkZWJhMTUzYmRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWe2Yzl9lRWMG5wZq215IyM3sH_IrqxodBUvkw2N-XA`
    }
  };

const fetchReviews = async (filmId)=>{
  console.log('FILM ID', filmId)
    const BASE_URL = "https://api.themoviedb.org/3/movie/"
    const endpoint = "/reviews"
    try{
       const response = await fetch(BASE_URL+filmId+endpoint, options)
       const data = await response.json();
        // return data
       ///console.logging this data with a string breaks it
       console.log("data from the movie Services")
       console.log(data.results)
      const oneReview =data.results[0];
       setReviews([oneReview]);
       console.log('FILM ID AGAIN', filmId)
    }catch(error){
      console.log(error)
    }
  }
    fetchReviews(filmId);
  }, [filmId]);

// post review to database
  const postReview = async () => {
const reviewData = {
  username: 'Arthur',user_id: '12345', publish_date: 'March 3' , movieId: filmId, content: reviewContent, stars: reviewScore,
};
console.log('✅FETCHING DATA');
  try{
    const response = await fetch('http://localhost:3000/api/reviews/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reviewData),
  });
if (response.ok) {
  const newReview = await response.json();
  setReviews([...reviews, newReview]);
  console.log('Review submitted: ', newReview);
}
} catch (error) {
  console.error('Error submitting review: ', error);
}
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    postReview(reviewContent);
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
      <h1>Reviews</h1>
      <div className='review-list'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            filmId={filmId}
            author={review.author}
            date={review.created_at}
            content={review.content}
          />
        ))}
      </div>
    </div>
  );
};
export default ReviewContainer;