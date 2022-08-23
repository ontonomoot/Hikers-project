/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deleteFavPlaceThunk, selectorFavourites
  // eslint-disable-next-line import/no-useless-path-segments
} from '../Favourites/favourites';

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
          <div className="close" id={favPlace.id} onClick={handleClick} />
        </div>
        <p className="favPlaceDesc">{favPlace && `${favPlace.description.slice(100)}......`}</p>
        <p className="favPlaceDesc">
          Рейтинг: {favPlace && favPlace.rating ? Array.from({ length: favPlace.rating }, (_, i) => <Star key={i} color="orange" size={22} />) : <p>У места нет отзывов</p>}
        </p>
        <button type="button" className="favPlaceBtn">Собраться!</button>
      </Card>
    </div>
  );
}
