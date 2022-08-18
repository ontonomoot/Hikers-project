import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from '../navbar/Navbar';
import MainPage from '../MainPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
