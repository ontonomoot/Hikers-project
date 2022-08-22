import React from 'react';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';

export default function FavPlaces({ favPlace }) {
  // console.log(favPlace);
  return (
    <div>
      <Card className="favDescription" id="favPhoto"><img src={`${favPlace['Photos.title']}`} alt="" /></Card>
      <Card className="favDescription" id="favDescription">
        <p className="favPlaceTitle">{favPlace.title}</p>
        <p className="favPlaceDesc">{`${favPlace.description.slice(0, 200)}......`}</p>
        <p className="favPlaceDesc">
          Рейтинг: {favPlace.rating ? Array.from({ length: favPlace.rating }, (_, i) => <Star key={i} color="orange" size={22} />) : <p>У места нет отзывов</p>}
        </p>
        <button type="button" className="favPlaceBtn">Собраться!</button>
      </Card>
    </div>
  );
}
