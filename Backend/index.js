import {got} from "got";
//import router from "express";
import  express  from 'express';
//const express = require('express')
import pipeline from 'stream';
import fetch from 'node-fetch';
var router = express.Router();
var app = express();
//`https://api.tomorrow.io/v4/timelines?location=${17.593},${78.574}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`
   app.get("/weather",async (req, res)    => {
   
   const r = await GetWeather("45","45");
    res.send(r);
   
})

async function GetWeather(lat,long)
{
    
    let url = `https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`
    console.log("url = "+url); 
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
  return text;
    //fetch(url).then((res) =>{
      //  res.json().then((res1)=>{
        //    console.log(res1);
          //  return await res1.json();
        //})
//})
}
app.listen(9011, function () {
    console.log("server started!");
})