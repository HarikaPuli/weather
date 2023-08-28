import  express  from 'express';
import fetch from 'node-fetch';
var router = express.Router();
var app = express();
   app.get("/weather",async (req, res)    => {
    const myArray = req.query.location.split(',');
    const newtimestep = req.query.timesteps;
    const r = await GetWeather(myArray[0],myArray[1], newtimestep);
    res.send(r);
   
})

async function GetWeather(lat,long,timesteps)
{
    
    let url = `https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`
     const response = await fetch(url);
    const text = await response.text();
    return text;

}
app.listen(9011, function () {
    console.log("server started!");
})