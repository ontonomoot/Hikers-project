import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Card, Text, User, Divider } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { loadReview, selectReview } from './review';

function ReviewList() {
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
    <>
      <h3>Отзывы</h3>
      {review.map((el) => (
        <Grid.Container gap={1.5}>
          <Grid xs={12} justify="center">
            <Card width="100%">
              <User src={el['User.ava']} name={el['User.user_name']} />
              <Text>{el.title}</Text>
              <Text>{el.description}</Text>
              <Text>Дата поездки: {el.date.slice(0, 10)}</Text>
              <Divider />
              {photos.map((image) => <img className="review-img" src={image} alt="some" />)}
              <Card.Footer>
                {Array.from({ length: el.rating }, (_, i) => <Star key={i} color="orange" size={32} />)}
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      ))}
    </>
  );
}

export default ReviewList;
