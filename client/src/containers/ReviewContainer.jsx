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

  
const fetchReviews = async ()=>{
    const BASE_URL = "https://api.themoviedb.org/3/movie/"
    const endpoint = "/reviews"
    try{
       const response = await fetch(BASE_URL+343611+endpoint, options)
       const data = await response.json();
       console.log(data)
        return data
        // setReviews(data)
       ///console.logging this data with a string breaks it
       console.log("data from the movie Services")
       console.log(data)
    }catch(error){
      console.log(error)
    }
  }


    fetchReviews(); 
  }, [filmId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
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