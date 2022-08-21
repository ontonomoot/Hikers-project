export default async function init() {
  // добавляем карту на сайт
  const myMap = new window.ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [59.93139123904442, 30.41594565054736],
    // Уровень масштабирования.
    zoom: 3
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

  const response = await fetch(`/api/places/${id}`);

  const placesDB = await response.json();

  // console.log('apiMap', placesDB);

  const geocoder = [];
  placesDB.forEach((place, i) => {
    // console.log(place['Photos.title'])
    geocoder[i] = [];
    geocoder[i].push(window.ymaps.geocode(place.geo));
    geocoder[i].push(place.title);
    geocoder[i].push(place.description);
    geocoder[i].push(place.id);
    geocoder[i].push(place['Photos.title']);
  });

  let count = 0;

  console.log(geocoder);

  geocoder.forEach((geo) => {
    geo[0].then((res) => {
      // console.log(`${geo}`);
      // координаты объекта
      const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
      // console.log('координаты', coordinates);
      // Добавление метки (Placemark) на карту
      const placemark = new window.ymaps.Placemark(coordinates, {
        hintContent: `${geo[1]}`,
        balloonContentHeader: `<img src=${geo[4]} id="yandexImage">`,
        balloonContentBody: `<span>${geo[1]}</span><br>
        <button><a href = '/places/${geo[3]}' class="yandexTitle">Подробнее</a></button>`
      }, {
        // iconLayout: 'default#image',
        // // Своё изображение иконки метки.
        // iconImageHref: `${geo[4]}`,
        // iconImageSize: [50, 50],
        // iconImageOffset: [0, 0]
      });
      myMap.geoObjects.add(placemark);
      count += 1;
    });
  });
}
