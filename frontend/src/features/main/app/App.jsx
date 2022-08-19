import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../../../Category/Category';

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
          <Route path="category/:id" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
