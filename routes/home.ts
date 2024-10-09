const express = require('express')
const homeRoute = express.Router()

homeRoute.get("/", (req, res)=> {
    const homeInfo ={
        siteName: "Home",
        greeting: "Hello World"
    }
    res.json(homeInfo)
})

module.exports = homeRoute