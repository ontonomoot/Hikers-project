import React from 'react';
import { Card, Text, Divider, Button } from '@geist-ui/core';

export default function FavPlaces({ favPlace }) {
  // console.log(favPlace);
  return (
    <div>
      <Card className="favDescription" id="favPhoto"><img src={`${favPlace['Photos.title']}`} alt="" /></Card>
      <Card className="favDescription" id="favDescription">
        {favPlace.title}
      </Card>
    </div>
  );
}
