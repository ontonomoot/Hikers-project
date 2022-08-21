import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorCategory, categoryThunk } from '../Category/category';
import { getCoordinate, selectorWeather } from './weather';
import './Weather.css';
import Category from '../Category/Category';

function Weather() {
const dispatch = useDispatch();
const weatherSelector = useSelector(selectorWeather);
const category = useSelector(selectorCategory);
// eslint-disable-next-line no-console
console.log(category, 'categoryyyyyyyyyyyyy');

console.log(weatherSelector, 'weather');

const searchLocation = async (event) => {
  dispatch(getCoordinate({ lat: 35.86878786, lon: 30.768668878 }));
};

useEffect(() => {
  searchLocation();
  dispatch(categoryThunk(2));
  console.log('useEffect');
}, []);

return (
  <div>
    <div className="weather-days">
      {weatherSelector && weatherSelector.map((day) => (
        <div className="weather-day" key={day.id}>
          <h3>{day.dt_txt.slice(5, 10).split('-').reverse().join('.')}</h3>
          <h4>
            {`${day.main.temp.toFixed(1)} °C`}
            <img className="weather-img" src={`/images/categories/weather/${day.weather[0].main.toLowerCase()}.png`} alt="img" />
            <h4>
              {`Ветер ${day.wind.speed.toFixed(1)} м/с`}
            </h4>
          </h4>
        </div>
      )
      )}
    </div>
    <Category />
  </div>
);
}

export default Weather;

// import React, { useState } from 'react';
// import './Weather.css';

// function App() {
//   const [data, setData] = useState();
//   // const [input, setCity] = useState({});
//   const [location, setLocation] = useState([]);
//   const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=50.09&lon=30.09&units=metric&&appid=7aa47db807150d867450e03bfa107b9e';

//   const searchLocation = async (event) => {
//     if (event.key === 'Enter') {
//       const response = await fetch(url);
//       const datas = await response.json();
//       const arrDays = [];
//       for (let i = 1; i < datas.list.length; i += 8) {
//           arrDays.push(datas.list[i]);
//         }
//         setData((prev) => {
//           prev = arrDays;
//           return prev;
//         });
//         // console.log(arrDays[0]);
//         setLocation('');
//       }
//   };

// return (
//   <div>
//     <div className="search">
//       <input
//         type="text"
//         value={location}
//         onChange={(event) => setLocation(event.target.value)}
//         onKeyPress={searchLocation}
//         placeholder="Ваш город"
//       />
//     </div>
//     <div className="weather-days">
//       {data && data.map((day) => (
//         <div className="weather-day" key={day.id}>
//           <h3>{day.dt_txt.slice(5, 10).split('-').reverse().join('.')}</h3>
//           <h4>
//             {`${day.main.temp.toFixed(1)} °C`}
// eslint-disable-next-line max-len
//             <img className="weather-img" src={`/images/categories/weather/${day.weather[0].main.toLowerCase()}.png`} alt="img" />
//             <h4>
//               {`Ветер ${day.wind.speed} м/с`}
//             </h4>
//           </h4>
//         </div>
//       )
//       )}
//     </div>

//   </div>
// );
// }

// export default App;
