import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  favouritesThunk, selectorFavourites
// eslint-disable-next-line import/no-useless-path-segments
} from '../Favourites/favourites';

export default function Favourites() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const places = useSelector(selectorFavourites);
  // console.log('places', places);

  useEffect(() => {
    dispatch(favouritesThunk(id));
  }, []);

  return (
    <div className="favouritesBox">
      <h1>Избранное</h1>
    </div>
  );
}
