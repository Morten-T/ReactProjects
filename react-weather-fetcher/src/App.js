import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


// function getWeatherData() {
//   fetch('https://api.openweathermap.org/data/2.5/weather?q=Aarhus&appid=(YOURAPI KEY)&units=metric')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       temp = data.main.temp;
//     });
// }


function App() {

  async function get(url) {
    let response = await fetch(url);
    return await response.json();
  }

  async function getWeather(city) {
    // let weather = await get('https://api.openweathermap.org/data/2.5/weather?q=Aarhus&appid=b8642f6a6885b73b64fe78b8c6e4631e');
    let urlString = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b8642f6a6885b73b64fe78b8c6e4631e';
    let weather = await get(urlString);
    // Save the temp in the state
    setTemp(weather.main.temp); // Hvorfor skal man bruge useEffect?
    console.log(weather);
  }
  const [temp, setTemp] = useState(0);

  function handleTempChange(tempVal) {
    let newTemp = temp + tempVal;
    setTemp(newTemp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='title-text'>
          Weather data
        </p>
        <div>Place: Aarhus 8200</div>
        <div>Temperature: {temp}°C</div>
        <button onClick={() => handleTempChange(10)}>Get weather data</button>
        <button onClick={() => getWeather()}>Fetch data from example</button>
        <input id='cityInput' className='city-text' type='text' placeholder='City' />
      </header>
    </div>
  );
}

export default App;
