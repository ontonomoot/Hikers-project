export default async function init() {
  // добавляем карту на сайт
  const myMap = new window.ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [59.93139123904442, 30.41594565054736],
    // Уровень масштабирования.
    zoom: 10
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.controls.remove('searchControl'); // удаляем поиск

  // получаем места из базы данных
  const {
    id
  } = document.querySelector('.category');

  const response = await fetch(`category/${id}`);

  const placesDB = await response.json();

  const geocoder = [];
  placesDB.forEach((place, i) => {
    // console.log('place.geo', place.geo);
    geocoder[i] = [];
    geocoder[i].push(window.ymaps.geocode(place.geo));
    geocoder[i].push(place.title);
    geocoder[i].push(place.description);
    geocoder[i].push(place.id);
  });

  // console.log('asdasdasd', geocoder);

  let count = 0;

  geocoder.forEach((geo) => {
    geo[0].then((res) => {
      console.log('ответ', res);
      // координаты объекта
      const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
      // console.log('координаты', coordinates);
      // Добавление метки (Placemark) на карту
      const placemark = new window.ymaps.Placemark(coordinates, {
        hintContent: `${geo[1]}`,
        balloonContentHeader: `<a href = "#">${geo[1]}</a><br>`,
        balloonContentBody: `<p>${geo[2]}</p>`
      }, {
        // iconLayout: 'default#image',
        // // Своё изображение иконки метки.
        // iconImageHref: '',
        // Размеры метки.
        // iconImageSize: [100, 100],
        // iconImageOffset: [0, 0]
      });
      // console.log('placemark', placemark);
      // console.log('MyMap', myMap);
      myMap.geoObjects.add(placemark);
      count += 1;
    });
  });
}
