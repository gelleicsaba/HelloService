export {}
const express = require('express')
const weatherRoute = express.Router()

weatherRoute.get("/", (req?:any, res?: any)=> {
    const weatherInfo ={
        siteName: "Weather",
        description: 'bad',
        message: 'The weather is bad'

    }
    res.json(weatherInfo)
})

module.exports = weatherRoute