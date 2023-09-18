import axios from 'axios'
import { useState } from 'react';
import Weather from './weather';
import './App.css';

function App() {
  
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Weather Forecast</h1>
      <Weather/>
    </div>
  );
}

export default App;
