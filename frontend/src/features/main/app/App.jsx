import './App.css';
import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import PlacePage from '../../placePage/PlaceInfo';

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <PlacePage />
    </GeistProvider>
  );
}

export default App;
