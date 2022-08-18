import React from 'react';
import { Page } from '@geist-ui/core';
import MainInfo from './MainInfo';
import PlaceGallery from './PlaceGallery';

function PlacePage() {
  return (
    <Page>
      <MainInfo />
      <PlaceGallery />
    </Page>
  );
}

export default PlacePage;
