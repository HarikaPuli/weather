import TempDetails from './Temp';
import Weather from './weather';
import './App.css';

function App() {
  
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Weather Forecast</h1>
      <Weather/>
      <TempDetails/>
    </div>
  );
}

export default App;
