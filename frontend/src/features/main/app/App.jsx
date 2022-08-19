import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from '../MainPage';
import Navbar from '../navbar/Navbar';
import Registration from '../registration/Registration';
import Login from '../login/Login.jsx';
import Weather from '../../weather/Weather';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/weather" element={<Weather />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
