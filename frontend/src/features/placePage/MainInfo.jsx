import React from 'react';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import './PlacePage.css';

function MainInfo() {
  const description = 'Some text about this place. Interesting text, but not too big. Just some information';
  const title = 'Супер-кэмпинг';
  const rating = 5;
  const user = true;

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
          {user && <Button>В избранное</Button>}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default MainInfo;
