import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listReviews } from '../actions/reviewActions';

const ReviewsScreen = () => {
  const dispatch = useDispatch();

  const reviewList = useSelector((state) => state.reviewList);
  const { loading, error, reviews } = reviewList;

  useEffect(() => {
    dispatch(listReviews());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Reviews</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {reviews.map((review) => (
            <div>
              <h3>
                {review.firstName}, {review.state}
              </h3>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ReviewsScreen;
