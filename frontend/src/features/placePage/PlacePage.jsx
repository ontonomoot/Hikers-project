import React from 'react';
import { Page } from '@geist-ui/core';
import PlaceInfo from './PlaceInfo';
import PlaceGallery from './PlaceGallery';
import ReviewList from './reviews/ReviewList';

function PlacePage() {
  return (
    <Page>
      <PlaceInfo />
      <PlaceGallery />
      <ReviewList />
    </Page>
  );
}

export default PlacePage;
