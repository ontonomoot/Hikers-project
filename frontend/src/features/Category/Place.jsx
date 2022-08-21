/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import './category.css';

export default function Place({ place }) {
  const { id } = useParams();

  return (
    <Card style={{ border: ' 1px solid #0d071c' }} className="cardPlace">
      <p>{place.title}</p>
      {
        Array.from({ length: place.rating }, (_, i) => <Star key={i} color="orange" size={22} />)
      }
    </Card>
  );
}
