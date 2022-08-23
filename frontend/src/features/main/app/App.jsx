import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
// eslint-disable-next-line import/extensions
import Category from '../../Category/Category.jsx';
// import Categories from '../../Category/Categories';
import './App.css';
import MainPage from '../MainPage.jsx';
import Navbar from '../navbar/Navbar';
import PlacePage from '../../placePage/PlacePage';
import Registration from '../registration/Registration';
import Login from '../login/Login';
import { categoriesThunk } from '../mainPage';
import { auth } from '../auth';
import store from '../../../store';
import Profile from '../../profile/Profile.jsx';
import Favourites from '../../Favourites/Favourites.jsx';
import Footer from '../footer/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    dispatch(categoriesThunk());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/categories/:id/places/:placeid" element={<PlacePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
