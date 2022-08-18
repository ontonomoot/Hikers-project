import React from 'react';
import { Grid, Image } from '@geist-ui/core';

function PlaceGallery() {
  const photos = [
    'https://www.onlinesnowboardcoach.com/wp-content/uploads/snowboard-freeride-tutorial-2.jpg',
    'https://www.salomon.com/sites/default/files/homepage/secondary/01_Home-SecondaryPush_Desktop_11.jpg?fit=cover&orientation=1&optimize=low&bg-color=f5f5f5&format=pjpg&auto=webp&width=885&dpr=1.25',
    'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/03/03/187265.jpg',
    'https://static01.nyt.com/images/2021/01/26/sports/26snowboard-kianaclay/26snowboard-kianaclay-mobileMasterAt3x.jpg',
    'https://cdn.hswstatic.com/gif/snowboarding-update.jpg',
    'https://www.lutsen.com/sites/default/files/styles/scale_1440/public/2021-10/5%20DS-morning-groomer.jpg?itok=Z0OvcQ7S',
    'https://www.blacksheepsnowboardschool.com/img/rickards.jpg'
  ];

  return (
    <Grid.Container gap={2} justify="center">
      {photos.map((el) => <Grid xs><Image shadow width="100%" height="50px" src={el} /></Grid>)}
    </Grid.Container>
  );
}

export default PlaceGallery;
