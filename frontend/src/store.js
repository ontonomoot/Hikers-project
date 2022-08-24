/* eslint-disable import/extensions */
import {
  configureStore
} from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth.js';
import mainPage from './features/main/mainPage.js';
import categorySlice from './features/Category/categorySlice.js';
import weatherSlice from './features/weather/weather.js';

import placeSlice from './features/Category/placesSlice.js';
import editProfileSlice from './features/profile/profile.js';
import todoSlice from './features/todoList/todoSlice.js';
import favouritesSlice from './features/Favourites/favouritesSlice.js';
import reviewSlice from './features/placePage/reviews/reviewSlice.js';
import chatSlice from './features/chat/chatReducer.js';

const store = configureStore({
  reducer: {
    auth: navBarSlice,
    main: mainPage,
    category: categorySlice,
    places: placeSlice,
    review: reviewSlice,
    weather: weatherSlice,
    profile: editProfileSlice,
    favourites: favouritesSlice,
    todo: todoSlice,
    chat: chatSlice,
  }
});

export default store;
