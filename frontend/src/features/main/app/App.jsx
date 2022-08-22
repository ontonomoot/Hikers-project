import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import Category from '../../Category/Category';
// import Categories from '../../Category/Categories';
import './App.css';
import MainPage from '../MainPage';
import Navbar from '../navbar/Navbar';
import PlacePage from '../../placePage/PlacePage';
import Registration from '../registration/Registration';
import Login from '../login/Login';
import Weather from '../../weather/Weather';
import { categoriesThunk } from '../mainPage';
import { auth } from '../auth';
import store from '../../../store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesThunk());
    dispatch(auth());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/places/:id" element={<PlacePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/weather" element={<Weather />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
