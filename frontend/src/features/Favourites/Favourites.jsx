import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  favouritesThunk, selectorFavourites
  // eslint-disable-next-line import/no-useless-path-segments
} from '../Favourites/favourites';
// eslint-disable-next-line import/extensions
import FavPlace from './favPlace.jsx';
import './favourites.css';

export default function Favourites() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favPlaces = useSelector(selectorFavourites);

  console.log('favourites', favPlaces);

  useEffect(() => {
    dispatch(favouritesThunk(id));
  }, []);

  return (
    <div className="favouritesBox">
      <h1>Избранное</h1>
      {
        favPlaces && favPlaces.map((favPlace, i) => <FavPlace key={`${i + 1}`} favPlace={favPlace} />)
      }
    </div>
  );
}
