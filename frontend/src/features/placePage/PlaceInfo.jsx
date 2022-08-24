/* eslint-disable no-bitwise */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Drawer, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { selectorUserSession } from '../main/auth';
import './PlacePage.css';
// eslint-disable-next-line import/extensions
import Weather from '../weather/Weather.jsx';
import { placeThunk, selectorPlaces } from '../Category/placesSlice';
import {
  addFavPlaceThunk, selectorFavourites, selectorAddFavourites
  // eslint-disable-next-line import/no-useless-path-segments
} from '../Favourites/favouritesSlice';
import initMap from './placeMapApi';

function PlaceInfo() {
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectorUserSession);
  const arrPlaces = useSelector(selectorPlaces);
  const checkAddedPlace = useSelector(selectorAddFavourites);
  const { id, placeid } = useParams();
  const place = arrPlaces && arrPlaces.find((el) => el.id === Number(placeid));
  // console.log('checkplace', place);

  const checkFavPlace = user && checkAddedPlace && checkAddedPlace
    .filter((el) => (el.user_id === user.id))
    .filter((el) => el.place_id === Number(placeid));

  const checkStatus = user && checkAddedPlace && checkFavPlace.length && checkFavPlace[0].status;

  function handleFavourite(event) {
    event.preventDefault();
    dispatch(addFavPlaceThunk(placeid));
  }

  useEffect(() => {
    dispatch(addFavPlaceThunk(id));
    dispatch(placeThunk(id));
  }, []);

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    dispatch(placeThunk(id, placeid));
    async function winFunc(num) {
      await window.ymaps.ready(initMap(num));
    }
    if (place) {
      // console.log(1);
      winFunc(place);
    }
  }, [dispatch, id, placeid, place === undefined]);

  if (!place) return <div>load</div>;

  return (
    <div className="info-container">
      <div id="placeMap" style={{ width: 500, height: 350, border: 'double grey', borderRadius: 8 }} />
      <Card width="600px">
        <Card.Content>
          <Text b my={0}>{place && place.title}</Text>
        </Card.Content>
        <Divider h="1px" my={0} />
        <Card.Content>
          {place && place.description.split('\n').map((el) => <Text key={uuidv4()}>{el}<br /></Text>)}
        </Card.Content>
        <Card.Footer id="rating">
          <div>
            {Array.from({ length: place && place.rating }, (_, i) => <Star key={i} color="orange" size={32} />)}
          </div>
          <Button auto onClick={() => setState(true)} mr="10px">Погода</Button>
          <Drawer visible={state} onClose={() => setState(false)} placement="top">
            <Weather geo={place && place.geo} />
          </Drawer>
          {checkStatus ? (
            // eslint-disable-next-line react/jsx-indent
            <Button
              disabled
            >
              Уже в избранном
            </Button>
          ) : (
            <Button
              onClick={handleFavourite}
            > В избранное
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default PlaceInfo;
