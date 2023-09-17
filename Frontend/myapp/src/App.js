import axios from 'axios'
import { useState } from 'react';
import Weather from './weather';
import './App.css';

function App() {
  const [Weather, setWeather]= useState([]);
  const fetchweather = () =>
  {
    axios.get("").then(
      response => {
        console.log(response);
      },
      error =>
      {
        console.log(error);
      }
    )
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Weather Forecast</h1>
      <Weather/>
    </div>
  );
}

export default App;
