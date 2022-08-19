import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../../../Category/Category';
import './App.css';
import MainPage from '../MainPage';
import Navbar from '../navbar/Navbar';
import PlacePage from '../../placePage/PlacePage';
import Registration from '../registration/Registration';
import Login from '../login/Login';
import Weather from '../../weather/Weather';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="/places/:id" element={<PlacePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/weather" element={<Weather />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
