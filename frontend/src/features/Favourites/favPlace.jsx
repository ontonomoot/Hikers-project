/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Card, Text, Divider } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
  deleteFavPlaceThunk, selectorFavourites
  // eslint-disable-next-line import/no-useless-path-segments
} from './favouritesSlice';

export default function FavPlaces({ favPlace }) {
  // const favPlaces = useSelector(selectorFavourites);
  const dispatch = useDispatch();
  const favPlaces = useSelector(selectorFavourites);
  const navigate = useNavigate();
  // console.log('selector', favPlaces);

  function handleClick(event) {
    // console.log(event.target.id);
    const placeID = {
      id: event.target.id
    };
    // console.log('placeID', placeID);
    dispatch(deleteFavPlaceThunk(placeID));
  }

  // console.log('favPlace', favPlace);

  return (
    <div>
      <Card className="favDescription" id="favPhoto" onClick={() => navigate(`/categories/${favPlace.category_id}/places/${favPlace.id}`)}><img src={`${favPlace['Photos.title']}`} alt="" /></Card>
      <Card className="favDescription" id="favDescription">
        <div className="favCardTop">
          <p className="favPlaceTitle" onClick={() => navigate(`/categories/${favPlace.category_id}/places/${favPlace.id}`)}>
            {favPlace && favPlace.title}
          </p>
        </div>
        <p className="favPlaceDesc">{favPlace && `${favPlace.description.slice(100)}......`}</p>
        <p className="favPlaceDesc">
          Рейтинг: {favPlace && favPlace.rating ? Array.from({ length: favPlace.rating }, (_, i) => <Star key={i} color="orange" size={22} />) : <p>У места нет отзывов</p>}
        </p>
        <Button variant="outline-success" className="favPlaceBtn">Собраться</Button>
        <Button variant="outline-secondary" id={favPlace.id} onClick={handleClick} className="delPlaceBtn">Удалить</Button>
      </Card>
    </div>
  );
}
