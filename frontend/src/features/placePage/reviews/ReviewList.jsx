import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Text, User, Divider } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { selectorUserSession } from '../../main/auth';
import { loadReview, selectReview, selectReviewPhoto } from './review';
import ReviewForm from './ReviewForm';

function ReviewList() {
  const user = useSelector(selectorUserSession);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReview(id));
  }, [id, dispatch]);

  const review = useSelector(selectReview);
  const reviewPhotos = useSelector(selectReviewPhoto);

  return (
    <>
      <Divider id="reviewTitle" h={5}>Отзывы</Divider>
      <div id="reviews-container">
        {user && <ReviewForm />}
        <div className="reviews-list-container">
          {review.map((el) => (
            <Card width="700px">
              <User src={el['User.ava']} name={el['User.user_name']} />
              <Text>{el.title}</Text>
              <Text>{el.description}</Text>
              <Text>Дата поездки: {el.date.slice(0, 10)}</Text>
              <Divider />
              <div id="gallery">
                {reviewPhotos && reviewPhotos
                  .filter((photo) => photo.review_id === el.id)
                  .map((ph) =>
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    <img className="review-img" tabIndex="0" src={ph.title} alt="some" />
                  )}
              </div>
              <Card.Footer>
                {Array.from({ length: el.rating }, (_, i) => <Star key={i} color="orange" size={32} />)}
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewList;
