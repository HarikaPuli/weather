import {got} from "got";
//import router from "express";
import  express  from 'express';
//const express = require('express')
import pipeline from 'stream';
import fetch from 'node-fetch';
var router = express.Router();
var app = express();
//`https://api.tomorrow.io/v4/timelines?location=${17.593},${78.574}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`
   app.get("/weather", function (req, res) {
    console.log("starting request");
    //GetWeather("45","45");
    res.send( GetWeather("45","45"));
})
function GetWeather(lat,long)
{
    lat = 12.3334;
    long = 23.454;
    let url = `https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`
    console.log("url = "+url);
    fetch(url).then((res) =>{
        res.json().then((res1)=>{
            return res1;
            console.log(res1);
        })
})
}
app.listen(9011, function () {
    console.log("server started!");
})