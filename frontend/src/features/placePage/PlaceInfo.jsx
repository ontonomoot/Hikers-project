import React from 'react';
import { Card, Text, Divider, Button, Drawer } from '@geist-ui/core';
import { useSelector } from 'react-redux';
import Star from '@geist-ui/icons/star';
import { selectorUserSession } from '../main/auth';
import './PlacePage.css';
// eslint-disable-next-line import/extensions
import Weather from '../weather/Weather.jsx';

function PlaceInfo() {
  const [state, setState] = React.useState(false);
  const user = useSelector(selectorUserSession);
  const description = 'Some text about this place. Interesting text, but not too big. Just some information';
  const title = 'Супер-кэмпинг';
  const rating = 5;

  return (
    <div className="info-container">
      <div>Here will be a map</div>
      <Card width="600px">
        <Card.Content>
          <Text b my={0}>{title}</Text>
        </Card.Content>
        <Divider h="1px" my={0} />
        <Card.Content>
          <Text>{description}</Text>
        </Card.Content>
        <Card.Footer id="rating">
          <div>
            {Array.from({ length: rating }, (_, i) => <Star key={i} color="orange" size={32} />)}
          </div>
          <Button auto onClick={() => setState(true)} mr="10px">Погода</Button>
          <Drawer visible={state} onClose={() => setState(false)} placement="top">
            <Weather />
          </Drawer>
          {user && <Button>В избранное</Button>}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default PlaceInfo;
