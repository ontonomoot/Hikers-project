/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import './category.css';

export default function Place({ place }) {
  const { id } = useParams();

  return (
    <>
      <Card style={{ border: ' 1px solid #0d071c' }} className="cardPlace">{place.title}</Card>
      {/* <Card>{place.rating}</Card> */}
    </>
  );
}
