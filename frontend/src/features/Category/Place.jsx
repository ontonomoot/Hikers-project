/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import './category.css';

export default function Place({ place, placeID }) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Card className="cardPlace" id="cardPlace" onClick={() => navigate(`/categories/${id}/places/${placeID}`)}>
      <p>{place.title}</p>
      {
        place.rating ? Array.from({ length: place.rating }, (_, i) => <Star key={i} color="orange" size={22} />) : <p>У места нет отзывов</p>
      }
    </Card>
  );
}
