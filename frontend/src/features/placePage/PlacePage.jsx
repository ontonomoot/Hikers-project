import React from 'react';
import { Page } from '@geist-ui/core';
import PlaceInfo from './PlaceInfo';
import PlaceGallery from './PlaceGallery';
import ReviewList from './reviews/ReviewList';

function PlacePage() {
  const user = true;

  return (
    <Page>
      <PlaceInfo user={user} />
      <PlaceGallery />
      <ReviewList user={user} />
    </Page>
  );
}

export default PlacePage;
