export default async function init() {
  const {
    id
  } = document.querySelector('.category');

  const response = await fetch(`category/${id}`);
  //  response.json();
  const places = response.json();
  console.log(places);

  // eslint-disable-next-line no-unused-vars
  const myMap = new window.ymaps.Map('map', {
    center: [59.93139123904442, 30.41594565054736],
    zoom: 10
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.controls.remove('searchControl'); // удаляем поиск
}
