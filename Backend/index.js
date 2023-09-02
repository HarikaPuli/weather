import  express  from 'express';
import fetch from 'node-fetch';
var router = express.Router();
var app = express();
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';


app.use(express.json());
dotenv.config();

const client = new MongoClient(process.env.DATABASE_URL);

client.connect();
var db = client.db("weather");

 app.get("/weather",async (req, res)    => {
     
   await ReadData(req.query.location);
    const r = await GetWeather(req.query.location);
    res.send(r);
   
})

 async function ReadData(location)
{
    var data =db.collection("location").find({},function (err, result) {
        if (err) {
            console.log(err);
        } else {

            console.log(JSON.stringify(result));
        }
    })
    return data;
}

async function GetWeather(location)
{
    //if found in db return db value else getweather method.
    let url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`
    const response = await fetch(url);
    const responseData = await response.text();
    var _key = location;
    var myobj = {_key , responseData};
    db.collection("location").insertOne(myobj, function(err, res) {
        if (err) 
        {
            console.log("error = "+err);
            throw err;
        }
        console.log("1 document inserted");
    });
    return responseData;
}
app.listen(process.env.PORT_NO, () => {
    console.log("server started on " + process.env.PORT_NO);
})