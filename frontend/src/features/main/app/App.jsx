import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from '../MainPage';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';
import Registration from '../registration/Registration';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
