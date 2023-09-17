

import { useState } from 'react';
import axios from 'axios'
function Weather(props) {
    const [coords, setCoords] = useState({
        lat: '',
        long: ''
    })

    const updateCoords = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setCoords({ ...coords, [name]: value })
    }
    const fetchWeatherDetails = (event) => {
        event.preventDefault();
        console.log("calling api"); 
        axios.get("http://127.0.0.1:9011/weather?location="+coords.lat+","+coords.long).then(            //making api call
        response =>{
          console.log(response);              //it'll give only response of the data as object
          console.log(response.data);         //.data gives the data inside the object
         
        },
        error =>
        {
          console.log(error);
        }
      )
    }
    return (
        <div>
            <form>
                <input onChange={updateCoords} type="text" name="lat" placeholder="enter latitude"></input>
                <input onChange={updateCoords} type="text" name="long" placeholder="enter longitude"></input>
                <button onClick={fetchWeatherDetails}>Fetch Weather</button>
            </form>
        </div>
    )
}

export default (Weather);