import React from 'react';
// import { GeistProvider, CssBaseline } from '@geist-ui/core';
// import PlacePage from '../../placePage/PlaceInfo';

// function App() {
//   return (
//     <GeistProvider>
//       <CssBaseline />
//       <PlacePage />
//     </GeistProvider>
import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from '../MainPage';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
