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
  const navigate = useNavigate();
  // console.log('selector', favPlaces);

  function handleDeleteClick(event) {
    // console.log(event.target.id);
    const favPlaceID = {
      id: event.target.id
    };
    // console.log('placeID', placeID);
    dispatch(deleteFavPlaceThunk(favPlaceID));
  }

  console.log('favPlace', favPlace);

  return (
    <div>
      <Card className="favDescription" id="favPhoto" onClick={() => navigate(`/categories/${favPlace['Place.category_id']}/places/${favPlace.place_id}`)}><img src={`${favPlace['Photos.title']}`} alt="" /></Card>
      <Card className="favDescription" id="favDescription">
        <div className="favCardTop">
          <p className="favPlaceTitle" onClick={() => navigate(`/categories/${favPlace['Place.category_id']}/places/${favPlace.place_id}`)}>
            {favPlace && favPlace['Place.title']}
          </p>
        </div>
        <p className="favPlaceDesc">{favPlace['Place.description'] && `${favPlace['Place.description'].slice(0, 100)}......`}</p>
        <p className="favPlaceDesc">
          Рейтинг: {favPlace && favPlace['Place.rating'] ? Array.from({ length: favPlace['Place.rating'] }, (_, i) => <Star key={i} color="orange" size={22} />) : 'У места нет отзывов'}
        </p>
        <Button variant="outline-success" id={favPlace.id} className="favPlaceBtn">Собраться</Button>
        <Button variant="outline-secondary" id={favPlace.id} onClick={handleDeleteClick} className="delPlaceBtn">Удалить</Button>
      </Card>
    </div>
  );
}
