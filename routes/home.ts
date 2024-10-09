export {}
const express = require('express')
const homeRoute = express.Router()

homeRoute.get("/", (req?: any, res?: any)=> {
    const homeInfo ={
        siteName: "Home",
        greeting: "Hello World"
    }
    res.json(homeInfo)
})

module.exports = homeRoute