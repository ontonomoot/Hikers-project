import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Card, Text, User, Divider } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { loadReview, selectReview } from './review';

function ReviewList({ user }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReview(id));
  }, [id, dispatch]);

  const review = useSelector(selectReview);

  const photos = [
    'https://cdn.hswstatic.com/gif/snowboarding-update.jpg',
    'https://www.lutsen.com/sites/default/files/styles/scale_1440/public/2021-10/5%20DS-morning-groomer.jpg?itok=Z0OvcQ7S',
    'https://www.blacksheepsnowboardschool.com/img/rickards.jpg'
  ];

  return (
    <div className="reviews-container">
      <Divider id="reviewTitle" h={5}>Отзывы</Divider>
      {user && <Button id="reviewBtn">Добавить свой отзыв о месте</Button>}
      {review.map((el) => (
        <Card width="700px">
          <User src={el['User.ava']} name={el['User.user_name']} />
          <Text>{el.title}</Text>
          <Text>{el.description}</Text>
          <Text>Дата поездки: {el.date.slice(0, 10)}</Text>
          <Divider />
          <div id="gallery">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            {photos.map((image) => <img className="review-img" tabIndex="0" src={image} alt="some" />)}
          </div>
          <Card.Footer>
            {Array.from({ length: el.rating }, (_, i) => <Star key={i} color="orange" size={32} />)}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default ReviewList;
