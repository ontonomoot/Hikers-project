import React, { useState } from 'react';
import './Weather.css';

function App() {
  const [data, setData] = useState({});
  const [input, setCity] = useState({});
  const [location, setLocation] = useState('');
  const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=55&lon=37&units=metric&&appid=7aa47db807150d867450e03bfa107b9e';
  // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37&lon=55&appid=7aa47db807150d867450e03bfa107b9e';
  // const url = `http://api.weatherstack.com/current?access_key=53d03c2b20682b38005778db9a0e68d3&query=${location}&forecast_days = 3`;

  // const url = 'https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=trueX-Yandex-API-Key: ed6faf26-bc47-4320-b9d1-be223d263c7e';
  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      const response = await fetch(url);
      const datas = await response.json();
      setData(datas);
      const city = await event.target.value;
      setCity(city);
      // eslint-disable-next-line no-console
      console.log(input);
      // eslint-disable-next-line no-console
      console.log(city);
      // eslint-disable-next-line no-console
      console.log(datas);
      setLocation('');
      // {lon: 37.6156, lat: 55.7522}
    }
  };

return (
  <div>
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Ваш город"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed(1)} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            { data.main ? <p className="bold">{data.main.feels_like.toFixed(1)} °C</p> : null}
            <p>Ощущается</p>
          </div>
          <div className="humadility">
            { data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Влажность</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} м/с</p> : null}
            <p>Ветер</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
