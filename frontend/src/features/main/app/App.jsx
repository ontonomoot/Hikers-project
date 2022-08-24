import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
// eslint-disable-next-line import/extensions
import Category from '../../Category/Category.jsx';
// import Categories from '../../Category/Categories';
import './App.css';
// eslint-disable-next-line import/extensions
import MainPage from '../MainPage.jsx';
import Navbar from '../navbar/Navbar';
import PlacePage from '../../placePage/PlacePage';
import Registration from '../registration/Registration';
import Login from '../login/Login';
import { categoriesThunk } from '../mainPage';
import { auth } from '../auth';
import store from '../../../store';
// eslint-disable-next-line import/extensions
import Profile from '../../profile/Profile.jsx';
// eslint-disable-next-line import/extensions
import Favourites from '../../Favourites/Favourites.jsx';
import Footer from '../footer/Footer';
import TodoList from '../../todoList/TodoList';
// eslint-disable-next-line import/extensions
import Friends from '../../friends/Friends.jsx';
import Subscribers from '../../friends/Subscribers';
import { getFriendsThunk } from '../../friends/friends';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    dispatch(categoriesThunk());
    dispatch(getFriendsThunk());
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
          <Route path="/categories/:id/places/:placeid/todo" element={<TodoList />} />
          <Route path="/profile/:id/friends" element={<Friends />} />
          <Route path="/profile/:id/subscribers" element={<Subscribers />} />
        </Route>
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
